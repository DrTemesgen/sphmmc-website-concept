import Anthropic from "@anthropic-ai/sdk";
import { buildSystemPrompt, fallbackAnswer } from "@/lib/assistant-knowledge";

export const runtime = "nodejs";

interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

const MAX_TURNS = 20;
const MAX_MESSAGE_LENGTH = 2000;

/**
 * Assistant provider order:
 *  1. ANTHROPIC_API_KEY  → Claude (best quality).
 *  2. CHAT_API_KEY       → any OpenAI-compatible endpoint (e.g. Qwen via
 *                          OpenRouter / Cloudflare Workers AI / DashScope /
 *                          Together / a local Ollama). Configure with:
 *                            CHAT_API_KEY   = <your key>
 *                            CHAT_BASE_URL  = https://openrouter.ai/api/v1   (default)
 *                            CHAT_MODEL     = qwen/qwen-2.5-7b-instruct:free  (default)
 *  3. neither            → built-in rule-based navigator (no key needed).
 */

async function claudeReply(turns: ChatTurn[]): Promise<string> {
  const client = new Anthropic();
  const response = await client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 1024,
    system: [{ type: "text", text: buildSystemPrompt(), cache_control: { type: "ephemeral" } }],
    messages: turns,
  });
  return response.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("\n")
    .trim();
}

async function openAICompatibleReply(turns: ChatTurn[]): Promise<string> {
  const baseUrl = (process.env.CHAT_BASE_URL ?? "https://openrouter.ai/api/v1").replace(/\/$/, "");
  const model = process.env.CHAT_MODEL ?? "qwen/qwen-2.5-7b-instruct:free";
  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CHAT_API_KEY}`,
      // Optional attribution headers used by OpenRouter (ignored elsewhere):
      "HTTP-Referer": "https://sphmmc-website-concept.vercel.app",
      "X-Title": "Ask St. Paul's (SPHMMC concept demo)",
    },
    body: JSON.stringify({
      model,
      max_tokens: 700,
      temperature: 0.3,
      messages: [{ role: "system", content: buildSystemPrompt() }, ...turns],
    }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Chat provider ${res.status}: ${text.slice(0, 200)}`);
  }
  const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  return (data.choices?.[0]?.message?.content ?? "").trim();
}

export async function POST(request: Request) {
  let body: { messages?: ChatTurn[] };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const turns = (body.messages ?? [])
    .filter((t) => (t.role === "user" || t.role === "assistant") && typeof t.content === "string")
    .slice(-MAX_TURNS)
    .map((t) => ({ role: t.role as "user" | "assistant", content: t.content.slice(0, MAX_MESSAGE_LENGTH) }));

  if (turns.length === 0 || turns[turns.length - 1].role !== "user") {
    return Response.json({ error: "Last message must be from the user" }, { status: 400 });
  }

  const lastUserMessage = turns[turns.length - 1].content;

  const useClaude = !!process.env.ANTHROPIC_API_KEY;
  const useOpenAICompatible = !useClaude && !!process.env.CHAT_API_KEY;

  // No model configured → rule-based navigator so the widget still works.
  if (!useClaude && !useOpenAICompatible) {
    return Response.json({ reply: fallbackAnswer(lastUserMessage), source: "fallback" });
  }

  try {
    const reply = useClaude ? await claudeReply(turns) : await openAICompatibleReply(turns);
    return Response.json({
      reply: reply || fallbackAnswer(lastUserMessage),
      source: reply ? "assistant" : "fallback",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json({ reply: fallbackAnswer(lastUserMessage), source: "fallback" });
  }
}

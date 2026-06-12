import Anthropic from "@anthropic-ai/sdk";
import { buildSystemPrompt, fallbackAnswer } from "@/lib/assistant-knowledge";

export const runtime = "nodejs";

interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

const MAX_TURNS = 20;
const MAX_MESSAGE_LENGTH = 2000;

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
    .map((t) => ({ role: t.role, content: t.content.slice(0, MAX_MESSAGE_LENGTH) }));

  if (turns.length === 0 || turns[turns.length - 1].role !== "user") {
    return Response.json({ error: "Last message must be from the user" }, { status: 400 });
  }

  const lastUserMessage = turns[turns.length - 1].content;

  // Without an API key, fall back to the rule-based navigator so the
  // widget still works in demo / offline deployments.
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ reply: fallbackAnswer(lastUserMessage), source: "fallback" });
  }

  try {
    const client = new Anthropic();
    const response = await client.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 1024,
      system: [
        {
          type: "text",
          text: buildSystemPrompt(),
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: turns,
    });

    const reply = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    return Response.json({
      reply: reply || fallbackAnswer(lastUserMessage),
      source: "assistant",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json({ reply: fallbackAnswer(lastUserMessage), source: "fallback" });
  }
}

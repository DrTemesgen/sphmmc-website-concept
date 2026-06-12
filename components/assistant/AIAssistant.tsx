"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

const WELCOME: ChatTurn = {
  role: "assistant",
  content:
    "ሰላም! Hello! I'm Ask St. Paul's — your virtual guide. I can help you find the right department, book a private-wing consultant, or answer general questions about the College. How can I help you today?",
};

const QUICK_PROMPTS = [
  "How do I book an appointment?",
  "Find a doctor by specialty",
  "Which department treats kidney problems?",
  "Tell me about the specialty centres",
  "How does the referral process work?",
  "What does a private consultation cost?",
  "What programmes do you offer?",
  "How do I apply / admissions?",
  "Where are you located?",
  "What are the visiting hours?",
];

/** Render assistant text, turning internal paths into links. */
function MessageText({ text }: { text: string }) {
  const parts = text.split(/(\/[a-z0-9\-/]+)/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\/[a-z0-9\-/]+$/.test(part) && part.length > 1 ? (
          <Link key={i} href={part} className="font-semibold text-brand underline">
            {part}
          </Link>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatTurn[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    const next: ChatTurn[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Skip the static welcome message — API expects user-first history
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      const data = (await res.json()) as { reply?: string; error?: string };
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            data.reply ??
            "Sorry, something went wrong. Please call 976 for urgent matters, or try again.",
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "I couldn't reach the server. Please check your connection, or call +251 112 75 01 25.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Close assistant" : "Open Ask St. Paul's assistant"}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-brand px-4 py-3 font-display font-bold text-white shadow-lg transition hover:bg-brand-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-sky/50"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M21 12a8 8 0 01-8 8H5l-2 2V12a8 8 0 018-8h2a8 8 0 018 8z" strokeLinejoin="round" />
              <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
              <circle cx="13" cy="12" r="1" fill="currentColor" stroke="none" />
              <circle cx="17" cy="12" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span className="hidden sm:inline">Ask St. Paul&apos;s</span>
          </>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Ask St. Paul's virtual assistant"
          className="fixed bottom-20 right-3 z-50 flex h-[min(560px,calc(100vh-7rem))] w-[min(380px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="bg-navy px-4 py-3 text-white">
            <p className="font-display text-base font-bold">Ask St. Paul&apos;s</p>
            <p className="text-xs text-white/75">Virtual assistant · guidance only, not medical advice</p>
          </div>

          {/* Emergency escape — always pinned */}
          <div className="border-b border-red-200 bg-red-50 px-4 py-1.5 text-[11px] font-semibold text-red-700">
            🚨 Emergency? Call <a href="tel:976" className="underline">976</a> or come straight to our 24/7 emergency department.
          </div>

          {/* Messages */}
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-sm bg-brand text-white"
                      : "rounded-bl-sm bg-paper text-ink"
                  }`}
                >
                  {m.role === "assistant" ? <MessageText text={m.content} /> : m.content}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-paper px-4 py-3" aria-label="Assistant is typing">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:120ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:240ms]" />
                  </span>
                </div>
              </div>
            )}
            {messages.length === 1 && (
              <div className="space-y-2 pt-1">
                <p className="px-1 text-[11px] font-bold uppercase tracking-wide text-muted">
                  Suggested questions
                </p>
                {QUICK_PROMPTS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="block w-full rounded-lg border border-line bg-white px-3 py-2 text-left text-xs font-semibold text-navy transition hover:border-brand hover:bg-paper"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t border-line p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question… / ጥያቄዎን ይጻፉ…"
              aria-label="Your message"
              className="flex-1 rounded-full border border-line px-4 py-2 text-sm focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send"
              className="rounded-full bg-brand p-2.5 text-white transition hover:bg-brand-dark disabled:opacity-40"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M3 11l18-8-8 18-2-8-8-2z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}

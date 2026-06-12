"use client";

const QUESTIONS = [
  "Which department treats kidney problems?",
  "How do I book a private-wing appointment?",
  "How does the referral process work?",
  "What postgraduate programmes do you offer?",
  "Where is the hospital located?",
  "What should I do in an emergency?",
];

/** Sample questions that open the Ask St. Paul's widget pre-filled. */
export default function AskChips() {
  return (
    <div className="mt-5 rounded-xl border border-line bg-white p-5">
      <p className="font-display text-sm font-bold uppercase tracking-wide text-brand">
        Try asking
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {QUESTIONS.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("sphmmc:ask", { detail: q }))}
            className="rounded-full border border-brand/30 bg-paper px-3.5 py-1.5 text-left text-xs font-semibold text-navy transition hover:border-brand hover:bg-brand hover:text-white"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}

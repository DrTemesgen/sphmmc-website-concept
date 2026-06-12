"use client";

import { useState } from "react";
import { Publication } from "@/data/staff";

export default function PublicationList({ publications }: { publications: Publication[] }) {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState(false);

  function toggle(i: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
    setCopied(false);
  }

  function selectAll() {
    setSelected(selected.size === publications.length ? new Set() : new Set(publications.map((_, i) => i)));
    setCopied(false);
  }

  async function copySelected() {
    const items = publications.filter((_, i) => selected.has(i));
    const text = items
      .map((p) => {
        const cite = [p.title, [p.venue, p.year].filter(Boolean).join(", ")].filter(Boolean).join(" — ");
        return p.url ? `${cite}. ${p.url}` : cite;
      })
      .join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center gap-3 text-sm">
        <button type="button" onClick={selectAll} className="font-semibold text-brand hover:underline">
          {selected.size === publications.length ? "Clear all" : "Select all"}
        </button>
        <span className="text-muted">{selected.size} selected</span>
        <button
          type="button"
          onClick={copySelected}
          disabled={selected.size === 0}
          className="rounded-md border border-line px-3 py-1 font-semibold text-navy transition hover:bg-paper disabled:opacity-40"
        >
          {copied ? "Copied ✓" : "Copy selected"}
        </button>
      </div>

      <ul className="space-y-2">
        {publications.map((p, i) => {
          const checkboxId = `pub-${i}`;
          return (
            <li key={i} className="flex items-start gap-3 rounded-lg border border-line p-3">
              <input
                id={checkboxId}
                type="checkbox"
                checked={selected.has(i)}
                onChange={() => toggle(i)}
                aria-label={`Select: ${p.title}`}
                className="mt-1 h-4 w-4 shrink-0 accent-[#1e73be]"
              />
              <label htmlFor={checkboxId} className="flex-1 cursor-pointer text-sm leading-relaxed">
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-semibold text-navy hover:text-brand hover:underline"
                  >
                    {p.title} <span aria-hidden className="text-brand">↗</span>
                  </a>
                ) : (
                  <span className="font-semibold text-navy">{p.title}</span>
                )}
                {(p.venue || p.year) && (
                  <span className="mt-0.5 block text-xs text-muted">
                    {[p.venue, p.year].filter(Boolean).join(" · ")}
                  </span>
                )}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

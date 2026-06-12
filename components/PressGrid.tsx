"use client";

import { useState } from "react";
import { PRESS_ITEMS, PRESS_TOPICS, PressTopic } from "@/data/press";

export default function PressGrid() {
  const [topic, setTopic] = useState<PressTopic | "all">("all");

  const items = [...PRESS_ITEMS]
    .filter((i) => topic === "all" || i.topics.includes(topic))
    .sort((a, b) => b.year - a.year);

  return (
    <div>
      {/* Topic filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTopic("all")}
          className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
            topic === "all" ? "bg-brand text-white" : "border border-line bg-white text-navy hover:border-brand"
          }`}
        >
          All coverage
        </button>
        {PRESS_TOPICS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTopic(t)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
              topic === t ? "bg-brand text-white" : "border border-line bg-white text-navy hover:border-brand"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col rounded-xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-display text-sm font-bold text-brand">{item.outlet}</span>
              <span className="text-xs text-muted">{item.date}</span>
            </div>
            <h3 className="mt-2 font-display text-base font-bold leading-snug text-navy group-hover:text-brand">
              {item.headline}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.topics.map((t) => (
                <span key={t} className="rounded-full bg-paper px-2 py-0.5 text-[11px] font-semibold text-sky">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm font-bold text-brand">Read at {item.outlet} ↗</p>
          </a>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted" role="status">
        Showing {items.length} of {PRESS_ITEMS.length} items.
      </p>
    </div>
  );
}

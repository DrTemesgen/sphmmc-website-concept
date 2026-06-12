"use client";

import { useState } from "react";
import { INSTITUTION } from "@/data/institution";

/**
 * Click-to-load Facebook Page timeline embed.
 * The iframe is only injected after user interaction, keeping the page fast
 * and avoiding third-party cookies until the visitor opts in.
 */
export default function FacebookFeed() {
  const [loaded, setLoaded] = useState(false);
  const pageUrl = encodeURIComponent(INSTITUTION.social.facebook);

  if (!loaded) {
    return (
      <div className="rounded-lg border border-line bg-white p-5 text-center">
        <p className="font-display text-lg font-bold text-navy">Follow us on Facebook</p>
        <p className="mt-1 text-sm text-muted">
          Live updates, health campaigns and event photos from the College.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="rounded-md bg-[#1877f2] px-4 py-2 text-sm font-bold text-white transition hover:brightness-110"
          >
            Load Facebook feed
          </button>
          <a
            href={INSTITUTION.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line px-4 py-2 text-sm font-bold text-navy transition hover:bg-paper"
          >
            Open page ↗
          </a>
        </div>
        <p className="mt-3 text-[11px] text-muted">
          Loading the feed connects your browser to facebook.com.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white">
      <iframe
        title="SPHMMC Facebook page timeline"
        src={`https://www.facebook.com/plugins/page.php?href=${pageUrl}&tabs=timeline&width=500&height=480&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`}
        width="100%"
        height="480"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allow="encrypted-media"
        loading="lazy"
      />
    </div>
  );
}

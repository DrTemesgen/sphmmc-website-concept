import { INSTITUTION } from "@/data/institution";

/** Facebook Page timeline embed for facebook.com/sphmmc. */
export default function FacebookFeed({ height = 620 }: { height?: number }) {
  const pageUrl = encodeURIComponent(INSTITUTION.social.facebook);

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white">
      <iframe
        title="SPHMMC Facebook page timeline"
        src={`https://www.facebook.com/plugins/page.php?href=${pageUrl}&tabs=timeline&width=500&height=${height}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`}
        width="100%"
        height={height}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allow="encrypted-media"
        loading="lazy"
      />
      <div className="flex items-center justify-between gap-2 border-t border-line bg-paper px-4 py-2.5">
        <p className="text-[11px] text-muted">Live from facebook.com/sphmmc</p>
        <a
          href={INSTITUTION.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-brand hover:underline"
        >
          Open page ↗
        </a>
      </div>
    </div>
  );
}

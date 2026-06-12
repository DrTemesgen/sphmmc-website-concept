/**
 * Unofficial-demo disclaimer bar. Shown site-wide, above the header, so any
 * visitor immediately understands this is a proposal/demonstration and not the
 * official St. Paul's website.
 */
export default function DemoBanner() {
  return (
    <div className="bg-amber-400 text-navy-deep">
      <p className="mx-auto max-w-7xl px-4 py-1.5 text-center text-[11px] font-semibold leading-snug sm:text-xs">
        ⚠ Concept demonstration — an unofficial, proposed redesign of the SPHMMC website, for
        demonstration purposes only. Not affiliated with, operated by, or endorsed by St.&nbsp;Paul&apos;s
        Hospital Millennium Medical College. Booking, the AI assistant and sample profiles are
        illustrative and not live services.
      </p>
    </div>
  );
}

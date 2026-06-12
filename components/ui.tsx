import Link from "next/link";

/** Page hero band used across interior pages */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="bg-gradient-to-br from-navy via-navy to-brand text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        {eyebrow && (
          <p className="mb-2 font-display text-sm font-bold uppercase tracking-widest text-sky">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl font-display text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">{intro}</p>}
      </div>
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-paper">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1 px-4 py-2.5 text-xs text-muted sm:text-[13px]">
        <li>
          <Link href="/" className="hover:text-brand hover:underline">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span aria-hidden>›</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-brand hover:underline">{item.label}</Link>
            ) : (
              <span aria-current="page" className="font-semibold text-ink">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-8 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-1 font-display text-sm font-bold uppercase tracking-widest ${light ? "text-sky" : "text-brand"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-2xl font-bold sm:text-3xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {intro && <p className={`mt-3 leading-relaxed ${light ? "text-white/80" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}

export function Card({
  title,
  text,
  href,
  meta,
}: {
  title: string;
  text?: string;
  href?: string;
  meta?: string;
}) {
  const inner = (
    <div className="flex h-full flex-col rounded-lg border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md">
      {meta && <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-sky">{meta}</p>}
      <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
      {text && <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{text}</p>}
      {href && <p className="mt-3 text-sm font-bold text-brand">Learn more →</p>}
    </div>
  );
  return href ? (
    <Link href={href} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand">
      {inner}
    </Link>
  ) : (
    inner
  );
}

export function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "gold";
}) {
  const styles = {
    primary: "bg-brand text-white hover:bg-brand-dark",
    outline: "border-2 border-white text-white hover:bg-white hover:text-navy",
    gold: "bg-gold text-navy-deep hover:brightness-105",
  };
  return (
    <Link
      href={href}
      className={`inline-block rounded-md px-6 py-3 font-display text-base font-bold shadow-sm transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}

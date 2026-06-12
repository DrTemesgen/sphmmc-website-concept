import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <p className="font-display text-7xl font-bold text-brand">404</p>
      <h1 className="mt-3 font-display text-2xl font-bold text-navy">Page not found</h1>
      <p className="mt-2 text-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Try the assistant
        (bottom-right) or one of these:
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-md bg-brand px-5 py-2.5 font-display font-bold text-white hover:bg-brand-dark">
          Home
        </Link>
        <Link href="/academics/departments" className="rounded-md border border-line px-5 py-2.5 font-display font-bold text-navy hover:bg-paper">
          Departments
        </Link>
        <Link href="/private-wing/book" className="rounded-md border border-line px-5 py-2.5 font-display font-bold text-navy hover:bg-paper">
          Book appointment
        </Link>
      </div>
    </div>
  );
}

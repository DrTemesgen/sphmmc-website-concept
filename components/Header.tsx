"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAV, UTILITY_NAV } from "@/data/navigation";
import { INSTITUTION } from "@/data/institution";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Utility bar */}
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-xs sm:text-[13px]">
          <p className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-5 items-center rounded bg-red-600 px-1.5 text-[11px] font-bold uppercase tracking-wide">
              Emergency 24/7
            </span>
            <a href={`tel:${INSTITUTION.contact.shortCode}`} className="hover:underline">
              Call {INSTITUTION.contact.shortCode}
            </a>
            <span className="hidden text-white/60 sm:inline">·</span>
            <a href={`tel:${INSTITUTION.contact.phone.replace(/\s/g, "")}`} className="hidden hover:underline sm:inline">
              {INSTITUTION.contact.phone}
            </a>
          </p>
          <nav aria-label="Utility" className="hidden items-center gap-4 md:flex">
            {UTILITY_NAV.map((l) =>
              l.external ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white hover:underline">
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href} className="text-white/85 hover:text-white hover:underline">
                  {l.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5">
        <Link href="/" className="flex shrink-0 items-center" aria-label="SPHMMC home">
          <Image
            src="/sphmmc-logo.png"
            alt="St. Paul's Hospital Millennium Medical College"
            width={101}
            height={60}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {MAIN_NAV.map((section) => (
            <div key={section.label} className="group relative">
              <Link
                href={section.href}
                className={`flex items-center gap-1 rounded px-3 py-2 font-display text-[15px] font-bold text-navy transition hover:bg-paper hover:text-brand ${
                  pathname.startsWith(section.href) ? "text-brand" : ""
                }`}
              >
                {section.label}
                {section.links && (
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden className="opacity-60">
                    <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  </svg>
                )}
              </Link>
              {section.links && (
                <div className="invisible absolute left-0 top-full z-50 w-80 rounded-b-lg border border-line bg-white pt-1 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="py-2">
                    {section.links.map((l) => (
                      <li key={l.href + l.label}>
                        {l.external ? (
                          <a href={l.href} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-paper">
                            <span className="text-sm font-semibold text-navy">{l.label} ↗</span>
                          </a>
                        ) : (
                          <Link href={l.href} className="block px-4 py-2 hover:bg-paper">
                            <span className="text-sm font-semibold text-navy">{l.label}</span>
                            {l.description && <span className="mt-0.5 block text-xs text-muted">{l.description}</span>}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/private-wing/book"
            className="hidden rounded-md bg-brand px-4 py-2.5 font-display text-[15px] font-bold text-white shadow-sm transition hover:bg-brand-dark sm:inline-block"
          >
            Book Appointment
          </Link>
          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            className="rounded border border-line p-2 text-navy lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
              {mobileOpen ? (
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 5h16M3 11h16M3 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav aria-label="Mobile" className="border-t border-line bg-white lg:hidden">
          <ul className="max-h-[70vh] overflow-y-auto px-4 py-2">
            {MAIN_NAV.map((section) => (
              <li key={section.label} className="border-b border-line/60 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={section.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 font-display text-base font-bold text-navy"
                  >
                    {section.label}
                  </Link>
                  {section.links && (
                    <button
                      type="button"
                      aria-label={`Expand ${section.label}`}
                      aria-expanded={openSection === section.label}
                      onClick={() => setOpenSection(openSection === section.label ? null : section.label)}
                      className="p-3 text-muted"
                    >
                      <svg width="12" height="12" viewBox="0 0 10 10" aria-hidden className={openSection === section.label ? "rotate-180" : ""}>
                        <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>
                    </button>
                  )}
                </div>
                {section.links && openSection === section.label && (
                  <ul className="pb-2 pl-3">
                    {section.links.map((l) => (
                      <li key={l.href + l.label}>
                        {l.external ? (
                          <a href={l.href} target="_blank" rel="noopener noreferrer" className="block py-2 text-sm text-ink">
                            {l.label} ↗
                          </a>
                        ) : (
                          <Link href={l.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-ink">
                            {l.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="py-3">
              <Link
                href="/private-wing/book"
                onClick={() => setMobileOpen(false)}
                className="block rounded-md bg-brand px-4 py-3 text-center font-display font-bold text-white"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

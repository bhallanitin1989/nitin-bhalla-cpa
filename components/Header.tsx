"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 flex-col"
          onClick={() => setOpen(false)}
        >
          <span className="truncate font-[family-name:var(--font-display)] text-lg font-semibold text-navy-900 group-hover:text-teal-600 sm:text-xl">
            {site.firmName}
          </span>
          <span className="text-xs text-slate-500">{site.licenseNote}</span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-teal-50 text-teal-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-navy-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-600"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phone}
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center rounded-full bg-navy-900 p-2.5 text-white"
            aria-label={`Call ${site.phone}`}
          >
            <Phone className="h-5 w-5" aria-hidden />
          </a>
          <button
            type="button"
            className="rounded-md p-2 text-navy-900 hover:bg-slate-50"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-md px-3 py-3 text-base font-medium ${
                    isActive(link.href)
                      ? "bg-teal-50 text-teal-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Calendar, ExternalLink, Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    const base = href.replace(/\/$/, "");
    return pathname === href || pathname.startsWith(`${base}/`) || pathname === base;
  };

  const closeAll = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  const linkClass = (href: string) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive(href)
        ? "bg-teal-50 text-teal-600"
        : "text-slate-600 hover:bg-slate-50 hover:text-navy-900"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center"
          onClick={closeAll}
        >
          <Image
            src={site.logoSrc}
            alt={site.logoAlt}
            width={180}
            height={48}
            className="h-10 w-auto object-contain sm:h-12"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-0.5 xl:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          {site.calendlyUrl ? (
            <a
              href={site.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-teal-600/30 px-3 py-2 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
            >
              <Calendar className="h-4 w-4" aria-hidden />
              Book
            </a>
          ) : null}
          {site.clientPortalUrl ? (
            <a
              href={site.clientPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-navy-900 transition hover:bg-slate-50"
            >
              Portal
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          ) : null}
          <a
            href={site.phoneHref}
            className="ml-1 inline-flex items-center gap-2 rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-600"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phone}
          </a>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
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
          className="border-t border-slate-100 bg-white px-4 py-3 xl:hidden"
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
                  onClick={closeAll}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {site.calendlyUrl ? (
              <li>
                <a
                  href={site.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium text-teal-700 hover:bg-teal-50"
                  onClick={closeAll}
                >
                  <Calendar className="h-5 w-5" aria-hidden />
                  Book a consultation
                </a>
              </li>
            ) : null}
            {site.clientPortalUrl ? (
              <li>
                <a
                  href={site.clientPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium text-navy-900 hover:bg-slate-50"
                  onClick={closeAll}
                >
                  Client portal
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      )}
    </header>
  );
}

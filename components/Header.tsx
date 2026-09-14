"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Calendar, ChevronDown, ExternalLink, Menu, Phone, X } from "lucide-react";
import { navLinks, site, type NavItem } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuId = useId();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    const base = href.replace(/\/$/, "");
    return pathname === href || pathname.startsWith(`${base}/`) || pathname === base;
  };

  const closeAll = useCallback(() => {
    setDesktopOpen(null);
    setOpen(false);
    setMobileExpanded(null);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDesktopOpen(null);
        setOpen(false);
        setMobileExpanded(null);
      }
    }
    function onPointerDown(e: MouseEvent | PointerEvent) {
      if (!navRef.current?.contains(e.target as Node)) {
        setDesktopOpen(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  const linkClass = (href: string, extra = "") =>
    `rounded-md px-2.5 py-2 text-sm font-medium transition-colors ${
      isActive(href)
        ? "bg-teal-50 text-teal-600"
        : "text-slate-600 hover:bg-slate-50 hover:text-navy-900"
    } ${extra}`;

  function DesktopItem({ item }: { item: NavItem }) {
    const hasChildren = Boolean(item.children?.length);
    const active = isActive(item.href);
    const expanded = desktopOpen === item.href;

    if (!hasChildren) {
      return (
        <Link href={item.href} className={linkClass(item.href)}>
          {item.label}
        </Link>
      );
    }

    return (
      <div
        className="relative"
        onMouseEnter={() => setDesktopOpen(item.href)}
        onMouseLeave={() => setDesktopOpen(null)}
      >
        <button
          type="button"
          className={`inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-sm font-medium transition-colors ${
            active || expanded
              ? "bg-teal-50 text-teal-600"
              : "text-slate-600 hover:bg-slate-50 hover:text-navy-900"
          }`}
          aria-expanded={expanded}
          aria-haspopup="true"
          aria-controls={`${menuId}-resources`}
          onClick={() =>
            setDesktopOpen((current) =>
              current === item.href ? null : item.href,
            )
          }
        >
          {item.label}
          <ChevronDown
            className={`h-4 w-4 transition ${expanded ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
        {expanded ? (
          <div
            id={`${menuId}-resources`}
            role="menu"
            className="absolute left-0 top-full z-50 min-w-[16rem] pt-1"
          >
            <ul className="rounded-xl border border-slate-100 bg-white py-2 shadow-lg">
              <li role="none">
                <Link
                  role="menuitem"
                  href={item.href}
                  className="block px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-teal-50 hover:text-teal-600"
                  onClick={() => setDesktopOpen(null)}
                >
                  {item.label} overview
                </Link>
              </li>
              {item.children!.map((child) => (
                <li key={child.href} role="none">
                  <Link
                    role="menuitem"
                    href={child.href}
                    className={`block px-4 py-2 text-sm transition ${
                      isActive(child.href)
                        ? "bg-teal-50 font-medium text-teal-600"
                        : "text-slate-600 hover:bg-slate-50 hover:text-navy-900"
                    }`}
                    onClick={() => setDesktopOpen(null)}
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-cream-100/80 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-8 xl:px-10">
        <Link
          href="/"
          className="group flex min-w-0 items-center"
          onClick={closeAll}
        >
          <Image
            src={site.logoSrc}
            alt={site.logoAlt}
            width={437}
            height={150}
            className="h-24 w-auto object-contain sm:h-28"
            priority
          />
        </Link>

        <nav
          ref={navRef}
          className="hidden items-center gap-1 xl:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <DesktopItem key={link.href} item={link} />
          ))}
          <div className="ml-4 flex items-center gap-2.5 border-l border-slate-200 pl-4">
            {site.calendlyUrl ? (
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                Book
              </a>
            ) : null}
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-navy-900 transition hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              {site.phone}
            </a>
            {site.clientPortalUrl ? (
              <a
                href={site.clientPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-slate-50"
              >
                Portal
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            ) : null}
          </div>
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
          className="border-t border-cream-100 bg-cream px-4 py-3 xl:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const hasChildren = Boolean(link.children?.length);
              if (!hasChildren) {
                return (
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
                );
              }

              const expanded = mobileExpanded === link.href;
              return (
                <li key={link.href} className="rounded-md">
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium ${
                      isActive(link.href)
                        ? "bg-teal-50 text-teal-600"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                    aria-expanded={expanded}
                    onClick={() =>
                      setMobileExpanded((current) =>
                        current === link.href ? null : link.href,
                      )
                    }
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-5 w-5 transition ${expanded ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  {expanded ? (
                    <ul className="mb-2 ml-2 border-l border-slate-100 pl-3">
                      <li>
                        <Link
                          href={link.href}
                          className="block rounded-md px-3 py-2.5 text-sm font-semibold text-navy-900 hover:bg-slate-50"
                          onClick={closeAll}
                        >
                          Overview
                        </Link>
                      </li>
                      {link.children!.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block rounded-md px-3 py-2.5 text-sm ${
                              isActive(child.href)
                                ? "bg-teal-50 font-medium text-teal-600"
                                : "text-slate-600 hover:bg-slate-50"
                            }`}
                            onClick={closeAll}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
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

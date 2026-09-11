import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { footerNavLinks, site } from "@/lib/site";

const explorePrimary = footerNavLinks.filter((link) =>
  ["/", "/services/", "/tax-relief/", "/about/", "/recent-cases/", "/resources/", "/contact/"].includes(
    link.href,
  ),
);

const exploreResources = footerNavLinks.filter((link) =>
  link.href.startsWith("/resources/") && link.href !== "/resources/",
);

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-100 bg-navy-950 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
            {site.brandName}
          </p>
          <p className="mt-2 text-sm text-slate-500">{site.principal}</p>
          <p className="mt-1 text-sm text-slate-500">{site.licenseNote}</p>
          <div className="gold-divider mt-4 opacity-80" />
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            {site.legalName} d/b/a {site.brandName}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
            Virtual New York CPA support — nationwide and remote-friendly.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {explorePrimary.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-100/80 transition hover:text-teal-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            Resources
          </h2>
          <ul className="mt-4 space-y-2">
            {exploreResources.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-100/80 transition hover:text-teal-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-100/80">
            <li>Virtual CPA firm · New York licensed</li>
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-3 transition hover:text-teal-500"
              >
                <Phone className="h-4 w-4 shrink-0 text-teal-500" aria-hidden />
                {site.phone}
              </a>
            </li>
            {site.calendlyUrl ? (
              <li>
                <a
                  href={site.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition hover:text-teal-500"
                >
                  <Calendar
                    className="h-4 w-4 shrink-0 text-teal-500"
                    aria-hidden
                  />
                  Book a consultation
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName} d/b/a {site.brandName}.
            All rights reserved.
          </p>
          <p className="max-w-xl lg:text-right">{site.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}

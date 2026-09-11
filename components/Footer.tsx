import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-100 bg-navy-950 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
            {site.firmName}
          </p>
          <p className="mt-2 text-sm text-slate-500">{site.principal}</p>
          <p className="mt-1 text-sm text-slate-500">{site.licenseNote}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
            {site.tagline}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
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
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" aria-hidden />
              <address className="not-italic">
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-3 transition hover:text-teal-500"
              >
                <Phone className="h-4 w-4 shrink-0 text-teal-500" aria-hidden />
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.firmName}. All rights reserved.
          </p>
          <p className="max-w-xl lg:text-right">{site.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}

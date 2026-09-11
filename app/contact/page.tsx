import type { Metadata } from "next";
import {
  Calendar,
  Clock,
  Laptop,
  Phone,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact NB Tax and Advisory, CPA — virtual New York CPA firm. Call or book a consultation; engagements are handled remotely.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Contact
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Let&apos;s talk about what you need.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Reach {site.firmName} by phone, book a consultation, or prepare a
            short note below. Engagements are handled virtually / remotely — no
            office visit required. No public email is listed on this site.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phone}
            </a>
            {site.calendlyUrl ? (
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                Book a consultation
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-navy-900">
                Firm details
              </h2>
              <ul className="mt-5 space-y-4 text-sm text-slate-600">
                <li className="flex gap-3">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-600"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-navy-900">Phone</p>
                    <a
                      href={site.phoneHref}
                      className="mt-1 inline-block text-teal-600 hover:underline"
                    >
                      {site.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Laptop
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-600"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-navy-900">How we work</p>
                    <p className="mt-1 leading-relaxed">
                      Virtual CPA firm · New York licensed. Consultations and
                      ongoing engagements are handled remotely nationwide.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-600"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-navy-900">Appointments</p>
                    <p className="mt-1 leading-relaxed">
                      By appointment. Call to find a time that works, or use
                      Book a consultation when you prefer to schedule online.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-navy-900 p-6 text-white">
              <h2 className="text-lg font-semibold text-white">
                Prefer to call first?
              </h2>
              <p className="mt-2 text-sm text-slate-100/80">
                Many clients start with a short phone conversation. Have your
                questions and recent notices or documents nearby if you can.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-500"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Call {site.phone}
                </a>
                {site.calendlyUrl ? (
                  <a
                    href={site.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    <Calendar className="h-4 w-4" aria-hidden />
                    Book a consultation
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <p className="mt-10 text-xs leading-relaxed text-slate-500">
          {site.disclaimer}
        </p>
      </section>
    </>
  );
}

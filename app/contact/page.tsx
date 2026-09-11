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
    "Contact NB Tax and Advisory, CPA — virtual New York CPA firm. Book a consultation or call; engagements are handled remotely.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Contact
          </p>
          <div className="gold-divider mt-3" />
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Let&apos;s talk — wherever you are.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            {site.brandName} is a virtual New York CPA practice. Book a
            consultation or call when you&apos;re ready — no office visit, no
            street address to find. Just clear next steps.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {site.calendlyUrl ? (
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                Book a consultation
              </a>
            ) : null}
            <a href={site.phoneHref} className="btn-secondary">
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-navy-900">
                How to reach us
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
                    <p className="font-medium text-navy-900">Virtual practice</p>
                    <p className="mt-1 leading-relaxed">
                      Consultations and ongoing work happen by phone, video, and
                      secure portal — nationwide, New York licensed.
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
                      Prefer online scheduling? Book a consultation. Prefer to
                      talk first? Call anytime during business hours.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-navy-900 p-6 text-white">
              <h2 className="text-lg font-semibold text-white">
                Prefer to start with a conversation?
              </h2>
              <p className="mt-2 text-sm text-slate-100/80">
                Many clients begin with a short call. Have recent notices or
                returns nearby if you can — we&apos;ll take it from there.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {site.calendlyUrl ? (
                  <a
                    href={site.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <Calendar className="h-4 w-4" aria-hidden />
                    Book a consultation
                  </a>
                ) : null}
                <a href={site.phoneHref} className="btn-secondary-on-dark">
                  <Phone className="h-4 w-4" aria-hidden />
                  Call {site.phone}
                </a>
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

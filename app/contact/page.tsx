import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact NB Tax and Advisory, CPA in New York — phone and office address.",
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
            Reach {site.firmName} by phone, or prepare a short note below and
            call when you are ready. No public email is listed on this site.
          </p>
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
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-600"
                    aria-hidden
                  />
                  <div>
                    <p className="font-medium text-navy-900">Office</p>
                    <address className="mt-1 not-italic leading-relaxed">
                      {site.brandName}
                      <br />
                      <span className="text-xs text-slate-500">
                        {site.legalName} d/b/a
                      </span>
                      <br />
                      {site.address.line1}
                      <br />
                      {site.address.city}, {site.address.state}{" "}
                      {site.address.zip}
                    </address>
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
                      By appointment. Call to find a time that works for your
                      schedule.
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
              <a
                href={site.phoneHref}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-500"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {site.phone}
              </a>
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

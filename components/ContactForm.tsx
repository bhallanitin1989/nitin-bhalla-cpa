"use client";

import { FormEvent, useState } from "react";
import { Phone, Send } from "lucide-react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("Tax preparation");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // No public email is published. Prefer a phone call; show a confirmation
    // the visitor can use when they reach the firm.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-teal-500/30 bg-teal-50 p-6 sm:p-8"
        role="status"
      >
        <h3 className="text-lg font-semibold text-navy-900">
          Thanks{name ? `, ${name}` : ""} — please call to connect
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          This site does not publish an email address. The fastest way to reach{" "}
          {site.firmName} is by phone. Have your notes ready when you call:
        </p>
        <ul className="mt-4 space-y-1 text-sm text-slate-700">
          {topic && (
            <li>
              <strong>Topic:</strong> {topic}
            </li>
          )}
          {phone && (
            <li>
              <strong>Callback number:</strong> {phone}
            </li>
          )}
          {message && (
            <li>
              <strong>Message:</strong> {message}
            </li>
          )}
        </ul>
        <a
          href={site.phoneHref}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call {site.phone}
        </a>
        <button
          type="button"
          className="mt-4 block text-sm font-medium text-teal-600 hover:underline"
          onClick={() => setSubmitted(false)}
        >
          Edit your notes
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      <h3 className="text-lg font-semibold text-navy-900">
        Request a conversation
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Share a few details, then call us — we&apos;ll use your notes to get
        started. No email is published on this site.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy-900 sm:col-span-1">
          Your name
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 text-slate-700 outline-none transition focus:border-teal-500 focus:bg-white"
          />
        </label>
        <label className="block text-sm font-medium text-navy-900">
          Phone (optional)
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 text-slate-700 outline-none transition focus:border-teal-500 focus:bg-white"
          />
        </label>
        <label className="block text-sm font-medium text-navy-900 sm:col-span-2">
          Topic
          <select
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 text-slate-700 outline-none transition focus:border-teal-500 focus:bg-white"
          >
            <option>Tax preparation</option>
            <option>Tax planning</option>
            <option>Payroll & compliance</option>
            <option>IRS representation</option>
            <option>Bookkeeping support</option>
            <option>Other</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-navy-900 sm:col-span-2">
          How can we help?
          <textarea
            name="message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 text-slate-700 outline-none transition focus:border-teal-500 focus:bg-white"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-900 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden />
        Prepare my notes &amp; call
      </button>
    </form>
  );
}

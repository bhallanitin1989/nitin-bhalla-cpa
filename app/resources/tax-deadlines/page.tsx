"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/** Old URL — redirects to /resources/tax-calendar/ */
export default function TaxDeadlinesRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/resources/tax-calendar/");
  }, [router]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm text-slate-600">
        This page moved to the{" "}
        <Link
          href="/resources/tax-calendar/"
          className="font-semibold text-teal-700 hover:text-navy-900"
        >
          federal tax calendar
        </Link>
        .
      </p>
    </section>
  );
}

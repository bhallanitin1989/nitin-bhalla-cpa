export const site = {
  /** Public brand / DBA shown in the header, titles, and most copy. */
  brandName: "NB Tax and Advisory, CPA",
  /** Alias used across existing pages — public-facing display name. */
  firmName: "NB Tax and Advisory, CPA",
  /** Legal entity for footer / disclaimer. */
  legalName: "Nitin Bhalla CPA PC",
  principal: "Nitin Bhalla, CPA",
  licenseNote: "Licensed Certified Public Accountant in New York",
  address: {
    line1: "224 W 35th St Ste 500 #823",
    city: "New York",
    state: "NY",
    zip: "10001",
    full: "224 W 35th St Ste 500 #823, New York, NY 10001",
  },
  phone: "(646) 992-4277",
  phoneHref: "tel:+16469924277",
  // No public email is published on this site. Add one here when available.
  email: null as string | null,
  tagline:
    "Thoughtful tax and accounting support for individuals and growing businesses in New York — from NB Tax and Advisory, CPA.",
  focus: [
    "Individual & business tax preparation",
    "S-corp and LLC returns",
    "Payroll & compliance",
    "IRS representation (Form 2848)",
    "Tax relief & resolution support",
    "Tax planning",
    "Bookkeeping support",
  ],
  disclaimer:
    "This website provides general information and is not tax advice. NB Tax and Advisory, CPA is a d/b/a of Nitin Bhalla CPA PC. Please contact the firm to discuss your specific situation.",
  logoSrc: "/logo-nb-tax.png",
  logoAlt: "NB Tax and Advisory, CPA",
} as const;

export type NavChild = {
  href: string;
  label: string;
};

export type NavItem = {
  href: string;
  label: string;
  children?: readonly NavChild[];
};

export const navLinks: readonly NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/services/",
    label: "Services",
    children: [
      { href: "/services/tax-preparation/", label: "Tax preparation" },
      { href: "/services/s-corp-llc/", label: "S-corp & LLC returns" },
      { href: "/services/payroll-compliance/", label: "Payroll & compliance" },
      { href: "/services/irs-representation/", label: "IRS representation" },
      { href: "/services/tax-planning/", label: "Tax planning" },
      { href: "/services/bookkeeping/", label: "Bookkeeping support" },
    ],
  },
  {
    href: "/tax-relief/",
    label: "Tax Relief",
    children: [
      { href: "/tax-relief/unfiled-returns/", label: "Unfiled returns" },
      { href: "/tax-relief/irs-notices/", label: "IRS notices" },
      {
        href: "/tax-relief/installment-agreements/",
        label: "Installment agreements",
      },
      { href: "/tax-relief/penalty-relief/", label: "Penalty relief" },
      { href: "/tax-relief/levy-lien/", label: "Levy & lien" },
      {
        href: "/tax-relief/offer-in-compromise/",
        label: "Offer in Compromise",
      },
      {
        href: "/tax-relief/currently-not-collectible/",
        label: "Currently not collectible",
      },
    ],
  },
  { href: "/about/", label: "About" },
  { href: "/who-we-serve/", label: "Who We Serve" },
  { href: "/recent-cases/", label: "Recent Cases" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
] as const;

/** Top-level links only — for the footer Explore list. */
export const footerNavLinks = navLinks.map(({ href, label }) => ({
  href,
  label,
}));

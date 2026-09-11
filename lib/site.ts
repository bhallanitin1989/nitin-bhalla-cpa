export const site = {
  /** Public brand / DBA shown in the header, titles, and most copy. */
  brandName: "NB Tax and Advisory, CPA",
  /** Alias used across existing pages — public-facing display name. */
  firmName: "NB Tax and Advisory, CPA",
  /** Legal entity for footer / disclaimer. */
  legalName: "Nitin Bhalla CPA PC",
  principal: "Nitin Bhalla, CPA",
  licenseNote: "Licensed Certified Public Accountant in New York",
  /** Kept for legal / records; do not display when virtualFirm / showAddress is false. */
  address: {
    line1: "224 W 35th St Ste 500 #823",
    city: "New York",
    state: "NY",
    zip: "10001",
    full: "224 W 35th St Ste 500 #823, New York, NY 10001",
  },
  /** Virtual CPA firm — street address is not shown in the UI. */
  virtualFirm: true,
  showAddress: false,
  phone: "(646) 992-4277",
  phoneHref: "tel:+16469924277",
  // No public email is published on this site. Add one here when available.
  email: null as string | null,
  /** Set your Calendly (or booking) URL to show “Book a consultation” buttons. */
  calendlyUrl: "https://calendly.com/blueinktaxes/30min" as string | null,
  /** Set your client portal URL to show the portal button in the Header only. */
  clientPortalUrl: "https://www.blueinktaxes.com/login" as string | null,
  tagline:
    "Clear tax preparation, planning, and IRS support from a virtual New York CPA — nationwide and remote-friendly.",
  focus: [
    "Individual & business tax preparation",
    "S-corp and LLC returns",
    "Payroll & compliance",
    "IRS representation",
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

/** Primary navigation. Only Resources uses a dropdown. */
export const navLinks: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/tax-relief/", label: "Tax Relief" },
  { href: "/about/", label: "About" },
  { href: "/recent-cases/", label: "Recent Cases" },
  {
    href: "/resources/",
    label: "Resources",
    children: [
      { href: "/resources/blog/", label: "Blog" },
      { href: "/resources/tax-deadlines/", label: "Tax deadlines" },
      { href: "/resources/calculators/", label: "Calculators" },
      { href: "/resources/checklists/", label: "Checklists" },
    ],
  },
  { href: "/contact/", label: "Contact" },
] as const;

/** Footer Explore list — top-level plus Resources children. */
export const footerNavLinks = navLinks.flatMap((item) =>
  item.children
    ? [{ href: item.href, label: item.label }, ...item.children]
    : [{ href: item.href, label: item.label }],
);

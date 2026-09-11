export const site = {
  firmName: "Nitin Bhalla CPA PC",
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
  tagline: "Thoughtful tax and accounting support for individuals and growing businesses in New York.",
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
    "This website provides general information and is not tax advice. Please contact the firm to discuss your specific situation.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/tax-relief/", label: "Tax Relief" },
  { href: "/recent-cases/", label: "Recent Cases" },
  { href: "/about/", label: "About" },
  { href: "/who-we-serve/", label: "Who We Serve" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
] as const;

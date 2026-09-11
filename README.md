# NB Tax and Advisory, CPA — Marketing Website

Professional marketing site for **NB Tax and Advisory, CPA** (legal entity: **Nitin Bhalla CPA PC**), a New York CPA practice.

Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**, configured for **static export** (`output: 'export'`) so it deploys cleanly to **GitHub Pages** or **Vercel**.

## Quick start

```bash
cd nitin-bhalla-cpa
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build (writes static files to `out/`):

```bash
npm run build
```

## Customize content

Firm details live in one place:

- `lib/site.ts` — brand/legal names, address (kept for records; UI gated by `virtualFirm` / `showAddress`), phone, tagline, disclaimer, nav (Resources dropdown), `calendlyUrl`, `clientPortalUrl`
- `lib/blog.ts` — educational blog posts for `/resources/blog/`
- `lib/services.ts` — service detail pages under `/services/[slug]/`
- `lib/tax-relief.ts` — tax relief detail pages under `/tax-relief/[slug]/`
- `lib/cases.ts` — redacted case outcome documents for the Recent Cases page (starts empty)
- Logo: `public/logo-nb-tax.png` (Header uses `/logo-nb-tax.png`)
- Page copy — `app/**/page.tsx`
- Shared chrome — `components/Header.tsx`, `components/Footer.tsx`, `components/ContactForm.tsx`

**Email:** No public email is published (none was provided). Contact is phone-first (virtual firm — no street address shown), with a form that prepares notes and prompts a call. To add email later, set `site.email` in `lib/site.ts` and wire a `mailto:` link or form action.

**Calendly & client portal:** Set URLs in `lib/site.ts`:

```ts
calendlyUrl: "https://calendly.com/your-link" as string | null,
clientPortalUrl: "https://www.example.com/login" as string | null,
```

When non-null, Header / Home / Contact / Footer show **Book a consultation** and **Client portal** buttons (open in a new tab with `rel="noopener noreferrer"`). When `null`, those buttons are omitted. Current values: Calendly `https://calendly.com/blueinktaxes/30min`, portal `https://www.blueinktaxes.com/login`.

**Virtual firm:** `virtualFirm: true` and `showAddress: false` hide the street address across the UI. Address data remains in `site.address` for legal/records only.

**Recent Cases PDFs:** Redact ALL SSNs, EINs, names, addresses, and account numbers. Put the PDF in `public/cases/YYYY/descriptive-name.pdf`, add one entry to `lib/cases.ts`, then rebuild/redeploy. See `public/cases/README.md`. Do not invent sample letters.

Do not invent awards, clients, testimonials, or credentials beyond New York CPA licensure.

## Deploy

### Vercel (recommended for root/custom domain)

1. Push this folder to a GitHub/GitLab/Bitbucket repo (or import the directory in the Vercel UI).
2. Import the project in [Vercel](https://vercel.com). Framework preset: Next.js.
3. Build command: `npm run build`. Output directory: `out` (because of static export).
4. Deploy. Add your custom domain in project settings if desired.

> With `output: 'export'`, Vercel serves the static `out/` folder. If you later remove static export to use Next.js server features, switch the output directory back to the Vercel Next.js default.

### GitHub Pages — user/org site or custom domain (root)

Configured for **root deploy** (no `basePath` / `assetPrefix`):

1. Build: `npm run build`
2. Publish the contents of `out/` to the `gh-pages` branch (or use GitHub Actions to deploy `out/` to Pages).
3. In repo **Settings → Pages**, serve from that branch / `/` (root).

Example GitHub Action sketch (optional):

```yaml
# .github/workflows/pages.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
      - id: deployment
        uses: actions/deploy-pages@v4
```

### GitHub Pages — project site (`username.github.io/nitin-bhalla-cpa`)

If the site will live under a **project path** (not a custom domain or `username.github.io` root), add to `next.config.ts`:

```ts
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/nitin-bhalla-cpa",
  assetPrefix: "/nitin-bhalla-cpa",
};
```

Then rebuild. Links and assets will be prefixed correctly.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Local development server |
| `npm run build` | Static export to `out/` |
| `npm run lint` | ESLint |

## Notes

- `images.unoptimized: true` is required for static export / GitHub Pages.
- Footer, Resources, and blog posts include: *"This website provides general information and is not tax advice."*
- Header is logo-only (no firm name text). Resources is the only dropdown. There is no FAQ or Who We Serve page.

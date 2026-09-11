# Case outcome documents

Redacted IRS closure / resolution letters published on the **Recent Cases** page.

## Before you add anything

1. **Redact thoroughly.** Remove ALL Social Security numbers, EINs, taxpayer names, addresses, account numbers, phone numbers, and any other personally identifying details from the PDF. Black-box or delete text so it cannot be recovered.
2. Get the client’s permission to publish a redacted copy when that is appropriate for your engagement.
3. Do not invent sample letters or placeholder “example” PDFs with realistic-looking data.

## How to publish a document

1. Place the redacted PDF at:
   ```
   public/cases/YYYY/descriptive-name.pdf
   ```
   Example: `public/cases/2025/oic-accepted-mar.pdf`

2. Add one entry to `lib/cases.ts` in the `cases` array:
   ```ts
   {
     id: "2025-oic-mar",
     year: 2025,
     title: "Offer in Compromise accepted",
     outcome: "Offer in Compromise",
     summary: "IRS accepted an Offer in Compromise; balance resolved per accepted terms.",
     file: "/cases/2025/oic-accepted-mar.pdf",
     dateLabel: "Mar 2025",
   },
   ```

3. Rebuild and redeploy:
   ```bash
   npm run build
   ```
   Then deploy the `out/` folder (or let your host rebuild from `main`).

## Outcome values

Use one of: `Offer in Compromise` | `Currently Not Collectible` | `Installment Agreement` | `Penalty Relief` | `Innocent Spouse` | `Other`.

# R2G Transport & Storage — Website

## Project

Professional removalist company website serving Queensland, Australia.
Domain: https://www.r2g.com.au

## Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript (strict)
- **Styling:** Tailwind CSS 4
- **Email:** Nodemailer (Gmail SMTP) + Resend
- **Imports:** Use `@/*` path alias (maps to project root)

## Commands

```bash
npm run dev     # Dev server
npm run build   # Production build (use to verify no errors)
npm run lint    # ESLint
```

## Key Structure

```
app/                          # Pages (App Router)
  removalists-{city}/         # Local suburb pages (cairns, brisbane, gold-coast, sunshine-coast)
    [suburb]/page.tsx          # Dynamic suburb template
  interstate-removalists/     # Interstate routes
  office-removalists/         # Office relocation
  api/                        # API routes (enquiry, quote, places, reviews)
components/                   # Reusable React components
data/                         # Suburb data files, blog posts, routes
  {city}-suburbs-*.ts         # Suburb arrays grouped by region
lib/constants.ts              # Site config (phone, addresses, services, nav)
```

## Suburb Page Pattern

Suburb pages use `generateStaticParams()` to pre-build from data files.
Each suburb entry: `{ name, slug, region, metaTitle, metaDescription, nearbySuburbs, content }`.
Data files are in `data/` grouped by city and region (e.g., `cairns-suburbs-inner.ts`).

## Conventions

- Canonical URLs use `www.r2g.com.au`
- Suburb URLs: `/removalists-{city}/{suburb-slug}`
- All pages include JSON-LD structured data (LocalBusiness / MovingCompany)
- Use Next.js `<Image>` with AVIF/WebP formats
- SEO metadata via Next.js `generateMetadata()`

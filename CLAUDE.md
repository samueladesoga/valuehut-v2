# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with Turbopack at localhost:3000
npm run build      # Production build
npm run lint       # ESLint
npm run format     # Prettier (ts, tsx, md files)
```

No test suite is configured — verify features manually in the browser.

## Architecture

**Next.js 15 App Router** site for ValueHut Consulting (Agile Management Consultancy). All routes live under `app/`.

### Content: Contentful via GraphQL

All dynamic content is fetched from Contentful using raw `fetch` calls (not the Contentful SDK) against their GraphQL API:

- `app/lib/api.tsx` — blog posts (`blogCollection`) and client logos
- `app/lib/courseApi.tsx` — courses (`courseCollection`) and course details

Environment variables required: `BLOG_SPACE_ID`, `BLOG_ACCESS_TOKEN`.

Cache is tag-based (`next: { tags: ["blog"] }` / `next: { tags: ["courses"] }`). Contentful webhooks hit `POST /api/revalidate` to invalidate by tag.

### Blog rendering

Blog rich-text content (`content.json`) comes from Contentful's Rich Text field. It is rendered in `app/blog/[slug]/page.tsx` using `documentToReactComponents` from `@contentful/rich-text-react-renderer` with custom `renderNode` overrides for paragraphs, headings, lists, hyperlinks, and embedded images. Embedded assets are resolved by cross-referencing `content.links.assets.block` from the GraphQL response.

### Courses

- `app/academy/page.tsx` — course listing
- `app/academy/[slug]/page.tsx` — course detail (upcoming classes table, objectives, who should attend, assessment, additional benefits)
- `app/academy/[slug]/details/[id]/page.tsx` — specific class detail
- `app/checkout/[slug]/[id]/page.tsx` — checkout flow with Stripe

Course sections (objectives, who should attend, etc.) are stored as `courseDetails` entries keyed by their `title` string (e.g. `"Course Learning Objectives"`, `"Who should attend?"`).

### Styling

- Tailwind CSS with a custom theme in `tailwind.config.ts`
- Two fonts via `next/font`: **Bricolage Grotesque** (`--font-primary`, `font-primary`) for headings, **Inter** (`--font-secondary`, `font-secondary`) for body
- CSS custom properties in `app/globals.css` define the colour tokens (`--Color-Text-Main`, `--Color-Fill-Brand-primary`, etc.) used as `text-main`, `text-secondary`, `bg-fill-brand-primary` in Tailwind classes

### API routes

| Route | Purpose |
|---|---|
| `POST /api/revalidate` | Contentful webhook → revalidate `blog` or `courses` cache tag |
| `POST /api/sendEmail` | Send invoice PDF via nodemailer (AWS SES) |
| `POST /api/create-payment-intent` | Stripe payment intent |
| `POST /api/validate-discount` | Discount code validation |

### Static data

`app/data/` holds TypeScript files with hardcoded content (hero copy, FAQs, testimonials, service descriptions, etc.) used where Contentful is not the source.

### Images

All Contentful images come from `images.ctfassets.net` (whitelisted in `next.config.ts`). Next.js `<Image>` is used throughout; avif/webp formats are enabled.

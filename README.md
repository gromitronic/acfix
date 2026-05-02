# ACFix.com

ACFix.com is a Next.js lead intake and referral website for homeowners requesting introductions to independent HVAC providers. The site must not imply that ACFix.com performs AC repairs directly.

## Version

Current build: `0.010`

The build version is stored in `package.json` and `src/data/site.ts`, and it is visible in the footer.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Create `.env.local` when notification and tracking providers are selected:

```bash
OWNER_NOTIFICATION_EMAIL=owner@example.com
ACFIX_OWNER_EMAIL=owner@example.com
CALLRAIL_OR_TWILIO_TRACKING_NUMBER=+17725550198
NEXT_PUBLIC_ANALYTICS_DEBUG=false
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-server-only-service-role-key
ACFIX_PORTAL_TOKEN=choose-a-private-portal-token
ACFIX_DEFAULT_VENDOR_NAME="Vendor Business Name"
ACFIX_DEFAULT_VENDOR_EMAIL=vendor@example.com
ACFIX_VENDOR_LEAD_EMAIL=vendor@example.com
RESEND_API_KEY=re_your_resend_api_key
ACFIX_EMAIL_FROM="ACFix Leads <leads@acfix.com>"
```

The API route saves leads to Supabase table `acfix_leads` when `NEXT_PUBLIC_SUPABASE_URL`
and `SUPABASE_SERVICE_ROLE_KEY` are present. Without those variables, it falls back to
`data/leads.json` for local development. The internal portal is available at `/portal`;
in local development the fallback token is `local-acfix` unless `ACFIX_PORTAL_TOKEN` is set.
When `RESEND_API_KEY` is present, new leads are emailed through Resend after they are
successfully saved. Owner notifications go to `ACFIX_OWNER_EMAIL` or
`OWNER_NOTIFICATION_EMAIL`; vendor forwarding goes to `ACFIX_VENDOR_LEAD_EMAIL`,
`ACFIX_DEFAULT_VENDOR_EMAIL`, and active `acfix_vendors` records. Keep `ACFIX_EMAIL_FROM`
on a Resend-verified sending domain before production launch. CallRail/Twilio tracking is
still a placeholder until a phone provider is selected.

## Supabase Tables

Create these tables with the `acfix_` prefix and `project_tag` defaulting to `acfix-`:

- `acfix_leads`
- `acfix_vendors`
- `acfix_lead_assignments`
- `acfix_lead_events`

The website writes through the server API only. Do not expose `SUPABASE_SERVICE_ROLE_KEY`
to client-side code.

## Scripts

```bash
npm test
npm run lint
npm run build
```

## Add a City Page

1. Add a city entry to `src/data/cities.ts`.
2. Create a route folder under `app/<city-slug>/page.tsx`.
3. Import `CityLandingPage`, fetch the city config by slug, and pass it into the component.
4. Add the city route to `app/sitemap.ts` if it is not generated from the city config.
5. Keep schema and page copy clear that ACFix.com is a referral and lead intake service.

## Change Log

### 0.010

- Prepared the project for GitHub/Vercel import by ignoring macOS metadata and duplicate source image exports.
- Kept deployable optimized images in `public/images`.

### 0.009

- Added Resend SDK support for lead notification emails.
- Wired form submissions to save the lead first, then notify the owner and configured vendor recipients.
- Added `email_sent`, `email_skipped`, or `email_failed` lead events when Supabase is configured.
- Documented Resend and vendor-forwarding environment variables.

### 0.008

- Added Supabase-ready lead storage using server-side REST calls to `acfix_leads`.
- Kept local `data/leads.json` as a development fallback when Supabase env vars are missing.
- Added `/portal` for internal lead review and early manual vendor forwarding.
- Added protected portal API routes for leads and vendors.

### 0.007

- Removed hover zoom from HVAC image cards so baked-in image text no longer shifts into the margins.
- Changed homepage campaign image frames to preserve the full 16:9 artwork without cropping.

### 0.006

- Added PicMind-optimized HVAC imagery from the project `images` folder into the public site assets.
- Wired the three labeled homepage campaign images into urgency, cost-awareness, and solution sections.
- Added the HVAC infographic as a dedicated homeowner education section.
- Updated blog cards and article templates to use one real featured image per post.

### 0.005

- Redesigned the homepage into a premium, modern HVAC referral landing page.
- Added animated reusable sections for hero, trust strip, problem, cost awareness, solution, how it works, local coverage, blog preview, and final CTA.
- Upgraded the blog index and article template with branded image cards, CTAs, related articles, and mobile conversion prompts.

### 0.004

- Added dynamic local SEO landing pages for key St. Lucie, Martin, and Palm Beach County cities.
- Added county landing pages for St. Lucie County, Martin County, and Palm Beach County.
- Added internal homepage links to all local landing pages.
- Added FAQ schema to service-area pages and Article schema to blog posts.

### 0.003

- Expanded the primary service-area focus to St. Lucie, Martin, and Palm Beach counties.
- Updated the homepage service-area selector and county coverage section.
- Updated Port St. Lucie landing page copy to reflect broader vendor coverage.

### 0.002

- Added the provided ACFix logo asset to the website header and footer.
- Kept the build version visible in the footer.

### 0.001

- Created the ACFix.com Next.js, React, TypeScript, and Tailwind site.
- Added home, Port St. Lucie city landing, blog, blog post, contact, privacy, and terms pages.
- Added reusable `LeadForm` and `CityLandingPage` components.
- Added analytics hooks for `form_submit`, `call_button_click`, and `city_page_view`.
- Added mock JSON lead storage and notification/tracking placeholders.
- Added SEO metadata, referral-service schema markup, robots, and sitemap.

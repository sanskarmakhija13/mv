# Manfest-Varchasva — Next.js rebuild

A modern rebuild of the Manfest-Varchasva website using **Next.js 16, React 19 and TypeScript**.

## What is included

- Responsive cinematic homepage
- Modern sticky navigation
- Hero section matching the new festival visual direction
- Past headliners section
- Leaders Express section
- “Over the Years” video section
- Highlights / stats section
- Partners wall
- About page
- City Run archive page
- Events listing + dynamic event detail pages
- Workshops page
- Gallery page
- SEO metadata
- GitHub Actions build check
- Vercel-ready structure

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project**.
3. Import the GitHub repository.
4. Vercel will detect Next.js automatically.
5. Deploy.

## Editing content

Most content is centralised in:

```text
lib/content.ts
```

This includes:

- edition/date/venue
- headliners
- speakers
- stats
- partners
- events
- gallery images

## Image migration note

The first version intentionally references image assets from the existing Joomla site so the visual migration can happen quickly without losing the current media library.

Before the old Joomla site is retired, copy the required images into `public/media/` and change the URLs in `lib/content.ts` to local paths. This prevents broken images after the legacy host is switched off.

## Suggested migration path

1. Deploy this Next.js site to a Vercel preview URL.
2. Review every page on desktop + mobile.
3. Copy the final image library into `public/media`.
4. Update current event registration/rulebook links.
5. Point the existing domain to Vercel only after final approval.

Do **not** shut down the existing Joomla/BigRock hosting until the new production site is fully verified.

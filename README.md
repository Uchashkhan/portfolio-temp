# Apurba Jalal Uchash — Product Designer Portfolio

A fast, responsive MVP portfolio built with Next.js App Router, TypeScript and Tailwind CSS. Project and experience content is data-driven so the site can be updated without touching component layout code.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## How to update project imagery

1. Add the image to `public/projects/` (create the folder if needed).
2. Open `data/projects.ts`.
3. Change the project's `image` from `null` to a public path such as `"/projects/shikho-app-redesign.webp"`.
4. Update `imageAlt` so it describes the real image.

The existing `aspectRatio` and `gridSpan` values keep the layout intact. Images are cropped with `object-fit: cover`; change `aspectRatio` to `portrait`, `landscape` or `wide` if the new art needs a different canvas.

## How to reorder projects

Reorder the project objects inside the `projects` array in `data/projects.ts`. No component changes are needed. The current 5/7, 7/5 and full-width rhythm follows the `gridSpan` field on each project.

## How to update project text

Edit the matching object in `data/projects.ts`. Titles, category, year, description, replacement image, future URL and layout options all live there.

To activate a future case-study link, set `href` to a real route or URL. Leave it as `null` until that page exists; cards with no URL are intentionally non-clickable.

## How to update LinkedIn URL

Change `linkedinUrl` in `data/site.ts`. It currently points to LinkedIn's homepage as a safe placeholder.

## How to add the final résumé

1. Put the PDF in `public/`, for example `public/apurba-jalal-uchash-resume.pdf`.
2. Change `resumeUrl` in `data/site.ts` to `"/apurba-jalal-uchash-resume.pdf"`.
3. Remove the temporary `.txt` file if it is no longer useful.

## How to replace the profile photo

1. Add the portrait to `public/profile/`.
2. In `components/about/ProfileVisual.tsx`, replace the placeholder contents with `next/image` using `fill`, `object-fit: cover` and the same outer `.profile-visual` container.

Keeping the existing container preserves the desktop 8/4 composition and mobile aspect ratio.

## Main content files

- `data/projects.ts` — project content, ordering, images and layout variants
- `data/experience.ts` — career history
- `data/site.ts` — email, LinkedIn and résumé link
- `app/globals.css` — visual system and responsive behavior

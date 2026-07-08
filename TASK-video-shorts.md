# TASK: Latest-Short hero + Shorts grid on the homepage

> Show the newest YouTube Short in a click-to-play hero below the banner, and every published Short in a grid near the bottom. New Shorts are added by editing one manifest file; the newest automatically becomes the hero.

## Context

PopiLearn is the promo site for the @popilearn YouTube channel. The channel publishes vertical Shorts (music/learning songs for ages 3–7) and Angel wants the site to surface them: the latest Short playing prominently near the top, and a browsable wall of all Shorts lower down. As Angel publishes a new Short, he adds one line to a manifest and the newest one takes over the hero while the previous one drops into the grid.

This is the Phase 1 "episode guide" step from the project CLAUDE.md. The site keeps its current "coming soon" waitlist sections — this task **inserts** two new sections, it does not replace anything.

Design decisions already settled with Angel (do not revisit):
- **Embed YouTube, never self-host.** The site references YouTube video IDs and embeds them so plays credit the channel. The `animation/Episodes/*.mp4` masters are NOT used by the site.
- **All content is vertical (9:16 Shorts).** No landscape handling needed yet.
- **Click-to-play, no autoplay.** Browsers block sound-on autoplay, and the site is fully server-rendered with zero client JS today — keep it that way except for one isolated player component.
- **Manual manifest, no DB, no login.** Adding a video = edit `lib/episodes.ts` and redeploy. The Neon DB stays disconnected. No auth (public marketing site).

## Requirements

1. Create a typed episode manifest at `lib/episodes.ts` as the single source of truth (schema below), seeded with the one currently-published Short.
2. Create one isolated `"use client"` player component that renders a 9:16 vertical facade (branded thumbnail + play button) and swaps to an autoplaying YouTube iframe on click. Reused by both the hero and the grid cards. This must be the ONLY client component added.
3. Add a **Latest Short hero section** directly below `<BannerSection />`: the newest episode (by `publishedAt`, descending) rendered in the vertical player, paired on desktop with a text column (episode title + a Subscribe-on-YouTube button) so the layout fills the width; stacked full-width on mobile.
4. Add a **Shorts grid section** near the bottom of the page (before `<DownloadSection />`): every episode, newest-first, as vertical cards. Each card plays inline via the same player and shows a "Watch on YouTube" link that deep-links to `https://www.youtube.com/shorts/{youtubeId}`.
5. Adding a new entry to `episodes.ts` must, with no other code change, move that Short into the hero and push the prior hero into the grid — purely from the `publishedAt` sort.
6. No autoplay on load; nothing plays until the user clicks. Respect `prefers-reduced-motion` (no looping/bouncing animation on the player elements).

## Implementation Notes

### `lib/episodes.ts` (new file)

```ts
export type Episode = {
  id: string;          // internal label, e.g. "E0001"
  youtubeId: string;   // 11-char YouTube ID
  title: string;
  publishedAt: string; // ISO date "YYYY-MM-DD" — drives ordering
};

// Newest-first is derived by sorting on publishedAt desc — do NOT hand-order this array.
export const episodes: Episode[] = [
  {
    id: "E0001",
    youtubeId: "i6W1845qraw",
    title: "ABC Song — Learn the Alphabet with Popi",
    publishedAt: "2026-07-05", // TODO Angel: confirm real publish date
  },
  // Wheels on the Bus is uploaded but PRIVATE — do NOT add until it is public:
  // { id: "E0003", youtubeId: "sDescdPkajM", title: "Wheels on the Bus — Gentle Ride", publishedAt: "…" },
];

export function episodesNewestFirst(): Episode[] {
  return [...episodes].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
export function latestEpisode(): Episode | undefined {
  return episodesNewestFirst()[0];
}
```

### `app/ShortPlayer.tsx` (new file — the ONLY client component)

- Starts with `"use client";` and uses a single `useState` (`playing`).
- Props: `{ youtubeId: string; title: string }`.
- Before click: render a `9/16` `aspect-ratio` box containing the thumbnail `https://i.ytimg.com/vi/{youtubeId}/hqdefault.jpg` with `object-fit: cover` (center-crop, since hqdefault is landscape), a brand-colored circular play button overlay, and an accessible `<button aria-label="Play {title}">`.
- On click: replace the facade with
  `<iframe src="https://www.youtube.com/embed/{youtubeId}?autoplay=1&rel=0&playsinline=1" ... allow="autoplay; encrypted-media" allowFullScreen />` filling the same 9:16 box.
- This facade pattern keeps YouTube's heavy iframe out of the initial load until a user opts in — important once there are many Shorts.

### Wiring in `app/page.tsx`

- The two new sections are **server** functions added alongside the existing section functions (match the existing `function XSection()` style). They import `episodesNewestFirst` / `latestEpisode` from `lib/episodes.ts` and render `<ShortPlayer />` (a server component may render a client component — fine).
- `LatestShortSection`: reads `latestEpisode()`. If undefined, render nothing (guard for an empty manifest). Vertical player capped around `max-width: 340px`; desktop two-column (player + text/Subscribe), mobile single column.
- `ShortsGridSection`: maps `episodesNewestFirst()` to cards; responsive grid (e.g. 2 cols mobile → 4–5 desktop), each card a `9/16` `ShortPlayer` plus the "Watch on YouTube" deep link.
- Update the `Home` render order to exactly:
  ```
  <BannerSection />
  <LatestShortSection />   {/* NEW */}
  <HeroCTASection />
  <TrustBar />
  <FeaturesSection />
  <LearningSection />
  <HowItWorksSection />
  <ShortsGridSection />     {/* NEW */}
  <DownloadSection />
  ```
- Styling: reuse existing brand tokens/classes from `globals.css` (Baloo Thambi 2 headings, Nunito body, brand hex vars, 16px+ radii). Do not introduce new fonts or colors.

### Per project CLAUDE.md

Before implementing, run the LightRAG context query described in the project CLAUDE.md ("Before Implementing Any TASK", step 3) for "video hero + shorts grid in PopiLearn".

## Do Not Change

- `public/PopiBanner.png` — protected original banner art.
- Brand color hex values and the Baloo Thambi 2 + Nunito pairing in `app/globals.css` — from the official brand guide. You may ADD new classes; do not alter existing tokens.
- Existing section components in `page.tsx` — `Nav`, `BannerSection`, `HeroCTASection`, `TrustBar`, `FeaturesSection`, `LearningSection`, `HowItWorksSection`, `DownloadSection`, `Footer`. Do not edit, reorder, or remove them; only insert the two new sections at the positions above.
- No auth/login, no database/Neon wiring, no analytics or tracking, no cookie/GDPR banner (per CLAUDE.md "What NOT To Do").
- Do not self-host or reference any `.mp4`; do not touch the `animation/Episodes` folder.
- Do not make `page.tsx` a client component — only `app/ShortPlayer.tsx` carries `"use client"`.
- The `sDescdPkajM` (Wheels on the Bus) entry stays commented out until Angel says it is public.

## Acceptance Criteria

- [ ] `npm run build` passes with zero type errors.
- [ ] Below the banner, the ABC Short (`i6W1845qraw`) shows as a vertical thumbnail with a play button and plays inline on click (with sound).
- [ ] A Shorts grid appears near the bottom listing all published episodes newest-first, each with a working "Watch on YouTube" link to `youtube.com/shorts/{id}`.
- [ ] Nothing plays until clicked; no console errors; layout is not broken on a 375px-wide mobile viewport or desktop.
- [ ] Adding a second manifest entry with a later `publishedAt` moves it to the hero and pushes ABC into the grid, with no other code edit (verify locally, then revert the test entry).
- [ ] Only `lib/episodes.ts`, `app/ShortPlayer.tsx`, and the two insertion points in `app/page.tsx` are modified — confirm with `git diff`.

## Verification

1. Run `npm run build`; confirm zero errors.
2. `git diff` — no files outside the three listed are touched; existing sections unchanged.
3. Load the page at mobile (375px) and desktop widths; click the hero and one grid card; confirm each plays vertically and the "Watch on YouTube" links resolve to the correct Short.
4. Temporarily add a dummy manifest entry dated in the future, reload, confirm it becomes the hero, then remove it.

## Git

Per project CLAUDE.md: do NOT commit or push. Build and test only. Angel reviews and handles git himself (author email angelsbadillos@gmail.com).

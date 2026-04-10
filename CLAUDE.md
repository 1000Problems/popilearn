# PopiLearn — Marketing Site & Future Platform

Spanish educational YouTube channel for kids ages 3-7. Currently a "coming soon" landing page, will evolve into the channel's web presence with episode guides, character pages, and parent resources.

## Before Implementing Any TASK

1. **Read the full TASK spec** — understand scope, acceptance criteria, and the Do Not Change section.
2. **Read the frontend-design skill** at `~/1000Problems/Skills/shared-frontend-design-SKILL.md` before any UI work.
3. **Query LightRAG** for cross-project context before touching shared patterns:
   ```bash
   curl -X POST http://localhost:9621/query \
     -H "Content-Type: application/json" \
     -d '{"query": "architectural context for [feature being implemented] in PopiLearn", "mode": "hybrid"}'
   ```
4. **Stay in scope.** Only modify files and components explicitly listed in the TASK spec.
5. **Verify before committing.** Run `npm run build`, confirm zero type errors, and check that nothing outside the TASK scope changed with `git diff`.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Database**: Neon Serverless PostgreSQL (`@neondatabase/serverless`) — not yet connected, schema TBD
- **Hosting**: Vercel
- **Fonts**: Baloo Thambi 2 (display/headings), Nunito (body text) — loaded via `next/font/google`

## Brand Reference

PopiLearn (externally branded name, internally PopiPlay) is a Spanish-language kids YouTube channel.

**Slogan:** ¡Canta, baila, ¡pop! y aprende una vez más!
**Target audience:** Ages 3-7, Spanish-speaking families
**Style:** Cocomelon + Dora hybrid, colorful, warm, playful

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Orange | #FF6B35 | Papá Leo, action buttons, main titles |
| Yellow | #FFD166 | Happy backgrounds, text shadows |
| Blue | #4D9DE0 | Mamá Ana, interactive elements |
| Green | #06D6A0 | Robot Rob, play buttons |
| Pink | #EF476F | Luna, highlights |
| Navy | #2B2D42 | Text, borders |
| Brown | #8D6E63 | Trufo |
| Light Gray | #F0F0F0 | Michi, dialog backgrounds |

### Characters

7 characters: Papá Leo (orange), Mamá Ana (blue), Lucas (green, age 7), Luna (pink, age 4), Rob (green robot), Trufo (brown dog), Michi (gray cat).

Full character details in `~/1000Problems/Animation/brand-reference.md`.

## Project Structure

```
app/
  page.tsx          -- Coming soon landing page
  layout.tsx        -- Root layout (fonts, metadata)
  globals.css       -- Design tokens, animations, theme
  api/              -- API routes (future)
lib/
  db.ts             -- Neon connection helper
public/
  PopiBanner.png    -- Channel banner image
  popilearn-logo.svg -- Logo for homepage card (320x192)
```

## Design Direction

**Aesthetic:** Playful toy-like — bright, warm, bouncy. Think toy store meets cartoon world.
**NOT:** Generic SaaS, corporate, muted pastels, or "adult minimalism."

Key design principles:
- Baloo Thambi 2 for ALL headings — rounded, friendly, childlike
- Nunito for body text — clean, readable, still warm
- Brand colors used boldly — not as subtle accents, as primary surfaces
- Animations should feel bouncy and alive (bounceIn, float, wiggle)
- Soft colored background orbs create atmosphere
- Rounded corners everywhere (border-radius 16px+)
- Respect `prefers-reduced-motion`

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Neon PostgreSQL connection string (future) |

## Current State

- **Phase 0 (current):** "Coming soon" landing page with banner, subscribe CTA, character color dots
- **Phase 1 (planned):** Episode guide, character pages
- **Phase 2 (planned):** Parent resources, newsletter signup
- **Phase 3 (planned):** Interactive content (games, activities)

## Git Rules

DO NOT commit or push. Build and test only. Angel reviews the work and handles git himself.

Git author email MUST be angelsbadillos@gmail.com on every commit (when Angel commits). Vercel Hobby plan enforces this.

## Protected Areas

- `public/PopiBanner.png` — original banner art, do not modify or replace
- Brand color palette — the hex values in globals.css come from the official brand guide
- Font pairing (Baloo Thambi 2 + Nunito) — established brand typography

## What NOT To Do

- Do NOT use generic fonts (Inter, Roboto, Arial, system fonts) — brand has specific typography
- Do NOT use dark themes — this is a kids channel, keep it bright and warm
- Do NOT add auth or login pages — this is a public marketing site
- Do NOT add analytics, tracking, or telemetry
- Do NOT use muted/corporate color palettes — keep it colorful and playful
- Do NOT add cookie banners or GDPR popups (COPPA considerations TBD)

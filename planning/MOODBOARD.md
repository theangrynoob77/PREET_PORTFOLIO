# Moodboard — Pacelane (Sales Pipeline Website Template - Fast Pipeline-First Sales Tracker Website)

## Feel
Fast, crisp, keyboard-first, signal-bright, no-nonsense. A pipeline that feels like a race lane: deals move, numbers tick, nothing waits for a page load.

## Palette
| Token | Value | Use |
|---|---|---|
| --color-canvas | oklch(0.975 0.004 250) | page background (cool chalk) |
| --color-surface | oklch(0.995 0.002 250) | cards, panels, inputs |
| --color-mist | oklch(0.945 0.008 255) | quiet bands, board columns |
| --color-ink | oklch(0.2 0.045 262) | text, borders, the dark app bar and dark bands (ink navy) |
| --color-ink-soft | oklch(0.3 0.05 262) | hover on dark |
| --color-lime | oklch(0.91 0.2 124) | signal lime: primary buttons, won, highlights (always ink text on it) |
| --color-lime-deep | oklch(0.48 0.13 132) | lime used as text or icon on light |
| --color-cobalt | oklch(0.52 0.19 260) | second chart series, links in the app, focus ring |
| --color-muted | oklch(0.46 0.025 260) | secondary text |
| --color-line | oklch(0.89 0.01 255) | borders, dividers |
| --color-loss | oklch(0.55 0.2 25) | lost, overdue, errors |
| --color-amber | oklch(0.82 0.14 78) | "going stale" warnings |

Body text is ink on chalk (contrast > 12:1). Lime is never used for text on light; `lime-deep` is.

## Type
- Display: **Bricolage Grotesque** (700–800, tight tracking -0.03em) for headlines, big numbers and the logo.
- Body: **Geist** (400/500/600).
- Figures: **Geist Mono** with tabular numbers for every ₹ value, date, duration and the keyboard hints.
- Sizes: hero `text-5xl` → `text-[8.5rem]`, section headings `text-4xl` → `text-6xl`, body 16–18px, app UI 14px.

## Shape language
Crisp 8px corners, 2px ink borders on the things that matter, hard offset shadows (`4px 4px 0 ink`) on primary buttons and the hero lane, lime "lane stripes" (diagonal repeating stripes) as decoration, `kbd` chips beside actions to say "there is a shortcut for this".

## Pages & sections
**Marketing site**
- `/` Home: 1 "Hero lane" — giant full-width headline, a live lane underneath where sample deals race toward Won (click a deal or press → to push it a stage; the ₹ won counter ticks) · 2 "Six moves, zero tabs" — a scrubbed lane (GSAP ScrollTrigger) where one deal travels through the six stages as you scroll · 3 "Your hands never leave the keys" — the shortcut deck · 4 "Inside the board" — an index of the six app screens, each a link into the working app · 5 "Built for people who carry a number" — split photo band with the rep, founder and BDM stories · 6 "Numbers that moved" counters · 7 one big quote · 8 pricing teaser · 9 closing "Start your lane" band · footer.
- `/features` Feature chapters with a sticky chapter rail (scroll-spy): Pipeline, Deals & contacts, Activity & calls, Email templates, Won & lost, Rep performance, Next-step AI — each with a CSS-drawn product shot or photo.
- `/pricing` Three plans with monthly/yearly switch, a seat calculator, comparison table, FAQ accordion.
- `/contact` Talk-to-sales form (emails the owner), what happens next, the Bengaluru studio photo, contact details.
- `*` Lost lane (not found).

**The working app (`/app/*`, sign-in required — email + password or Google)**
- `/app` Pipeline board: five open stages as columns, a "finish line" with Won and Lost drop zones, drag and drop with the mouse, a Move menu and keyboard shortcuts for touch and keyboard users, filters saved per person.
- `/app/contacts` Contacts with their linked deals and calls.
- `/app/calls` Call log with outcome, duration (and a call timer) and connect-rate stats.
- `/app/templates` Email templates with placeholders, live preview filled from a deal, copy, AI personalise.
- `/app/performance` Rep performance: leaderboard, won value per rep, won vs lost per rep, quota ring, lost reasons.
- `/app/activity` Team activity log with filters and a note form.

## Imagery
High-key cool daylight editorial photos: chalk-white walls and desks, ink-navy clothing and furniture, a single pop of acid lime in every frame (a mug, a timer, a chair, paper cards). Anonymous people, faces turned or cropped. Files: `rep-on-call.jpg`, `team-huddle.jpg`, `founder-desk.jpg`, `call-closeup.jpg`, `studio-bengaluru.jpg`. Everything else (product shots, charts, lanes) is drawn in CSS/SVG.

## Services
- `db` — shared lists for the whole team (deals, contacts, activities, calls, email_templates) and per-person prefs (pipeline filters, quota).
- `google_auth` — sign in with Google on the workspace gate (email + password also works).
- `ai` — "Suggest next step" on a deal and "Personalise" on an email template.
- `email` — the marketing contact form reaches the owner. The app never emails contacts: templates are copied and sent from the rep's own inbox.

## Motion & interaction
Hero lane deals that advance on click or → with a ticking ₹ counter; a scroll-scrubbed lane story; shortcut keys that light up when pressed; counters; quote reveal; drag and drop with a lifted card and highlighted drop column; drawers and dialogs that slide in under 250 ms. Respect reduced motion.

## Departures
- Hero is a giant full-width headline with a live horizontal race lane below it — no text-left / image-right split, no tilted product shot.
- The story of a deal is a scroll-scrubbed horizontal lane, not three feature cards.
- A keyboard-shortcut deck replaces the usual "benefits" grid.
- The app has no sidebar: an ink top bar with tabs and a bottom "finish line" for Won/Lost, so the board gets the whole screen.

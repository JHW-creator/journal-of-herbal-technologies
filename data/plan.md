# Journal of Herbal Technologies (JHT) — Website Plan

**Source of truth:** `data/JHT Website Content.pdf`  
**Product:** Static public website for a peer-reviewed scholarly journal  
**Stack:** Next.js · TypeScript · Tailwind CSS · shadcn/ui · Vercel  
**Phase:** Content-complete static site first; CMS / submission system later

---

## Project rules (mandatory)

These rules apply to every design and code decision for this site. Prefer them over personal preference or generic templates.

### 1. Stay on topic for design

- Design must always follow the subject: a scholarly herbal / natural-products journal.
- Visual language = academic publishing + botanical science (calm, credible, readable).
- Do not drift into SaaS marketing, startup landing-page, or unrelated creative themes.

### 2. No off-topic extras

- Ship only what the PDF content and this plan call for.
- Do not add features, sections, fake stats, social proofs, blogs, newsletters, dark-mode toggles, animations-for-show, or “nice to have” widgets that are not in scope.
- If it is not in the content or plan, do not invent it.

### 3. Color system (no purple / no red)

- **Never** use purple, violet, indigo, magenta, or red — or their shades — for CTAs, links, accents, or brand UI.
- Choose a decent, restrained palette suited to herbal science, for example:
  - Deep forest / botanical green (primary brand)
  - Warm paper / off-white (page background)
  - Ink / near-black (body text)
  - Muted teal or soft gold (links / secondary accent only if needed)
- CTAs: solid botanical green (or dark green) with clear hover; secondary CTAs as outline / text links — not loud or candy-colored.

### 4. Typography, components, and short code

- Use clean, professional typography (serif for journal titles / headings; readable sans for UI and body). Avoid default “AI font” stacks as the design identity.
- Prefer small, reusable components over one-off page blobs.
- Keep code short: if something can be done in ~2 lines, do not write 10.
- No over-abstraction, no unnecessary wrappers, hooks, or utils “just in case.”

### 5. Professional, readable code

- Write like a professional developer: clear names, consistent structure, easy for another developer to open and understand.
- Prefer plain TypeScript/React patterns the team already uses over clever tricks.
- Comments only where intent is non-obvious; do not narrate obvious code.
- Match existing project conventions once the scaffold exists.

### 6. Use shadcn/ui for UI primitives

- When we need **cards, buttons, accordion, dialog, tabs, input, select, sheet, dropdown**, or similar UI, use **[shadcn/ui](https://ui.shadcn.com/)** instead of building from scratch.
- Install only the components we actually need (do not dump the whole library).
- Theme shadcn tokens to match our botanical green / paper / ink palette — never keep default purple/violet accents.
- Still follow rule 2: do not add UI chrome just because shadcn makes it easy. Cards only where interaction or content structure needs them.

---

## 1. Goal

Build a clean, credible academic journal website using the PDF content as-is. Host on Vercel now; attach a custom domain later. Design should feel like a real scholarly publisher site — not a generic AI landing page.

**Out of scope for v1**

- Live manuscript submission portal
- Dynamic article search / database
- Payment / APC checkout
- User accounts

v1 uses static pages + placeholder UI where the PDF marks content as `[TO BE ASSIGNED]` / `[TO BE FINALIZED]` / `[TO BE POPULATED]`.

---

## 2. Current repo status

| Item                                      | Status                           |
| ----------------------------------------- | -------------------------------- |
| `package.json` with Next.js 16 + React 19 | Present                          |
| App / `src` scaffold                      | Missing — need full Next.js init |
| TypeScript                                | Not configured yet               |
| Tailwind CSS                              | Not installed yet                |
| Content PDF                               | Present in `data/`               |

**First build step:** finish scaffolding (App Router, TS, Tailwind, ESLint) on top of the existing Next install, then implement pages.

---

## 3. Site map (from PDF)

| Route                        | Page                                    | PDF section                     |
| ---------------------------- | --------------------------------------- | ------------------------------- |
| `/`                          | Home                                    | §1 HOME                         |
| `/about`                     | About the Journal                       | §2 ABOUT THE JOURNAL            |
| `/editorial-board`           | Editorial Board                         | §3 EDITORIAL BOARD              |
| `/for-authors`               | Guide for Authors (overview + anchors)  | §4 FOR AUTHORS                  |
| `/for-authors/article-types` | Article Types                           | Article Types                   |
| `/for-authors/submission`    | Submission & Editorial Process          | Submission process              |
| `/for-authors/peer-review`   | Peer Review                             | Peer Review                     |
| `/for-authors/preparation`   | Manuscript Preparation                  | Preparation, reporting, formats |
| `/for-authors/ethics`        | Publication Ethics & Research Integrity | Ethics / AI / originality       |
| `/for-authors/checklist`     | Submission Checklist                    | Checklist                       |
| `/articles`                  | Articles (browse / empty state)         | §5 ARTICLES                     |
| `/articles/archive`          | Archive                                 | Archive placeholder             |
| `/articles/special-issues`   | Special Issues                          | Special Issues                  |
| `/contact`                   | Contact                                 | §6 CONTACT                      |

**Shared layout**

- Header / primary nav: Home · About · Editorial Board · For Authors · Articles · Contact
- Footer (PDF FOOTER): brand line, nav, Author Resources, Journal Information, ISSN placeholders, ©

Optional later (same content, better UX): deep “For Authors” content as one long page with sticky TOC instead of many subroutes — decide during implementation; either is fine for static hosting.

---

## 4. Content inventory (what goes on each page)

### 4.1 Home (`/`)

- Journal name + tagline: _Advancing Science, Technology and Innovation in Herbal Research_
- Short intro paragraph (peer-reviewed; medicinal plants, natural products, herbal materials/formulations & technologies)
- Interdisciplinary platform blurb (pharmacognosy → regulatory science)
- Primary CTAs: **Explore JHT** · **Submit Manuscript** · **Explore Articles** · **About the Journal**
- Short “About the Journal” teaser + link to `/about`

**Note:** Submit Manuscript CTA can link to `/for-authors` or `/contact` until a real submission system exists.

### 4.2 About (`/about`)

- Full about copy
- **Aim**
- **Scope** — eight areas (list + bullets as in PDF):
  1. Pharmacognosy, Botany & Herbal Authentication
  2. Phytochemistry & Natural Products
  3. Herbal Extraction, Processing & Manufacturing Technologies
  4. Standardization, Analytical Science & Quality Control
  5. Herbal Formulation & Drug-Delivery Technologies
  6. Pharmacology, Toxicology & Mechanistic Evaluation
  7. Computational, Biotechnological & Emerging Technologies
  8. Herbal Product Development, Clinical Translation & Regulatory Science
- **Scientific Priority** (lower-priority study types)
- **What JHT Does Not Aim to Be**
- **Journal Information** table (placeholders allowed):
  - Title, ISSN, Online ISSN, Open Access, Frequency, Publisher, APC, License
- **Institutional Association** — Oriental College of Pharmacy (support vs editorial independence)

### 4.3 Editorial Board (`/editorial-board`)

- Editorial leadership intro
- Roles: Editor-in-Chief, Associate Editors, Section Editors, Editorial Board Members  
  → Use structured empty/placeholder slots until names/affiliations are supplied
- Founding Publisher: Raj Mishra, Krishna Prajapati (role distinct from editorial decisions)
- Editorial Independence statement

### 4.4 For Authors (`/for-authors` + subpages)

All author policy content from the PDF, organized for scanning:

- Guide intro + scientific expectations
- Article types (Original Research, Reviews, Systematic/Scoping Reviews, Short Communications, Methodological/Technical, Perspectives, Commentaries, Editorials, Letters — protocols/case reports not accepted)
- Submission → screening → peer review → decision → revision → acceptance → production → publication
- Double-anonymized peer review; typically ≥2 reviewers; no routine author-suggested reviewers
- Preparation, references (author-date), word limits, article-specific requirements
- Reporting: herbal material, extract/preparation, pharmacology/toxicology, formulation, analytical, computational
- Routine antioxidant/antimicrobial studies guidance
- Human/animal ethics; graphical abstracts & highlights; data & reproducibility
- Declarations list; AI policy; originality; publication ethics & integrity
- Submission checklist
- Manuscript format structures by article type
- Suggested declaration wording
- General formatting requirements

### 4.5 Articles (`/articles`)

- Intro copy
- **Latest Articles:** empty state — “Published articles will appear here”
- Search/filter UI as **static mock** (keyword, title, author, subject area, article type, date) — non-functional or client-only filter over empty/local JSON
- Browse by eight subject areas (links to filtered empty states or anchors)
- Stub for individual article page template (`/articles/[slug]`) — not required for launch if no articles yet; keep a template ready
- Archive & Special Issues pages with placeholder copy

### 4.6 Contact (`/contact`)

- Editorial Office (topics list) — email placeholder
- General Enquiries — email placeholder
- Institutional Contact: Oriental College of Pharmacy — address TBD

### 4.7 Placeholders to surface clearly (not invent)

Do **not** invent ISSN, emails, frequencies, APC, license, or publisher legal name. Show “To be announced” / omit until provided:

- ISSN / Online ISSN
- Publication frequency
- Publisher
- APC
- Open Access license
- Editorial office & general emails
- Institutional address
- Named editors (beyond founding publisher names already in PDF)

---

## 5. Design direction — “real journal, not AI template”

Follow **Project rules** above. Target look: established open-access journal sites (restrained academic publishing), not a SaaS marketing landing page.

### Do

- Strong journal wordmark as the primary brand signal in the header and home masthead
- Serif for titles / journal name (e.g. **Source Serif 4** or **Libre Baskerville**); clean sans for UI/body (e.g. **Source Sans 3** or **IBM Plex Sans**) — avoid Inter / Roboto / system-default stacks as the “design”
- Academic palette: deep forest / botanical green + warm paper/off-white reading surface + ink black text; one restrained accent (e.g. muted gold or deep teal) for links/CTAs
- Subtle paper texture or soft botanical photography as atmosphere — not purple gradients, glassmorphism, or glow
- Typography-led home: masthead, one journal statement, short support line, CTA group — no stat strips, pill clusters, or floating badges
- Long policy pages: readable measure (~65–75ch), clear H2/H3 hierarchy, optional sticky table of contents
- Real imagery only if we have licensed / owned assets (campus, herbarium, lab). Until then: typography + restrained botanical motif, not stock-photo collage cards

### Don’t

- Purple-on-white / indigo gradient “AI default”
- Card grids of everything
- Hero overlays, promo chips, emoji
- Fake metrics (“10k+ readers”, invented indexing logos)
- Dark-mode-first academic theme

### Motion (light, intentional)

- Header shrink / border on scroll
- Soft fade-in of masthead once
- TOC active-section highlight on author pages

No parallax noise or looping decorative animation.

---

## 6. Technical architecture

### 6.1 Framework choices

- **Next.js App Router** + **TypeScript**
- **Tailwind CSS** for styling (design tokens in CSS variables)
- **shadcn/ui** for reusable UI (Button, Card, Accordion, etc.) — add components on demand
- **Static-first:** prefer Server Components; no required backend for v1
- Configure for Vercel: default Next deployment is enough (`next build` → Vercel)

Recommended `next.config` posture for a brochure journal site:

- Keep SSR/SSG as Next defaults (static pages where possible)
- Later: `output: 'export'` only if you need fully static file hosting; **not required for Vercel**

### 6.2 Suggested folder structure

```text
app/
  layout.tsx              # header, footer, fonts, metadata
  page.tsx                # home
  about/page.tsx
  editorial-board/page.tsx
  for-authors/...
  articles/...
  contact/page.tsx
  globals.css
components/
  layout/Header.tsx
  layout/Footer.tsx
  ui/...                  # shadcn primitives (button, card, accordion, …)
  # plus small app components (TOC, etc.) as needed
content/                  # typed TS/MD content extracted from PDF
  home.ts
  about.ts
  editorial.ts
  authors.ts
  articles.ts
  contact.ts
  nav.ts
public/
  images/                 # logo, og image when available
data/                     # source PDF + this plan (not shipped as routes)
```

Content lives in typed modules or MDX so copy edits don’t require hunting through JSX. PDF stays the editorial source; code mirrors it.

### 6.3 SEO / scholarly basics (v1)

- Per-page `<title>` + meta description
- Open Graph / Twitter cards (journal name + tagline)
- Semantic HTML (`header`, `nav`, `main`, `article`, `footer`)
- `robots.txt` + `sitemap.xml` via Next metadata routes
- Placeholder JSON-LD `Periodical` / `WebSite` schema (extend when ISSN/DOI exist)
- Accessible nav, focus states, sufficient contrast

### 6.4 Content placeholders pattern

Centralize TBD fields, e.g. `content/journal-meta.ts`:

```ts
export const journalMeta = {
  title: "Journal of Herbal Technologies",
  shortName: "JHT",
  tagline: "Advancing Science, Technology and Innovation in Herbal Research",
  issn: null,
  onlineIssn: null,
  publisher: null,
  // ...
};
```

UI renders “To be announced” when `null`.

---

## 7. Vercel + domain plan

### Now

1. Push repo to GitHub (or Git provider Vercel supports)
2. Import project in Vercel → Framework Preset: Next.js
3. Root directory: repo root; build: `next build`; output: default
4. Preview deployments on every PR; Production on `main`
5. Confirm `https://*.vercel.app` works

### Later (custom domain)

1. Buy/point domain (e.g. `jhtjournal.org` — name TBD by owners)
2. Vercel → Project → Domains → add domain
3. Set DNS (A/CNAME as Vercel instructs)
4. Force HTTPS; optional `www` → apex redirect
5. Update canonical URL + sitemap base URL in env (`NEXT_PUBLIC_SITE_URL`)

No special static-export step required for Vercel + custom domain.

---

## 8. Implementation phases

### Phase 0 — Scaffold (half day)

- [x] Add TypeScript, Tailwind, ESLint, App Router layout
- [x] Init shadcn/ui; theme tokens to botanical palette; add Button (and Card only if needed)
- [x] Fonts, CSS variables, Header/Footer shells
- [x] Empty routes matching site map

### Phase 1 — Content pages (core launch)

- [x] Home, About, Editorial Board, Contact
- [x] For Authors hub + key policy sections (ethics, checklist, article types, preparation)
- [x] Articles empty state + Archive / Special Issues stubs
- [x] Footer resource links wired

### Phase 2 — Polish for launch

- [x] Responsive check (mobile/desktop)
- [x] SEO metadata, favicon, OG image
- [x] Accessibility pass
- [ ] Deploy to Vercel preview → production

### Phase 3 — Post-launch (when real data exists)

- [ ] Fill ISSN, emails, publisher, APC, license, board names
- [ ] Article listing from MD/JSON or headless CMS
- [ ] Individual article pages + PDF assets
- [ ] Real submission link / external system (e.g. OJS) if chosen
- [ ] Indexing badges only when actually indexed

---

## 9. Decisions to confirm before / during build

| Decision | Choice |
| -------- | ------ |
| Submit Manuscript button target | `/for-authors` until submission system exists |
| For Authors structure | **Hub page + subroutes** + **nav dropdown** (best of both: quick jump + deep pages) |
| Logo / brand mark | Custom SVG leaf / mark created in repo |
| Domain | `journalofherbaltechnologies.com` (`NEXT_PUBLIC_SITE_URL`) |
| Articles / empty / 404 | Custom SVG illustrations — not plain “Coming soon” text |

---

## 10. Success criteria (v1)

- [ ] All PDF sections represented accurately (no invented journal facts)
- [ ] Primary nav + footer match PDF structure
- [ ] Readable academic design; desktop + mobile
- [ ] Builds cleanly; live on Vercel
- [ ] Ready for custom domain via env + DNS only
- [ ] Placeholders explicit for TBD fields
- [ ] Content editable in `content/` without redesigning pages

---

## 11. Next action

Phase 2 polish is done except Vercel deploy. Next: deploy when ready, or Phase 3 when real journal data exists.

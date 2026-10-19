# Personality refresh — change log

Tracking every diff on the portfolio so we can revert any. Format:
  <change-id> — <files> — <what + fallback if it breaks>

## Earlier (already deployed)
- (See git log on commit history from past turns: github.com/ashikonik/ashikonik.github.io)
- Profile photo rotated -3.5deg CCW to level the head (file: public/profile-photo.jpg). Fallback: rotate by 0deg (current save is in repo HEAD; dropping one commit reverts).

## In-progress: anti-vibe-coded, personality-rich refresh

### Change 001 — src/index.css (palette, hero photo, sections)
- Added tokens: --copper, --copper-faint, --paper-tint; --bg shifted to #f6f3ec
- Body: subtle dotted paper texture (radial-gradient, fixed bg)
- .hero-photo: rotated -2.5° on a polaroid-style wrap with caption "— Dhaka, 2024"
  - Fallback: monogram now also has caption; layout kept square-ish
- .hero-greeting: italic Newsreader "Hello there." in copper, with rule
- .hero-now: green pulse-ring "currently" pill
- .section-label: ✶ + copper star prefix, wider letter-spacing
- .section-divider: gradient copper→teal, longer
- .marquee + .marquee-track + .marquee-item: animated infinite-scroll strip with hover-pause, fade edges
- .project-card: 4px top ribbon colored by category (research=teal, software=copper), hover lifts +4px and shadow, year on right
- .timeline: period becomes copper tag with letter-spacing, bullet markers ▸, dots are rotated squares
- .edu-card: copper side-bar, score now large italic Newsreader
- .skill-group-title: // prefix in copper
- .skill-tag: teal-on-hover
- .footer: dashed top border, paper card
- .not-found h1: 6rem with hand-drawn underline via inline SVG

### Change 002 — Three targeted edits
- Marquee label "I think in *these* ↓" → "Stacks, tools, and a few obsessions ↓" (no italic, no second-person)
  - File: src/components/Marquee.jsx
  - Fallback: revert to "I think in <em>these</em> ↓"
- NowSection title "A short note from the workbench" → "What I'm doing this week"
  - File: src/components/NowSection.jsx
  - Fallback: revert the title string
- Education redesign: cards → 3-column row (period | institution+credential | big score)
  - Files: src/data.js (split score into score/scoreScale/scoreLabel/detail/periodRange/yearStart),
          src/index.css (new .edu-list, .edu-row, .edu-period-block, .edu-body, .edu-score classes — old .edu-grid/.edu-card removed),
  src/pages/Home.jsx (Education section rewritten)
  - Fallback: revert all three files (git restore HEAD~1)

### Change 003 — Revert three personality-fluish pieces
- Marquee (stacks ticker): component and CSS entirely removed
  - Files deleted: src/components/Marquee.jsx
  - CSS stripped: src/index.css (.marquee, .marquee-track, .marquee-item, .marquee-label rules deleted)
  - Imports/usage removed from src/pages/Home.jsx
- "Right now" / NowSection: component, CSS, and JSX usage entirely removed
  - Files deleted: src/components/NowSection.jsx
  - CSS stripped: src/index.css (.now-grid, .now-card, .now-card-label, .now-card-body rules deleted)
  - Imports/usage removed from src/pages/Home.jsx
- Education: rolled back to the pre-personality layout (the one that shipped
  on the original GitHub Pages site at commit 7b31eca)
  - src/data.js: education array back to {institution, credential, score, period}
  - src/index.css: edu-* rules restored to the pre-personality block (.edu-grid,
    .edu-card, .edu-institution, .edu-credential, .edu-score, .edu-period)
  - src/pages/Home.jsx: Education section now uses .edu-grid + .edu-card
  - Fallback: git revert HEAD (revert this whole commit) or pick an
    earlier commit before db6ba7d for the full personality build

### Change 004 — Roll back footer to pre-personality
- src/components/Footer.jsx: revert to plain "© {year} Md. Ashik-Uz-Zaman"
  with GitHub/LinkedIn/Scholar/ORCID links. The personality version
  ("Built in Dhaka, served from a static site" + handwritten "— cheers,
  Ashik") is gone.
- src/index.css: .footer-* rules reverted to the pre-personality block
  (solid border-top, simple padding, no .footer-mark, no dashed border,
  no paper-card background, no mono uppercase links).
- Fallback: git revert HEAD or git restore from commit 7b31eca

### Change 005 — Tighten top spacing on Home
- src/index.css:
  - .hero padding: 96px/0/64px → 0/0/48px. The page wrapper already
    adds 96px of top padding (via .page padding-top), so the hero's own
    96px was double-counted. Drops the perceived "huge gap at the top"
    by 96px.
  - .page padding-top: calc(64 + 96) → calc(64 + 48). Tightens the
    natural breathing room between the nav and the first hero line.
- Side effect: the hero now sits at the same top position as the
  pre-personality original (verified by checking out 7b31eca into a
  separate worktree and screenshotting the two side-by-side).
- Fallback: revert the .hero padding to var(--space-4xl) 0 var(--space-3xl)
  and .page padding-top to var(--space-3xl).

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

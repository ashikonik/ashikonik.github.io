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

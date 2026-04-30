# NormSafety — LinkedIn Carousel (6 slides)

Self-contained, ready-to-publish carousel built to spec:
- **1080 × 1350 px** (LinkedIn portrait)
- 6 slides (Cover → Problem → Solution → Target → Value → CTA)
- Deep blue gradient `#19539D → #082C78`, cyan `#5EE7FF` accents
- Glassmorphism cards, thin-line icons, 8px grid
- Fonts: **Sora** (headlines) + **Inter** (body)

## How to use

### Option 1 — Publish directly to LinkedIn (fastest)
1. Open `index.html` in **Chrome** or **Edge**.
2. Click **Export PDF** in the floating toolbar (top of page).
3. In the print dialog:
   - Destination: **Save as PDF**
   - Layout: **Portrait**
   - Paper size: **1080 × 1350 px** (custom, already set via `@page`)
   - Margins: **None**
   - Background graphics: **ON** ✅
4. Upload the resulting PDF as a LinkedIn **document post** — it becomes a swipeable carousel.

### Option 2 — Edit further in Canva
1. Open `index.html` in browser.
2. Right-click each slide → **Save as image** (or screenshot at 100% zoom).
3. Upload the 6 PNGs to Canva, drop into a 1080×1350 design, edit text/icons over the imported image.

## Brand system

| Token | Value |
|---|---|
| Primary deep | `#082C78` |
| Primary mid | `#19539D` |
| Accent cyan | `#5EE7FF` |
| Accent soft | `#A8C4F5` |
| Glass fill | `rgba(255,255,255,.06)` |
| Glass stroke | `rgba(255,255,255,.20)` |

Spacing scale: **8 / 16 / 24 / 32 / 48 / 64 / 96 px**.

## Editing the source

All copy is in `index.html`, well-commented per slide:
- `<!-- ════════ SLIDE 1 ════════ -->` etc.
- Search for the French text to find any block.
- Icons are inline SVG — change strokes to `currentColor` and they re-tint with the parent's color.

## Webinar CTA details (slide 6)

- Date: **01 mai 2026 — 18h00**
- Format: **Webinaire gratuit**
- Footer: `www.normsafety.com` · `contact@normsafety.com` · `+216 54 525 267`
- The QR code is a placeholder pattern — generate a real one (Canva → Apps → QR Code) and paste over it.

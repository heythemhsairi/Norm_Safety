# NormSafety — LinkedIn Carousel (6 slides)

Two outputs, one source of truth:

| File | Use it for |
|---|---|
| `NormSafety_LinkedIn_Carousel.pptx` | **Upload to Canva → fully editable** (each text block, card, icon is its own element) |
| `index.html` | Browser preview / Print-to-PDF for direct LinkedIn document upload |

Format: **1080 × 1350 px** portrait • 6 slides • Sora + Inter typography

## Edit in Canva (recommended)

1. Open Canva → **Create a design** → **Import file**
2. Upload `NormSafety_LinkedIn_Carousel.pptx`
3. Canva converts each PPTX slide into an editable Canva page. Every text block, glass card, icon, button, and shape is independently selectable.
4. Edit copy, swap icons (Canva's icon library has thin-line sets that match the brand), tweak colors.
5. Once satisfied → Share → **Download** as PDF (Print) for LinkedIn document post, or PNG x6 for LinkedIn image carousel.

## Print-to-PDF (no Canva needed)

1. Open `index.html` in **Chrome** or **Edge**.
2. Click **Export PDF** in the floating toolbar.
3. In the print dialog:
   - Destination: **Save as PDF** (NOT "Adobe PDF")
   - Layout: Portrait • Margins: None • Background graphics: ON ✅
4. Upload the PDF as a LinkedIn **document post**.

## Regenerate the PPTX

After editing copy in `build-pptx.mjs`:

```bash
cd linkedin-carousel
npm install   # first time only
npm run build
```

## Brand system

| Token | Value |
|---|---|
| Primary deep | `#082C78` |
| Primary mid | `#19539D` |
| Accent cyan | `#5EE7FF` |
| Accent soft | `#A8C4F5` |
| Glass fill | white at 6–8% opacity |

Spacing: **8 / 16 / 24 / 32 / 48 / 64 / 96 px**.

## Webinar CTA (slide 6)

- **01 mai 2026 — 18h00** · Webinaire gratuit
- `www.normsafety.com` · `contact@normsafety.com` · `+216 54 525 267`
- QR placeholder — generate a real one in Canva (Apps → QR Code) once the registration URL is ready.

## Notes for Canva editing

- The PPTX uses **solid deep blue** for backgrounds. In Canva, select the background → swap to a real linear gradient `#19539D → #082C78` for the premium look (PowerPoint shape gradients don't translate cleanly through Canva import, so we kept it solid).
- Glyphs (`✚ ◈ ◉ 📅 🎯`) on slides 4 and 6 are placeholders — replace with proper line icons from Canva's library (search "shield outline", "stethoscope outline", "calendar outline").
- Fonts: if Sora/Inter don't auto-apply in Canva, set them via the brand kit before editing.

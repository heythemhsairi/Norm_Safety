// NormSafety — LinkedIn Carousel PPTX generator (FR)
// Output: NormSafety_LinkedIn_Carousel.pptx — upload to Canva to edit each slide.
// Format: 1080 x 1350 px portrait (LinkedIn carousel).

import PptxGenJS from "pptxgenjs";

const pres = new PptxGenJS();

// 1080x1350 px @ 96 DPI = 11.25 x 14.0625 inches
pres.defineLayout({ name: "LINKEDIN_PORTRAIT", width: 11.25, height: 14.0625 });
pres.layout = "LINKEDIN_PORTRAIT";
pres.title = "NormSafety — LinkedIn Carousel";
pres.company = "NormSafety";
pres.author = "NormSafety";

// ── Brand tokens ──
const C = {
  primaryDeep:  "082C78",
  primaryMid:   "19539D",
  accentCyan:   "5EE7FF",
  accentSoft:   "A8C4F5",
  white:        "FFFFFF",
  glassFill:    "FFFFFF",   // used with transparency
  textMuted:    "C7D6F5",
  ink:          "0B1535",
};

const F = { head: "Sora", body: "Inter", mono: "JetBrains Mono" };

// canvas
const W = 11.25;
const H = 14.0625;
const M = 0.667;          // 64 px margin

// ─────────────────────────────────────────────
// Reusable elements
// ─────────────────────────────────────────────
function bgGradient(slide) {
  // base solid deep blue (Canva can swap to true gradient afterward)
  slide.background = { color: C.primaryDeep };
  // top-left lighter overlay (suggests gradient)
  slide.addShape("rect", {
    x: 0, y: 0, w: W, h: H * 0.55,
    fill: { color: C.primaryMid, transparency: 30 },
    line: { type: "none" },
  });
  // top-right cyan glow
  slide.addShape("ellipse", {
    x: W - 5, y: -3, w: 8, h: 8,
    fill: { color: C.accentCyan, transparency: 88 },
    line: { type: "none" },
  });
  // bottom-left primary glow
  slide.addShape("ellipse", {
    x: -3, y: H - 4, w: 8, h: 8,
    fill: { color: C.primaryMid, transparency: 70 },
    line: { type: "none" },
  });
}

function topBar(slide, num) {
  // logo mark — shield-style triangle as a placeholder
  slide.addShape("rightTriangle", {
    x: M, y: 0.62, w: 0.22, h: 0.22,
    fill: { color: C.accentCyan, transparency: 80 },
    line: { color: C.accentCyan, width: 1 },
  });
  slide.addText("NormSafety", {
    x: M + 0.32, y: 0.55, w: 3, h: 0.35,
    fontFace: F.body, fontSize: 11, color: C.white, bold: true,
    charSpacing: 6,
  });
  slide.addText(`${num} / 06`, {
    x: W - M - 1.2, y: 0.55, w: 1.2, h: 0.35,
    fontFace: F.mono, fontSize: 10, color: C.white, align: "right",
    transparency: 50, charSpacing: 4,
  });
}

function eyebrow(slide, text, x, y, w = 4, align = "left") {
  // small cyan dash
  if (align === "left") {
    slide.addShape("rect", {
      x, y: y + 0.13, w: 0.25, h: 0.02,
      fill: { color: C.accentCyan }, line: { type: "none" },
    });
    slide.addText(text.toUpperCase(), {
      x: x + 0.35, y, w, h: 0.3,
      fontFace: F.body, fontSize: 11, color: C.accentCyan, bold: true,
      charSpacing: 8, align: "left",
    });
  } else {
    // centered
    slide.addText(text.toUpperCase(), {
      x, y, w, h: 0.3,
      fontFace: F.body, fontSize: 11, color: C.accentCyan, bold: true,
      charSpacing: 8, align: "center",
    });
  }
}

function divider(slide, x, y, w = 0.5, color = C.accentCyan) {
  slide.addShape("rect", {
    x, y, w, h: 0.04,
    fill: { color }, line: { type: "none" },
  });
}

function nextArrow(slide) {
  slide.addShape("ellipse", {
    x: W - M - 0.55, y: H - M - 0.55, w: 0.5, h: 0.5,
    fill: { color: C.white, transparency: 95 },
    line: { color: C.white, width: 0.75, transparency: 75 },
  });
  slide.addText("→", {
    x: W - M - 0.55, y: H - M - 0.65, w: 0.5, h: 0.6,
    fontFace: F.body, fontSize: 18, color: C.accentCyan, align: "center",
  });
}

function glassCard(slide, x, y, w, h, opts = {}) {
  slide.addShape("roundRect", {
    x, y, w, h,
    rectRadius: opts.radius || 0.22,
    fill: { color: C.glassFill, transparency: 92 },
    line: { color: C.white, width: 0.75, transparency: 75 },
  });
}

// ─────────────────────────────────────────────
// SLIDE 1 — COVER
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  bgGradient(s);
  topBar(s, "01");

  // decorative node graph top-right
  const nodes = [
    [W - 2.4, 1.6], [W - 1.5, 2.1], [W - 0.9, 1.4], [W - 0.6, 2.5], [W - 1.9, 2.8]
  ];
  nodes.forEach(([nx, ny]) => {
    s.addShape("ellipse", {
      x: nx - 0.05, y: ny - 0.05, w: 0.1, h: 0.1,
      fill: { color: C.accentCyan }, line: { type: "none" },
    });
  });
  // connecting lines
  s.addShape("line", { x: nodes[0][0], y: nodes[0][1], w: nodes[1][0]-nodes[0][0], h: nodes[1][1]-nodes[0][1], line: { color: C.accentCyan, width: 0.5, transparency: 50 } });
  s.addShape("line", { x: nodes[1][0], y: nodes[1][1], w: nodes[2][0]-nodes[1][0], h: nodes[2][1]-nodes[1][1], line: { color: C.accentCyan, width: 0.5, transparency: 50 } });
  s.addShape("line", { x: nodes[1][0], y: nodes[1][1], w: nodes[3][0]-nodes[1][0], h: nodes[3][1]-nodes[1][1], line: { color: C.accentCyan, width: 0.5, transparency: 50 } });
  s.addShape("line", { x: nodes[0][0], y: nodes[0][1], w: nodes[4][0]-nodes[0][0], h: nodes[4][1]-nodes[0][1], line: { color: C.accentCyan, width: 0.5, transparency: 50 } });

  // content block
  let y = 2.8;
  eyebrow(s, "Plateforme SST", M, y);
  y += 0.6;

  s.addText([
    { text: "Et si votre SST\ndevenait un vrai\nlevier de ", options: { color: C.white } },
    { text: "performance", options: { color: C.accentCyan } },
    { text: " ?", options: { color: C.white } },
  ], {
    x: M, y, w: W - 2*M, h: 4.2,
    fontFace: F.head, fontSize: 56, bold: true,
    valign: "top",
  });

  y += 4.4;
  divider(s, M, y);
  y += 0.35;

  s.addText("NormSafety — Plateforme digitale intelligente\npour la santé et sécurité au travail.", {
    x: M, y, w: W - 2*M, h: 1.2,
    fontFace: F.body, fontSize: 16, color: C.accentSoft,
  });

  nextArrow(s);
}

// ─────────────────────────────────────────────
// SLIDE 2 — PROBLEM
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  bgGradient(s);
  topBar(s, "02");

  let y = 2.0;
  eyebrow(s, "Le constat", M, y);
  y += 0.55;

  s.addText([
    { text: "Une SST encore\ntrop ", options: { color: C.white } },
    { text: "fragmentée", options: { color: C.accentCyan } },
    { text: ".", options: { color: C.white } },
  ], {
    x: M, y, w: W - 2*M, h: 2.4,
    fontFace: F.head, fontSize: 44, bold: true,
  });

  y += 2.5;
  divider(s, M, y);

  // 2x2 grid of cards
  const cards = [
    { num: "01", label: "Données\ndispersées" },
    { num: "02", label: "Actions\nisolées" },
    { num: "03", label: "Manque de\nvisibilité" },
    { num: "04", label: "Décisions\ndifficiles" },
  ];

  const gridY = 7.3;
  const cardW = (W - 2*M - 0.25) / 2;
  const cardH = 2.4;
  const gap = 0.25;

  cards.forEach((c, i) => {
    const cx = M + (i % 2) * (cardW + gap);
    const cy = gridY + Math.floor(i / 2) * (cardH + gap);
    glassCard(s, cx, cy, cardW, cardH);
    // simple icon glyph (square for visual)
    s.addShape("roundRect", {
      x: cx + 0.35, y: cy + 0.35, w: 0.55, h: 0.55,
      rectRadius: 0.08,
      fill: { color: C.accentCyan, transparency: 80 },
      line: { color: C.accentCyan, width: 1 },
    });
    s.addText(c.num, {
      x: cx + cardW - 0.85, y: cy + 0.35, w: 0.5, h: 0.3,
      fontFace: F.mono, fontSize: 10, color: C.white, transparency: 50, align: "right",
      charSpacing: 4,
    });
    s.addText(c.label, {
      x: cx + 0.35, y: cy + cardH - 1.1, w: cardW - 0.7, h: 0.95,
      fontFace: F.head, fontSize: 22, color: C.white, bold: true, valign: "bottom",
    });
  });

  nextArrow(s);
}

// ─────────────────────────────────────────────
// SLIDE 3 — SOLUTION
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  bgGradient(s);
  topBar(s, "03");

  // LEFT column
  let y = 2.4;
  eyebrow(s, "La réponse", M, y);
  y += 0.55;

  s.addText([
    { text: "Une approche\n", options: { color: C.white } },
    { text: "centralisée\n", options: { color: C.accentCyan } },
    { text: "et intelligente.", options: { color: C.white } },
  ], {
    x: M, y, w: 4.5, h: 3.2,
    fontFace: F.head, fontSize: 38, bold: true,
  });
  y += 3.4;
  divider(s, M, y);
  y += 0.4;
  s.addText("NormSafety transforme vos données en outils de pilotage exploitables — décisions rapides, conformité maîtrisée.", {
    x: M, y, w: 4.5, h: 2.5,
    fontFace: F.body, fontSize: 16, color: C.accentSoft,
  });

  // RIGHT column — dashboard mock card
  const dx = W - M - 5.4;
  const dy = 2.4;
  const dw = 5.4;
  const dh = 8.5;
  glassCard(s, dx, dy, dw, dh, { radius: 0.28 });

  // dashboard header
  s.addText("Dashboard SST", {
    x: dx + 0.35, y: dy + 0.3, w: 3, h: 0.3,
    fontFace: F.body, fontSize: 9, color: C.white, transparency: 40, charSpacing: 6, bold: true,
  });
  // dots
  ["00", "01", "02"].forEach((_, i) => {
    s.addShape("ellipse", {
      x: dx + dw - 0.85 + i*0.15, y: dy + 0.42, w: 0.08, h: 0.08,
      fill: { color: C.white, transparency: 70 }, line: { type: "none" },
    });
  });

  // KPI block
  const k1y = dy + 0.85;
  s.addShape("roundRect", {
    x: dx + 0.35, y: k1y, w: dw - 0.7, h: 1.85,
    rectRadius: 0.15,
    fill: { color: C.white, transparency: 95 },
    line: { color: C.white, width: 0.5, transparency: 85 },
  });
  s.addText("CONFORMITÉ GLOBALE", {
    x: dx + 0.55, y: k1y + 0.2, w: 4, h: 0.25,
    fontFace: F.body, fontSize: 9, color: C.white, transparency: 40, bold: true, charSpacing: 6,
  });
  s.addText([
    { text: "94", options: { color: C.white, fontSize: 56 } },
    { text: "%", options: { color: C.accentCyan, fontSize: 28 } },
  ], {
    x: dx + 0.55, y: k1y + 0.5, w: 4, h: 1.0,
    fontFace: F.head, bold: true,
  });
  s.addText("↗  +12 % vs trimestre précédent", {
    x: dx + 0.55, y: k1y + 1.45, w: 4, h: 0.3,
    fontFace: F.body, fontSize: 11, color: C.accentCyan,
  });

  // bar chart block
  const k2y = k1y + 2.1;
  s.addShape("roundRect", {
    x: dx + 0.35, y: k2y, w: dw - 0.7, h: 2.0,
    rectRadius: 0.15,
    fill: { color: C.white, transparency: 95 },
    line: { color: C.white, width: 0.5, transparency: 85 },
  });
  s.addText("INCIDENTS PAR SITE", {
    x: dx + 0.55, y: k2y + 0.2, w: 4, h: 0.25,
    fontFace: F.body, fontSize: 9, color: C.white, transparency: 40, bold: true, charSpacing: 6,
  });
  // 6 bars
  const heights = [0.5, 0.85, 1.25, 0.7, 0.4, 0.6];
  const barW = 0.35;
  const barGap = 0.18;
  const barTotal = heights.length * barW + (heights.length-1) * barGap;
  const barStartX = dx + (dw - barTotal) / 2;
  const barBaseY = k2y + 1.85;
  heights.forEach((bh, i) => {
    const bx = barStartX + i * (barW + barGap);
    const isActive = i === 2;
    s.addShape("rect", {
      x: bx, y: barBaseY - bh, w: barW, h: bh,
      fill: { color: isActive ? C.accentCyan : C.accentSoft, transparency: isActive ? 0 : 60 },
      line: { type: "none" },
    });
  });

  // line chart block
  const k3y = k2y + 2.25;
  s.addShape("roundRect", {
    x: dx + 0.35, y: k3y, w: dw - 0.7, h: 1.5,
    rectRadius: 0.15,
    fill: { color: C.white, transparency: 95 },
    line: { color: C.white, width: 0.5, transparency: 85 },
  });
  // sparkline as connected lines
  const points = [
    [0.0, 0.9], [0.6, 0.7], [1.2, 0.8], [1.8, 0.45], [2.4, 0.55], [3.0, 0.3], [3.6, 0.45], [4.2, 0.2],
  ];
  for (let i = 0; i < points.length - 1; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[i + 1];
    s.addShape("line", {
      x: dx + 0.5 + x1, y: k3y + 0.35 + y1,
      w: x2 - x1, h: y2 - y1,
      line: { color: C.accentCyan, width: 1.5 },
    });
  }

  nextArrow(s);
}

// ─────────────────────────────────────────────
// SLIDE 4 — TARGET
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  bgGradient(s);
  topBar(s, "04");

  // centered head
  let y = 3.0;
  eyebrow(s, "Pour qui", M, y, W - 2*M, "center");
  y += 0.55;
  s.addText([
    { text: "Pensé pour les\n", options: { color: C.white } },
    { text: "acteurs clés", options: { color: C.accentCyan } },
    { text: ".", options: { color: C.white } },
  ], {
    x: M, y, w: W - 2*M, h: 2.4,
    fontFace: F.head, fontSize: 48, bold: true, align: "center",
  });
  y += 2.5;
  // centered divider
  s.addShape("rect", {
    x: W/2 - 0.25, y, w: 0.5, h: 0.04,
    fill: { color: C.accentCyan }, line: { type: "none" },
  });

  // 3 cards horizontal
  const cardsT = [
    { glyph: "✚", label: "Médecins\ndu travail", sub: "Suivi médical" },
    { glyph: "◈", label: "QHSE\n/ HSE",        sub: "Conformité & risques" },
    { glyph: "◉", label: "Ressources\nHumaines", sub: "Pilotage & reporting" },
  ];
  const tcW = (W - 2*M - 0.5) / 3;
  const tcH = 4.2;
  const tcY = 7.6;
  cardsT.forEach((c, i) => {
    const cx = M + i * (tcW + 0.25);
    glassCard(s, cx, tcY, tcW, tcH, { radius: 0.25 });
    // icon ring
    s.addShape("ellipse", {
      x: cx + tcW/2 - 0.65, y: tcY + 0.5, w: 1.3, h: 1.3,
      fill: { color: C.accentCyan, transparency: 88 },
      line: { color: C.accentCyan, width: 1, transparency: 50 },
    });
    s.addText(c.glyph, {
      x: cx + tcW/2 - 0.65, y: tcY + 0.6, w: 1.3, h: 1.1,
      fontFace: F.head, fontSize: 36, color: C.accentCyan, align: "center", valign: "middle", bold: true,
    });
    // label
    s.addText(c.label, {
      x: cx + 0.3, y: tcY + 2.1, w: tcW - 0.6, h: 1.2,
      fontFace: F.head, fontSize: 22, color: C.white, bold: true, align: "center",
    });
    // sub
    s.addText(c.sub, {
      x: cx + 0.3, y: tcY + 3.4, w: tcW - 0.6, h: 0.4,
      fontFace: F.body, fontSize: 11, color: C.white, transparency: 40, align: "center",
    });
  });

  nextArrow(s);
}

// ─────────────────────────────────────────────
// SLIDE 5 — VALUE
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  bgGradient(s);
  topBar(s, "05");

  // head centered
  let y = 2.2;
  eyebrow(s, "Notre valeur", M, y, W - 2*M, "center");
  y += 0.55;
  s.addText([
    { text: "Bien plus\nqu'un ", options: { color: C.white } },
    { text: "outil", options: { color: C.accentCyan } },
    { text: ".", options: { color: C.white } },
  ], {
    x: M, y, w: W - 2*M, h: 2.4,
    fontFace: F.head, fontSize: 48, bold: true, align: "center",
  });
  y += 2.5;
  s.addShape("rect", {
    x: W/2 - 0.25, y, w: 0.5, h: 0.04,
    fill: { color: C.accentCyan }, line: { type: "none" },
  });

  // 4 pillars in 2x2 around a center
  const pillars = [
    { num: "01", label: "Prévention" },
    { num: "02", label: "Conformité" },
    { num: "03", label: "Performance" },
    { num: "04", label: "Décision" },
  ];
  const cD = 2.5;       // pillar diameter
  const sysCX = W / 2;
  const sysCY = 9.5;
  const offX = 2.1;
  const offY = 2.1;
  const positions = [
    [sysCX - offX, sysCY - offY], // tl 01
    [sysCX + offX, sysCY - offY], // tr 02
    [sysCX + offX, sysCY + offY], // br 03
    [sysCX - offX, sysCY + offY], // bl 04
  ];

  // dashed connectors (use small line segments)
  positions.forEach(([px, py]) => {
    const dx = sysCX - px;
    const dy = sysCY - py;
    const segs = 8;
    for (let i = 0; i < segs; i += 2) {
      const t1 = i / segs;
      const t2 = (i + 1) / segs;
      s.addShape("line", {
        x: px + dx * t1 - cD/2 * 0 + (cD/2) * dx / Math.hypot(dx, dy) ,
        y: py + dy * t1,
        w: dx * (t2 - t1), h: dy * (t2 - t1),
        line: { color: C.accentCyan, width: 0.5, transparency: 60 },
      });
    }
  });

  positions.forEach(([px, py], i) => {
    const cx = px - cD/2;
    const cy = py - cD/2;
    s.addShape("ellipse", {
      x: cx, y: cy, w: cD, h: cD,
      fill: { color: C.white, transparency: 94 },
      line: { color: C.accentCyan, width: 1, transparency: 50 },
    });
    s.addText(pillars[i].num, {
      x: cx + 0.3, y: cy + 0.5, w: cD - 0.6, h: 0.3,
      fontFace: F.mono, fontSize: 10, color: C.accentCyan, charSpacing: 6, align: "center",
    });
    s.addText(pillars[i].label, {
      x: cx, y: cy + cD/2 - 0.3, w: cD, h: 0.6,
      fontFace: F.head, fontSize: 20, color: C.white, bold: true, align: "center",
    });
  });

  // center node
  s.addShape("ellipse", {
    x: sysCX - 0.55, y: sysCY - 0.55, w: 1.1, h: 1.1,
    fill: { color: C.accentCyan, transparency: 75 },
    line: { color: C.accentCyan, width: 1.5, transparency: 30 },
  });
  s.addShape("rightTriangle", {
    x: sysCX - 0.18, y: sysCY - 0.22, w: 0.36, h: 0.36,
    fill: { color: C.white }, line: { color: C.white, width: 1 },
  });

  nextArrow(s);
}

// ─────────────────────────────────────────────
// SLIDE 6 — CTA / WEBINAR
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  bgGradient(s);
  topBar(s, "06");

  let y = 2.2;
  eyebrow(s, "Événement exclusif", M, y);
  y += 0.55;

  s.addText([
    { text: "Découvrez NormSafety\nen ", options: { color: C.white } },
    { text: "action", options: { color: C.accentCyan } },
    { text: ".", options: { color: C.white } },
  ], {
    x: M, y, w: W - 2*M, h: 2.4,
    fontFace: F.head, fontSize: 48, bold: true,
  });
  y += 2.5;
  divider(s, M, y);

  // glass CTA card
  const cy = 5.6;
  const cw = W - 2*M;
  const ch = 5.4;
  glassCard(s, M, cy, cw, ch, { radius: 0.3 });

  // calendar icon + date
  s.addShape("roundRect", {
    x: M + 0.5, y: cy + 0.7, w: 0.45, h: 0.45,
    rectRadius: 0.06,
    fill: { color: C.accentCyan, transparency: 75 },
    line: { color: C.accentCyan, width: 1 },
  });
  s.addText("📅", {
    x: M + 0.5, y: cy + 0.6, w: 0.45, h: 0.55,
    fontSize: 18, align: "center",
  });
  s.addText("01 mai 2026 — 18h00", {
    x: M + 1.15, y: cy + 0.65, w: cw - 1.5, h: 0.55,
    fontFace: F.head, fontSize: 22, color: C.white, bold: true, valign: "middle",
  });

  // target icon + format
  s.addShape("ellipse", {
    x: M + 0.5, y: cy + 1.45, w: 0.45, h: 0.45,
    fill: { color: C.accentCyan, transparency: 75 },
    line: { color: C.accentCyan, width: 1 },
  });
  s.addText("🎯", {
    x: M + 0.5, y: cy + 1.35, w: 0.45, h: 0.55,
    fontSize: 18, align: "center",
  });
  s.addText("Webinaire gratuit", {
    x: M + 1.15, y: cy + 1.4, w: cw - 1.5, h: 0.55,
    fontFace: F.head, fontSize: 22, color: C.white, bold: true, valign: "middle",
  });

  // CTA button
  s.addShape("roundRect", {
    x: M + 0.5, y: cy + 3.2, w: 4.6, h: 0.85,
    rectRadius: 0.15,
    fill: { color: C.accentCyan },
    line: { type: "none" },
  });
  s.addText("Inscrivez-vous maintenant  →", {
    x: M + 0.5, y: cy + 3.2, w: 4.6, h: 0.85,
    fontFace: F.body, fontSize: 16, color: C.primaryDeep, bold: true,
    align: "center", valign: "middle",
  });

  // QR placeholder
  const qrSize = 1.3;
  const qrX = M + cw - qrSize - 0.5;
  const qrY = cy + ch - qrSize - 0.5;
  s.addShape("roundRect", {
    x: qrX, y: qrY, w: qrSize, h: qrSize,
    rectRadius: 0.08,
    fill: { color: C.white }, line: { type: "none" },
  });
  s.addText("QR", {
    x: qrX, y: qrY, w: qrSize, h: qrSize,
    fontFace: F.mono, fontSize: 14, color: C.primaryDeep,
    align: "center", valign: "middle", bold: true,
  });

  // footer
  divider(s, M, H - 1.7);
  s.addText("www.normsafety.com   ·   contact@normsafety.com   ·   +216 54 525 267", {
    x: M, y: H - 1.4, w: W - 2*M, h: 0.4,
    fontFace: F.body, fontSize: 12, color: C.accentSoft,
  });
}

// ── write file ──
await pres.writeFile({ fileName: "NormSafety_LinkedIn_Carousel.pptx" });
console.log("✅  NormSafety_LinkedIn_Carousel.pptx generated.");

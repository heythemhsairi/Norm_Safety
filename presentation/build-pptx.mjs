// NormSafety — pitch deck generator (FR)
// Output: NormSafety_Presentation.pptx — upload to Canva to edit.

import PptxGenJS from "pptxgenjs";

const pres = new PptxGenJS();
pres.layout = "LAYOUT_WIDE";          // 13.333 x 7.5 inches (16:9)
pres.title = "NormSafety — Présentation client";
pres.company = "NormSafety";
pres.subject = "Plateforme Santé & Sécurité au Travail";
pres.author = "NormSafety";

// ---------- Brand tokens ----------
const C = {
  midnight: "0B1535",
  midnight2: "142043",
  teal: "14B8A6",
  tealDark: "0D9488",
  tealLight: "E6FBF8",
  lime: "B8FF2C",
  limeSoft: "F1FFCE",
  compliance: "1D4ED8",
  complianceLight: "EAF0FE",
  slate: "64748B",
  mint: "34D399",
  amber: "F59E0B",
  coral: "EF4444",
  fog: "F8FAFC",
  bgAlt: "F1F5F9",
  ink: "111827",
  white: "FFFFFF",
  border: "E2E8F0",
  borderStrong: "CBD5E1",
};

const FONT = "Sora";
const FONT_FALLBACK = "Inter";

const W = 13.333;
const H = 7.5;

// ---------- Helpers ----------
function bg(slide, color = C.fog) {
  slide.background = { color };
}

// Standard top header (title bar) for content slides
function header(slide, eyebrow, title) {
  // top-left brand mark
  slide.addShape("rect", {
    x: 0.5, y: 0.45, w: 0.18, h: 0.18, fill: { color: C.teal }, line: { color: C.teal },
  });
  slide.addText("NormSafety", {
    x: 0.75, y: 0.38, w: 3.0, h: 0.32,
    fontFace: FONT, fontSize: 12, color: C.midnight, bold: true,
  });
  // eyebrow
  if (eyebrow) {
    slide.addText(eyebrow.toUpperCase(), {
      x: 0.5, y: 0.95, w: 12.3, h: 0.32,
      fontFace: FONT, fontSize: 11, color: C.teal, bold: true, charSpacing: 6,
    });
  }
  // title
  slide.addText(title, {
    x: 0.5, y: 1.25, w: 12.3, h: 0.85,
    fontFace: FONT, fontSize: 32, color: C.midnight, bold: true,
  });
  // accent underline
  slide.addShape("rect", {
    x: 0.5, y: 2.05, w: 0.6, h: 0.08, fill: { color: C.teal }, line: { color: C.teal },
  });
}

function footer(slide, num, total = 14) {
  slide.addShape("line", {
    x: 0.5, y: 7.05, w: 12.3, h: 0,
    line: { color: C.border, width: 0.75 },
  });
  slide.addText("normsafety.com", {
    x: 0.5, y: 7.12, w: 4, h: 0.3,
    fontFace: FONT, fontSize: 9, color: C.slate,
  });
  slide.addText(`${num} / ${total}`, {
    x: 8.83, y: 7.12, w: 4, h: 0.3,
    fontFace: FONT, fontSize: 9, color: C.slate, align: "right",
  });
}

function card(slide, x, y, w, h, opts = {}) {
  slide.addShape("roundRect", {
    x, y, w, h,
    rectRadius: opts.radius ?? 0.12,
    fill: { color: opts.fill ?? C.white },
    line: { color: opts.border ?? C.border, width: opts.borderWidth ?? 0.75 },
  });
}

// ===================================================================
// Slide 1 — Hero
// ===================================================================
{
  const s = pres.addSlide();
  bg(s, C.midnight);

  // Decorative gradient panel (right) — using a teal block
  s.addShape("rect", {
    x: 8.0, y: 0, w: 5.333, h: 7.5,
    fill: { color: C.midnight2 }, line: { color: C.midnight2 },
  });
  // Lime accent corner
  s.addShape("rect", {
    x: 12.6, y: 0, w: 0.733, h: 1.4,
    fill: { color: C.lime }, line: { color: C.lime },
  });
  // Teal accent bar
  s.addShape("rect", {
    x: 0.5, y: 1.6, w: 0.6, h: 0.08,
    fill: { color: C.teal }, line: { color: C.teal },
  });

  // Brand mark top-left
  s.addShape("rect", {
    x: 0.5, y: 0.5, w: 0.22, h: 0.22, fill: { color: C.teal }, line: { color: C.teal },
  });
  s.addText("NormSafety", {
    x: 0.8, y: 0.43, w: 4, h: 0.36,
    fontFace: FONT, fontSize: 14, color: C.white, bold: true,
  });

  // Eyebrow
  s.addText("PLATEFORME SST — SANTÉ & SÉCURITÉ AU TRAVAIL", {
    x: 0.5, y: 1.85, w: 12, h: 0.4,
    fontFace: FONT, fontSize: 12, color: C.teal, bold: true, charSpacing: 8,
  });

  // Big title
  s.addText("NormSafety", {
    x: 0.5, y: 2.3, w: 12, h: 1.3,
    fontFace: FONT, fontSize: 84, color: C.white, bold: true,
  });

  // Subtitle
  s.addText("Digitaliser, prévenir et sécuriser la SST", {
    x: 0.5, y: 3.7, w: 12, h: 0.7,
    fontFace: FONT, fontSize: 32, color: C.white, bold: false,
  });

  // Body
  s.addText(
    "Plateforme digitale intelligente dédiée à la gestion de la Santé et Sécurité au Travail en entreprise.",
    {
      x: 0.5, y: 4.55, w: 11, h: 0.8,
      fontFace: FONT, fontSize: 16, color: "C7D2E8",
    }
  );

  // Signature box (lime accent line + italic line)
  s.addShape("rect", {
    x: 0.5, y: 5.7, w: 0.06, h: 0.55,
    fill: { color: C.lime }, line: { color: C.lime },
  });
  s.addText("« Parce que la santé des travailleurs fait la santé des entreprises. »", {
    x: 0.75, y: 5.65, w: 11.5, h: 0.65,
    fontFace: FONT, fontSize: 16, color: C.lime, italic: true, bold: true,
  });

  // Footer
  s.addText("normsafety.com  ·  contact@normsafety.com", {
    x: 0.5, y: 7.0, w: 8, h: 0.3,
    fontFace: FONT, fontSize: 10, color: "94A3B8",
  });
  s.addText("01 / 14", {
    x: 8.83, y: 7.0, w: 4, h: 0.3,
    fontFace: FONT, fontSize: 10, color: "94A3B8", align: "right",
  });
}

// ===================================================================
// Slide 2 — Pourquoi la SST doit changer maintenant
// ===================================================================
{
  const s = pres.addSlide();
  bg(s);
  header(s, "Le constat", "Pourquoi la SST doit changer maintenant");

  const blocks = [
    {
      icon: "■",
      title: "Données SST dispersées",
      body: "Informations éclatées entre fichiers, services et formats — aucune vue consolidée.",
      color: C.teal,
    },
    {
      icon: "■",
      title: "Suivi manuel et fragmenté",
      body: "Tableurs, papier, double saisie : risques d'erreurs et perte de traçabilité.",
      color: C.compliance,
    },
    {
      icon: "■",
      title: "Exigences réglementaires croissantes",
      body: "Pression normative et obligations légales toujours plus complexes à piloter.",
      color: C.amber,
    },
    {
      icon: "■",
      title: "Enjeu sanitaire, opérationnel et financier",
      body: "Impact direct sur la santé des collaborateurs, la performance et les coûts.",
      color: C.coral,
    },
  ];

  const startX = 0.5;
  const startY = 2.5;
  const cardW = 6.05;
  const cardH = 2.05;
  const gap = 0.2;

  blocks.forEach((b, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + gap);
    const y = startY + row * (cardH + gap);
    card(s, x, y, cardW, cardH);
    // accent strip
    s.addShape("rect", {
      x, y, w: 0.18, h: cardH,
      fill: { color: b.color }, line: { color: b.color },
    });
    s.addText(b.title, {
      x: x + 0.4, y: y + 0.25, w: cardW - 0.6, h: 0.5,
      fontFace: FONT, fontSize: 18, color: C.midnight, bold: true,
    });
    s.addText(b.body, {
      x: x + 0.4, y: y + 0.85, w: cardW - 0.6, h: 1.0,
      fontFace: FONT, fontSize: 13, color: C.slate,
    });
  });

  footer(s, 2);
}

// ===================================================================
// Slide 3 — Les conséquences pour l'entreprise
// ===================================================================
{
  const s = pres.addSlide();
  bg(s);
  header(s, "Impact business", "Les conséquences pour l'entreprise");

  // Left column — causes → impacts
  s.addText("Causes  →  Impacts", {
    x: 0.5, y: 2.5, w: 6, h: 0.4,
    fontFace: FONT, fontSize: 13, color: C.teal, bold: true, charSpacing: 4,
  });

  const impacts = [
    "Approche SST non conforme",
    "Performance en baisse",
    "Turnover en hausse",
    "Coûts en hausse",
    "Image négative employeurs / employés",
  ];
  impacts.forEach((t, i) => {
    const y = 2.95 + i * 0.6;
    s.addShape("rect", {
      x: 0.5, y: y + 0.18, w: 0.12, h: 0.12,
      fill: { color: C.coral }, line: { color: C.coral },
    });
    s.addText(t, {
      x: 0.8, y, w: 5.5, h: 0.5,
      fontFace: FONT, fontSize: 15, color: C.ink,
    });
  });

  // Right column — Tunisia stats panel
  card(s, 7.0, 2.5, 5.83, 4.0, { fill: C.midnight, border: C.midnight });

  s.addText("LA SST EN TUNISIE — CHIFFRES CLÉS", {
    x: 7.3, y: 2.7, w: 5.4, h: 0.35,
    fontFace: FONT, fontSize: 11, color: C.teal, bold: true, charSpacing: 6,
  });

  // Lead stat
  s.addText("1,8 Mrd TND", {
    x: 7.3, y: 3.05, w: 5.4, h: 0.95,
    fontFace: FONT, fontSize: 48, color: C.lime, bold: true,
  });
  s.addText("de coûts annuels liés aux accidents et maladies professionnelles.", {
    x: 7.3, y: 3.95, w: 5.3, h: 0.6,
    fontFace: FONT, fontSize: 12, color: "C7D2E8",
  });

  // Divider
  s.addShape("line", {
    x: 7.3, y: 4.65, w: 5.3, h: 0,
    line: { color: "1F2A4F", width: 0.75 },
  });

  const stats = [
    ["+30 000", "accidents / an"],
    ["720 – 840K", "jours d'arrêt / an"],
    ["+25 000", "travailleurs malades pro."],
  ];
  stats.forEach(([num, label], i) => {
    const x = 7.3 + i * 1.78;
    s.addText(num, {
      x, y: 4.85, w: 1.7, h: 0.5,
      fontFace: FONT, fontSize: 18, color: C.white, bold: true,
    });
    s.addText(label, {
      x, y: 5.35, w: 1.7, h: 0.6,
      fontFace: FONT, fontSize: 10, color: "94A3B8",
    });
  });

  footer(s, 3);
}

// ===================================================================
// Slide 4 — La réponse NormSafety
// ===================================================================
{
  const s = pres.addSlide();
  bg(s);
  header(s, "La solution", "La réponse NormSafety");

  s.addText(
    "NormSafety unifie la donnée SST en une plateforme unique pour suivre la santé au travail, piloter la conformité et orchestrer les plans d'actions.",
    {
      x: 0.5, y: 2.5, w: 7.0, h: 1.2,
      fontFace: FONT, fontSize: 16, color: C.ink,
    }
  );

  // 4 benefits — 2x2 grid in left area
  const benefits = [
    "Structurer les données SST",
    "Suivre santé & expositions",
    "Piloter la conformité",
    "Gérer les plans CAPA",
  ];
  benefits.forEach((b, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 3.55;
    const y = 4.0 + row * 0.85;
    card(s, x, y, 3.4, 0.7, { fill: C.tealLight, border: C.teal, borderWidth: 1 });
    s.addText(b, {
      x: x + 0.25, y: y + 0.05, w: 3.1, h: 0.6,
      fontFace: FONT, fontSize: 12, color: C.midnight, bold: true,
      valign: "middle",
    });
  });

  // Right column — Utilisateurs clés
  card(s, 8.5, 2.5, 4.33, 4.0, { fill: C.midnight, border: C.midnight });
  s.addText("UTILISATEURS CLÉS", {
    x: 8.75, y: 2.75, w: 3.83, h: 0.35,
    fontFace: FONT, fontSize: 11, color: C.lime, bold: true, charSpacing: 6,
  });

  const users = [
    ["Médecin du travail", "Suivi médical & expositions"],
    ["Ingénieur QHSE", "Conformité, audits & CAPA"],
    ["Ressources Humaines", "Pilotage & indicateurs RH-SST"],
  ];
  users.forEach(([role, sub], i) => {
    const y = 3.3 + i * 1.05;
    s.addShape("rect", {
      x: 8.75, y: y + 0.05, w: 0.06, h: 0.7,
      fill: { color: C.teal }, line: { color: C.teal },
    });
    s.addText(role, {
      x: 8.95, y, w: 3.6, h: 0.4,
      fontFace: FONT, fontSize: 14, color: C.white, bold: true,
    });
    s.addText(sub, {
      x: 8.95, y: y + 0.4, w: 3.6, h: 0.4,
      fontFace: FONT, fontSize: 10, color: "94A3B8",
    });
  });

  footer(s, 4);
}

// ===================================================================
// Slide 5 — Plateforme modulaire
// ===================================================================
{
  const s = pres.addSlide();
  bg(s);
  header(s, "Architecture produit", "Une plateforme modulaire, pensée pour le terrain");

  // Top transverse layer
  card(s, 0.5, 2.45, 12.3, 0.85, { fill: C.midnight, border: C.midnight });
  s.addText("360° BOARD  +  SAFETYBOT — couche transverse de pilotage & d'assistance IA", {
    x: 0.7, y: 2.45, w: 12, h: 0.85,
    fontFace: FONT, fontSize: 14, color: C.lime, bold: true,
    valign: "middle",
  });

  // 3 module cards
  const modules = [
    {
      tag: "MODULE 1",
      title: "Healthmeter",
      body: "Dossiers médicaux et suivi des expositions professionnelles.",
      color: C.mint,
    },
    {
      tag: "MODULE 2",
      title: "Conformity Room",
      body: "Conformité légale & normative, gestion des audits.",
      color: C.compliance,
    },
    {
      tag: "MODULE 3",
      title: "CAPA Room",
      body: "Plans d'actions correctives & préventives, workflow digital.",
      color: C.amber,
    },
  ];
  const mW = 4.0;
  const mGap = 0.15;
  const mStartX = 0.5;
  modules.forEach((m, i) => {
    const x = mStartX + i * (mW + mGap);
    const y = 3.55;
    card(s, x, y, mW, 3.0);
    // top color band
    s.addShape("roundRect", {
      x, y, w: mW, h: 0.45, rectRadius: 0.12,
      fill: { color: m.color }, line: { color: m.color },
    });
    // square covers bottom-half rounded
    s.addShape("rect", {
      x, y: y + 0.2, w: mW, h: 0.25,
      fill: { color: m.color }, line: { color: m.color },
    });
    s.addText(m.tag, {
      x: x + 0.3, y: y + 0.05, w: mW - 0.4, h: 0.35,
      fontFace: FONT, fontSize: 10, color: C.white, bold: true, charSpacing: 6,
      valign: "middle",
    });
    s.addText(m.title, {
      x: x + 0.3, y: y + 0.7, w: mW - 0.4, h: 0.6,
      fontFace: FONT, fontSize: 22, color: C.midnight, bold: true,
    });
    s.addShape("rect", {
      x: x + 0.3, y: y + 1.3, w: 0.4, h: 0.04,
      fill: { color: C.teal }, line: { color: C.teal },
    });
    s.addText(m.body, {
      x: x + 0.3, y: y + 1.45, w: mW - 0.6, h: 1.4,
      fontFace: FONT, fontSize: 12, color: C.slate,
    });
  });

  footer(s, 5);
}

// ===================================================================
// Slide 6 — Bénéfices
// ===================================================================
{
  const s = pres.addSlide();
  bg(s);
  header(s, "Bénéfices client", "Ce que NormSafety apporte concrètement à l'entreprise");

  const cols = [
    {
      tag: "SANTÉ",
      title: "Mieux suivre",
      body: "Suivi clinique des collaborateurs et traçabilité des expositions sur la durée.",
      color: C.mint,
    },
    {
      tag: "CONFORMITÉ",
      title: "Démontrer",
      body: "Obligations légales, audits et traçabilité documentaire centralisés.",
      color: C.compliance,
    },
    {
      tag: "ACTION",
      title: "Agir vite",
      body: "Workflow CAPA digital — actions correctives & préventives mieux pilotées.",
      color: C.amber,
    },
    {
      tag: "PILOTAGE",
      title: "Décider",
      body: "Indicateurs temps réel et lecture multi-modules pour la direction.",
      color: C.teal,
    },
  ];

  const cW = 2.95;
  const cGap = 0.18;
  const cStartX = 0.5;
  cols.forEach((c, i) => {
    const x = cStartX + i * (cW + cGap);
    const y = 2.5;
    card(s, x, y, cW, 3.2);
    s.addShape("rect", {
      x, y, w: cW, h: 0.18,
      fill: { color: c.color }, line: { color: c.color },
    });
    s.addText(c.tag, {
      x: x + 0.25, y: y + 0.35, w: cW - 0.4, h: 0.35,
      fontFace: FONT, fontSize: 10, color: c.color, bold: true, charSpacing: 6,
    });
    s.addText(c.title, {
      x: x + 0.25, y: y + 0.75, w: cW - 0.4, h: 0.55,
      fontFace: FONT, fontSize: 22, color: C.midnight, bold: true,
    });
    s.addText(c.body, {
      x: x + 0.25, y: y + 1.45, w: cW - 0.5, h: 1.6,
      fontFace: FONT, fontSize: 12, color: C.slate,
    });
  });

  // Bottom strip — promesse B2B
  card(s, 0.5, 5.95, 12.3, 0.95, { fill: C.midnight, border: C.midnight });
  s.addText(
    "PROMESSE :  Performance opérationnelle  ·  Visibilité ISO / ESG / RSE  ·  Conformité réglementaire",
    {
      x: 0.5, y: 5.95, w: 12.3, h: 0.95,
      fontFace: FONT, fontSize: 13, color: C.lime, bold: true, charSpacing: 4,
      align: "center", valign: "middle",
    }
  );

  footer(s, 6);
}

// ===================================================================
// Slide 7 — Protection des données & IA responsable
// ===================================================================
{
  const s = pres.addSlide();
  bg(s);
  header(s, "Confiance & gouvernance", "Protection des données & IA responsable");

  const items = [
    ["Hébergement souverain", "Tunisie — data center DATAXION certifié / aligné ISO/IEC 27001."],
    ["Sauvegardes & PRA / PCA", "Plans de reprise et continuité d'activité intégrés."],
    ["Accès strictement médical", "Données de santé accessibles uniquement au médecin du travail."],
    ["Séparation des rôles", "QHSE & RH limités à des statuts et indicateurs agrégés."],
    ["IA responsable", "Entraînement sur données anonymisées, supervision médecins / experts QHSE."],
    ["Consentement & cadres SST", "Consentement éclairé des employés, appui sur référentiels internationaux."],
  ];

  // 2 columns x 3 rows
  const colW = 6.05;
  const rowH = 1.35;
  const gap = 0.2;
  items.forEach((it, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * (colW + gap);
    const y = 2.5 + row * (rowH + gap);
    card(s, x, y, colW, rowH);
    // teal dot
    s.addShape("ellipse", {
      x: x + 0.3, y: y + 0.4, w: 0.55, h: 0.55,
      fill: { color: C.tealLight }, line: { color: C.teal, width: 1 },
    });
    s.addShape("ellipse", {
      x: x + 0.45, y: y + 0.55, w: 0.25, h: 0.25,
      fill: { color: C.teal }, line: { color: C.teal },
    });
    s.addText(it[0], {
      x: x + 1.1, y: y + 0.2, w: colW - 1.2, h: 0.45,
      fontFace: FONT, fontSize: 15, color: C.midnight, bold: true,
    });
    s.addText(it[1], {
      x: x + 1.1, y: y + 0.65, w: colW - 1.3, h: 0.7,
      fontFace: FONT, fontSize: 11, color: C.slate,
    });
  });

  footer(s, 7);
}

// ===================================================================
// Slide 8 — Pourquoi NormSafety se démarque
// ===================================================================
{
  const s = pres.addSlide();
  bg(s);
  header(s, "Différenciation", "Pourquoi NormSafety se démarque");

  const diffs = [
    { n: "01", t: "Suivi santé & expositions", d: "Dossiers médicaux et historiques d'exposition unifiés." },
    { n: "02", t: "Gestion conformité & audits", d: "Obligations, preuves et audits centralisés." },
    { n: "03", t: "Workflow CAPA digital", d: "Actions correctives & préventives orchestrées de bout en bout." },
    { n: "04", t: "Assistants IA spécialisés", d: "Aide à la décision pour QHSE, médecine et RH." },
    { n: "05", t: "Écosystème unifié", d: "Tous les modules interconnectés — une seule donnée SST." },
  ];

  const cW = 2.4;
  const cGap = 0.07;
  const cStartX = 0.5;
  diffs.forEach((d, i) => {
    const x = cStartX + i * (cW + cGap);
    const y = 2.5;
    card(s, x, y, cW, 4.2);
    s.addText(d.n, {
      x: x + 0.25, y: y + 0.3, w: cW - 0.4, h: 0.7,
      fontFace: FONT, fontSize: 36, color: C.teal, bold: true,
    });
    s.addShape("rect", {
      x: x + 0.25, y: y + 1.1, w: 0.4, h: 0.04,
      fill: { color: C.lime }, line: { color: C.lime },
    });
    s.addText(d.t, {
      x: x + 0.25, y: y + 1.25, w: cW - 0.4, h: 1.0,
      fontFace: FONT, fontSize: 15, color: C.midnight, bold: true,
    });
    s.addText(d.d, {
      x: x + 0.25, y: y + 2.45, w: cW - 0.4, h: 1.6,
      fontFace: FONT, fontSize: 11, color: C.slate,
    });
  });

  footer(s, 8);
}

// ===================================================================
// Slide 9 — Packs
// ===================================================================
{
  const s = pres.addSlide();
  bg(s);
  header(s, "Offre commerciale", "Des packs adaptés à la maturité de l'entreprise");

  const packs = [
    {
      name: "Digitalizer",
      price: "4 000",
      tag: "ESSENTIEL",
      features: [
        "Conformity Room",
        "CAPA Room",
        "Healthmeter",
        "Assistants IA — basic",
      ],
      highlight: false,
    },
    {
      name: "Performer",
      price: "7 000",
      tag: "POPULAIRE",
      features: [
        "Tout le pack Digitalizer",
        "Assistants IA — Pro",
        "Risk Response-App",
        "ErgoLab",
      ],
      highlight: true,
    },
    {
      name: "Impacter",
      price: "10 000",
      tag: "AVANCÉ",
      features: [
        "Tout le pack Performer",
        "Impact Calculator",
        "IoT-Analysis",
        "ESG-Report",
      ],
      highlight: false,
    },
  ];

  const pW = 4.0;
  const pGap = 0.15;
  const pStartX = 0.5;
  packs.forEach((p, i) => {
    const x = pStartX + i * (pW + pGap);
    const y = 2.45;
    const h = 4.0;
    if (p.highlight) {
      card(s, x, y, pW, h, { fill: C.midnight, border: C.midnight });
    } else {
      card(s, x, y, pW, h);
    }
    const titleColor = p.highlight ? C.white : C.midnight;
    const subColor   = p.highlight ? "C7D2E8" : C.slate;
    const tagColor   = p.highlight ? C.lime : C.teal;

    // Tag
    s.addText(p.tag, {
      x: x + 0.3, y: y + 0.3, w: pW - 0.4, h: 0.3,
      fontFace: FONT, fontSize: 10, color: tagColor, bold: true, charSpacing: 6,
    });
    s.addText(p.name, {
      x: x + 0.3, y: y + 0.6, w: pW - 0.4, h: 0.7,
      fontFace: FONT, fontSize: 28, color: titleColor, bold: true,
    });
    // Price block
    s.addText(p.price, {
      x: x + 0.3, y: y + 1.3, w: 2.5, h: 0.7,
      fontFace: FONT, fontSize: 36, color: titleColor, bold: true,
    });
    s.addText("TND / an", {
      x: x + 0.3, y: y + 1.95, w: pW - 0.4, h: 0.3,
      fontFace: FONT, fontSize: 11, color: subColor,
    });

    // Divider
    s.addShape("line", {
      x: x + 0.3, y: y + 2.4, w: pW - 0.6, h: 0,
      line: { color: p.highlight ? "1F2A4F" : C.border, width: 0.75 },
    });

    p.features.forEach((f, j) => {
      const fy = y + 2.55 + j * 0.32;
      s.addShape("rect", {
        x: x + 0.3, y: fy + 0.12, w: 0.1, h: 0.1,
        fill: { color: tagColor }, line: { color: tagColor },
      });
      s.addText(f, {
        x: x + 0.5, y: fy, w: pW - 0.7, h: 0.32,
        fontFace: FONT, fontSize: 11, color: titleColor,
      });
    });
  });

  // Footnote
  s.addText(
    "Tarification ajustée selon la taille d'entreprise, le mode d'hébergement et les intégrations API / ERP.",
    {
      x: 0.5, y: 6.55, w: 12.3, h: 0.4,
      fontFace: FONT, fontSize: 10, color: C.slate, italic: true, align: "center",
    }
  );

  footer(s, 9);
}

// ===================================================================
// Slide 10 — Méthode de déploiement
// ===================================================================
{
  const s = pres.addSlide();
  bg(s);
  header(s, "Méthode", "Comment nous déployons NormSafety chez un client");

  const steps = [
    { n: "1", t: "Prédiagnostic terrain", d: "Cartographie SST, écarts et priorités." },
    { n: "2", t: "Cadrage du pilote", d: "Périmètre, objectifs, indicateurs de succès." },
    { n: "3", t: "Déploiement progressif", d: "Modules activés par paliers, formation des équipes." },
    { n: "4", t: "Évaluation & montée en charge", d: "Mesure des résultats, généralisation maîtrisée." },
  ];

  // Timeline line
  const lineY = 3.6;
  s.addShape("line", {
    x: 1.0, y: lineY, w: 11.3, h: 0,
    line: { color: C.borderStrong, width: 1.5 },
  });

  const cW = 2.85;
  const cGap = 0.15;
  steps.forEach((st, i) => {
    const x = 0.5 + i * (cW + cGap);
    // Big number circle
    s.addShape("ellipse", {
      x: x + (cW / 2) - 0.45, y: lineY - 0.45, w: 0.9, h: 0.9,
      fill: { color: i === 1 ? C.teal : C.midnight },
      line: { color: i === 1 ? C.teal : C.midnight },
    });
    s.addText(st.n, {
      x: x + (cW / 2) - 0.45, y: lineY - 0.45, w: 0.9, h: 0.9,
      fontFace: FONT, fontSize: 28, color: C.white, bold: true,
      align: "center", valign: "middle",
    });

    // Card below
    card(s, x, lineY + 0.85, cW, 1.85);
    s.addText(st.t, {
      x: x + 0.25, y: lineY + 1.0, w: cW - 0.4, h: 0.6,
      fontFace: FONT, fontSize: 16, color: C.midnight, bold: true,
    });
    s.addText(st.d, {
      x: x + 0.25, y: lineY + 1.6, w: cW - 0.4, h: 1.0,
      fontFace: FONT, fontSize: 11, color: C.slate,
    });
  });

  // Promise band
  card(s, 0.5, 6.0, 12.3, 0.9, { fill: C.tealLight, border: C.teal, borderWidth: 1 });
  s.addText(
    "Réduire le risque d'échec, accélérer l'appropriation et transformer une organisation terrain en organisation pilotée par la donnée.",
    {
      x: 0.5, y: 6.0, w: 12.3, h: 0.9,
      fontFace: FONT, fontSize: 12, color: C.tealDark, bold: true,
      align: "center", valign: "middle",
    }
  );

  footer(s, 10);
}

// ===================================================================
// Slide 11 — Phase pilote
// ===================================================================
{
  const s = pres.addSlide();
  bg(s);
  header(s, "Programme pilote", "Pourquoi rejoindre la phase pilote maintenant");

  // Left — valeur prouvée
  card(s, 0.5, 2.5, 6.05, 4.2);
  s.addText("CE QUE LE PILOTE PERMET DE PROUVER", {
    x: 0.75, y: 2.7, w: 5.55, h: 0.35,
    fontFace: FONT, fontSize: 11, color: C.teal, bold: true, charSpacing: 6,
  });
  const proves = [
    "Structurer des données SST aujourd'hui dispersées",
    "Améliorer la visibilité sur risques, expositions, obligations et actions prioritaires",
    "Tester l'adoption réelle par médecine du travail, QHSE, RH et management",
    "Valider un modèle réplicable à d'autres sites / filiales",
  ];
  proves.forEach((p, i) => {
    const y = 3.2 + i * 0.78;
    s.addShape("rect", {
      x: 0.85, y: y + 0.2, w: 0.12, h: 0.12,
      fill: { color: C.teal }, line: { color: C.teal },
    });
    s.addText(p, {
      x: 1.1, y, w: 5.3, h: 0.7,
      fontFace: FONT, fontSize: 12, color: C.ink,
    });
  });

  // Right — avantages clients pilotes
  card(s, 6.78, 2.5, 6.05, 4.2, { fill: C.midnight, border: C.midnight });
  s.addText("AVANTAGES CLIENTS PILOTES", {
    x: 7.03, y: 2.7, w: 5.55, h: 0.35,
    fontFace: FONT, fontSize: 11, color: C.lime, bold: true, charSpacing: 6,
  });
  const perks = [
    "Tarif préférentiel",
    "Accompagnement terrain renforcé",
    "Accès anticipé aux évolutions produit",
    "Co-construction des fonctionnalités",
    "Support prioritaire",
  ];
  perks.forEach((p, i) => {
    const y = 3.2 + i * 0.62;
    s.addShape("rect", {
      x: 7.13, y: y + 0.2, w: 0.12, h: 0.12,
      fill: { color: C.lime }, line: { color: C.lime },
    });
    s.addText(p, {
      x: 7.38, y, w: 5.3, h: 0.55,
      fontFace: FONT, fontSize: 13, color: C.white, bold: true,
    });
  });

  footer(s, 11);
}

// ===================================================================
// Slide 12 — Traction & dynamique
// ===================================================================
{
  const s = pres.addSlide();
  bg(s);
  header(s, "Traction", "Ils nous font déjà confiance / Notre dynamique");

  // Top KPIs
  const kpis = [
    ["22", "décideurs d'entreprises rencontrés"],
    ["5+", "événements & salons SST 2025–2026"],
    ["2", "labels & présélections internationales"],
  ];
  kpis.forEach(([n, l], i) => {
    const x = 0.5 + i * 4.15;
    card(s, x, 2.5, 3.95, 1.4, { fill: C.midnight, border: C.midnight });
    s.addText(n, {
      x: x + 0.3, y: 2.6, w: 1.5, h: 1.2,
      fontFace: FONT, fontSize: 38, color: C.lime, bold: true,
      valign: "middle",
    });
    s.addText(l, {
      x: x + 1.85, y: 2.6, w: 1.95, h: 1.2,
      fontFace: FONT, fontSize: 11, color: C.white,
      valign: "middle",
    });
  });

  // Events list
  s.addText("ÉCHANGES, ÉVÉNEMENTS ET DISTINCTIONS", {
    x: 0.5, y: 4.15, w: 12.3, h: 0.35,
    fontFace: FONT, fontSize: 11, color: C.teal, bold: true, charSpacing: 6,
  });

  const events = [
    "Échanges directs avec 22 décideurs d'entreprises",
    "Focus groups & démo live (QHSE & RH)",
    "Preventum — Tunisie",
    "Medintechs — France",
    "18es RDVs de Carthage de l'Assurance et de la Réassurance — FTUSA",
    "Présélection ODESS 2026 — Pierre Fabre — France",
    "Startupact Label 2026",
  ];
  // 2 columns
  events.forEach((e, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 6.15;
    const y = 4.55 + row * 0.45;
    s.addShape("rect", {
      x, y: y + 0.18, w: 0.12, h: 0.12,
      fill: { color: C.teal }, line: { color: C.teal },
    });
    s.addText(e, {
      x: x + 0.25, y, w: 5.85, h: 0.45,
      fontFace: FONT, fontSize: 12, color: C.ink,
    });
  });

  footer(s, 12);
}

// ===================================================================
// Slide 13 — Équipe
// ===================================================================
{
  const s = pres.addSlide();
  bg(s);
  header(s, "Équipe", "Une équipe pluridisciplinaire au service de la SST");

  // Core team — 2 cards top row
  const core = [
    { name: "Abderrahmen Abdelkabir", role: "CEO", tag: "DIRECTION" },
    { name: "Slaheddine Dardouri", role: "COO", tag: "OPÉRATIONS" },
  ];
  core.forEach((p, i) => {
    const x = 0.5 + i * 6.15;
    card(s, x, 2.5, 6.05, 1.5);
    s.addShape("ellipse", {
      x: x + 0.3, y: 2.7, w: 1.1, h: 1.1,
      fill: { color: C.midnight }, line: { color: C.midnight },
    });
    const initials = p.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
    s.addText(initials, {
      x: x + 0.3, y: 2.7, w: 1.1, h: 1.1,
      fontFace: FONT, fontSize: 22, color: C.lime, bold: true,
      align: "center", valign: "middle",
    });
    s.addText(p.tag, {
      x: x + 1.55, y: 2.7, w: 4.4, h: 0.3,
      fontFace: FONT, fontSize: 10, color: C.teal, bold: true, charSpacing: 6,
    });
    s.addText(p.name, {
      x: x + 1.55, y: 3.0, w: 4.4, h: 0.45,
      fontFace: FONT, fontSize: 17, color: C.midnight, bold: true,
    });
    s.addText(p.role, {
      x: x + 1.55, y: 3.45, w: 4.4, h: 0.4,
      fontFace: FONT, fontSize: 13, color: C.slate,
    });
  });

  // Advisory header
  s.addText("ADVISORY  ·  EXPERTS  ·  PARTENAIRES", {
    x: 0.5, y: 4.2, w: 12.3, h: 0.35,
    fontFace: FONT, fontSize: 11, color: C.teal, bold: true, charSpacing: 6,
  });

  const advisory = [
    { name: "Pr. Charfeddine Amri", role: "Médecine du travail" },
    { name: "Dr Hela Ben Ghenaia", role: "Santé au travail" },
    { name: "Mr David Brun", role: "Conseil & business" },
    { name: "Mme Imen Jani", role: "Accompagnement entreprise" },
    { name: "ACTIV SOFT SARL", role: "CTO as a service" },
  ];

  // 5 small cards in a row
  const aW = 2.4;
  const aGap = 0.07;
  advisory.forEach((p, i) => {
    const x = 0.5 + i * (aW + aGap);
    const y = 4.65;
    card(s, x, y, aW, 2.0);
    s.addShape("ellipse", {
      x: x + (aW / 2) - 0.4, y: y + 0.2, w: 0.8, h: 0.8,
      fill: { color: C.tealLight }, line: { color: C.teal, width: 1 },
    });
    const initials = p.name
      .replace("Pr.", "").replace("Dr ", "").replace("Mr ", "").replace("Mme ", "")
      .trim().split(" ").map((w) => w[0]).slice(0, 2).join("");
    s.addText(initials, {
      x: x + (aW / 2) - 0.4, y: y + 0.2, w: 0.8, h: 0.8,
      fontFace: FONT, fontSize: 16, color: C.tealDark, bold: true,
      align: "center", valign: "middle",
    });
    s.addText(p.name, {
      x: x + 0.15, y: y + 1.05, w: aW - 0.3, h: 0.6,
      fontFace: FONT, fontSize: 11, color: C.midnight, bold: true,
      align: "center",
    });
    s.addText(p.role, {
      x: x + 0.15, y: y + 1.55, w: aW - 0.3, h: 0.4,
      fontFace: FONT, fontSize: 9, color: C.slate, align: "center",
    });
  });

  footer(s, 13);
}

// ===================================================================
// Slide 14 — Call to action
// ===================================================================
{
  const s = pres.addSlide();
  bg(s, C.midnight);

  // Decorative accents
  s.addShape("rect", {
    x: 0, y: 0, w: 0.733, h: 1.4,
    fill: { color: C.lime }, line: { color: C.lime },
  });
  s.addShape("rect", {
    x: 12.6, y: 6.1, w: 0.733, h: 1.4,
    fill: { color: C.teal }, line: { color: C.teal },
  });

  // Brand mark
  s.addShape("rect", {
    x: 0.5, y: 0.5, w: 0.22, h: 0.22, fill: { color: C.teal }, line: { color: C.teal },
  });
  s.addText("NormSafety", {
    x: 0.8, y: 0.43, w: 4, h: 0.36,
    fontFace: FONT, fontSize: 14, color: C.white, bold: true,
  });

  // Eyebrow
  s.addText("PARLONS-EN", {
    x: 0.5, y: 2.0, w: 12, h: 0.4,
    fontFace: FONT, fontSize: 12, color: C.teal, bold: true, charSpacing: 8,
  });

  // Big CTA text
  s.addText("Vous souhaitez structurer votre SST,", {
    x: 0.5, y: 2.45, w: 12.3, h: 0.85,
    fontFace: FONT, fontSize: 36, color: C.white, bold: true,
  });
  s.addText("mieux piloter vos obligations et lancer", {
    x: 0.5, y: 3.15, w: 12.3, h: 0.85,
    fontFace: FONT, fontSize: 36, color: C.white, bold: true,
  });
  s.addText("un pilote adapté à votre entreprise ?", {
    x: 0.5, y: 3.85, w: 12.3, h: 0.85,
    fontFace: FONT, fontSize: 36, color: C.lime, bold: true,
  });

  // Action chips
  const actions = ["Demande de démo", "Prédiagnostic", "Phase pilote"];
  actions.forEach((a, i) => {
    const x = 0.5 + i * 2.55;
    s.addShape("roundRect", {
      x, y: 5.05, w: 2.4, h: 0.55,
      rectRadius: 0.27,
      fill: { color: "1F2A4F" }, line: { color: C.teal, width: 0.75 },
    });
    s.addText(a, {
      x, y: 5.05, w: 2.4, h: 0.55,
      fontFace: FONT, fontSize: 12, color: C.white, bold: true,
      align: "center", valign: "middle",
    });
  });

  // Contact
  s.addShape("line", {
    x: 0.5, y: 6.05, w: 12.3, h: 0,
    line: { color: "1F2A4F", width: 1 },
  });

  const contact = [
    ["EMAIL", "contact@normsafety.com"],
    ["WEB", "normsafety.com"],
    ["LINKEDIN", "NormSafety"],
  ];
  contact.forEach(([k, v], i) => {
    const x = 0.5 + i * 4.15;
    s.addText(k, {
      x, y: 6.25, w: 3.95, h: 0.3,
      fontFace: FONT, fontSize: 9, color: C.teal, bold: true, charSpacing: 6,
    });
    s.addText(v, {
      x, y: 6.55, w: 3.95, h: 0.4,
      fontFace: FONT, fontSize: 14, color: C.white, bold: true,
    });
  });

  s.addText("14 / 14", {
    x: 8.83, y: 7.15, w: 4, h: 0.3,
    fontFace: FONT, fontSize: 9, color: "94A3B8", align: "right",
  });
}

// ---------- Write file ----------
const outName = "NormSafety_Presentation";
pres.writeFile({ fileName: outName }).then((file) => {
  console.log(`OK — wrote: ${file}`);
});

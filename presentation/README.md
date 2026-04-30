# NormSafety — Présentation client (PPTX → Canva)

Generates `NormSafety_Presentation.pptx` (14 slides, 16:9, FR) — designed to be
uploaded to Canva and edited as a normal Canva design.

## Use

1. Open Canva → **Create a design** → **Import file** → upload
   `NormSafety_Presentation.pptx`.
2. Canva converts it into an editable presentation. Every text box, shape and
   color is editable. You can swap fonts (the deck uses **Sora**) and drop in
   the real NormSafety logo from `public/assets/norm/`.

## Regenerate

```bash
cd presentation
npm install      # one time
npm run build    # writes NormSafety_Presentation.pptx
```

## Slides

| #  | Title                                           |
| -- | ----------------------------------------------- |
| 1  | NormSafety — Hero                               |
| 2  | Pourquoi la SST doit changer maintenant         |
| 3  | Les conséquences pour l'entreprise              |
| 4  | La réponse NormSafety                           |
| 5  | Une plateforme modulaire, pensée pour le terrain|
| 6  | Ce que NormSafety apporte concrètement          |
| 7  | Protection des données & IA responsable         |
| 8  | Pourquoi NormSafety se démarque                 |
| 9  | Des packs adaptés à la maturité de l'entreprise |
| 10 | Comment nous déployons NormSafety chez un client|
| 11 | Pourquoi rejoindre la phase pilote maintenant   |
| 12 | Ils nous font déjà confiance / Notre dynamique  |
| 13 | Une équipe pluridisciplinaire au service de la SST|
| 14 | Call to action                                  |

Edit `build-pptx.mjs` to change copy, layout or colors — palette is centralized
in the `C` constant at the top of the file (matches `src/styles/tokens.ts`).

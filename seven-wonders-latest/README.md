# Wonder Atlas — The New Seven Wonders

A 19-slide React presentation for an English class, with an interactive jigsaw image-reveal game and English/Thai presenter notes.

## Run locally

The download includes the ready-built site. For a quick preview with **no package installation**, use Node.js:

```sh
node serve.mjs
```

Open **http://127.0.0.1:4173**. Keep the terminal open while presenting.

To develop or rebuild from the complete source:

Use Node.js 22.12+ (or Node.js 24+) and npm.

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite (normally http://127.0.0.1:5173).

```sh
npm run build
npm run preview
npm test
```

`dist/` is the static production build. Serve it with a local HTTP server; do not open index.html directly from the filesystem. All 28 photographs are bundled in `public/images/`, so the built presentation does not need external images, fonts, scripts, or APIs. Source and license links require Internet access.

## Present

- Use the **Next / Previous** controls or **Left / Right arrow keys**.
- Select any progress segment or open the grid icon to jump to a slide.
- Use the fullscreen icon. Press Escape to leave browser fullscreen.
- Notes are hidden by default. The notes icon or **N** toggles English/Thai notes. These notes are visible on the same display: hide them before sharing the presentation screen. Changing slides hides notes automatically.
- Keyboard shortcuts do not interrupt focused buttons, links, the game, or the notes panel. Use the footer controls when focus is in the game.
- In the game, **Open a Piece** reveals one random unopened piece. **Show Answer** opens all pieces and shows the name/country. **Next Wonder** moves through a shuffled seven-item bag. After round seven use **Play Again**. Names and photo credits are concealed until the answer is shown.
- Global page scrolling is disabled. On small screens, the references panel and open notes can scroll internally to keep all source links accessible.

## Edit content

- `src/data.js`: landmark sentences, small facts, source URLs, photograph metadata, country coordinates, and bilingual notes.
- `src/main.jsx`: reusable slide, photo, map, game, navigation, notes, and overview components.
- `src/game.mjs`: shuffled bag, unique random reveals, and interlocking SVG puzzle paths.
- `src/styles.css`: Tailwind entry point, design tokens, projector layouts, responsive styles, reduced-motion support.
- `public/images/`: bundled, licensed photographs (keep credits if replacing or sharing).
- `tests/game.test.mjs`: game logic checks.

React, Tailwind CSS, Framer Motion and Lucide React are bundled into the production build. JSX compilation runs in-process with TypeScript. Versions are pinned for reproducibility. The custom compiler avoids a child-process dependency during production compilation.

## Content and photography

Historical statements are paraphrased in short classroom English from the specific UNESCO and New7Wonders pages on the references slide. Britannica is included as further reading; it is not claimed as verification of statements because its pages were not accessible during source checking. New7Wonders is a public voting campaign, distinct from UNESCO's World Heritage designation. The map is a simplified equirectangular illustration with geographic landmark pins, not a political boundary map.

Photographs were obtained from Wikimedia Commons. Resized previews are bundled; CSS crops are used in the layouts. The Machu Picchu source is a stitched panorama by its photographer. Individual image licenses apply to the images, including ShareAlike obligations for adaptations; they do not license the application code. All files link to their original Commons page and the selected license:

| File | Photographer | License | Original |
|---|---|---|---|
| wall.jpg | Nicolas M. Perrault | CC0 1.0 | https://commons.wikimedia.org/wiki/File:Great_Wall_of_China_July_2006.JPG |
| petra.jpg | Pieter van Eekeren | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:TreasuryPetra.jpg |
| christ.jpg | PLBechly | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Christ_the_Redeemer_1.jpg |
| machu.jpg | Martin St-Amant – Wikipedia | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:80_-_Machu_Picchu_-_Juin_2009_-_edit.jpg |
| chichen.jpg | Arian Zwegers | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:El_Castillo,_Chichen_Itza_(14363835661).jpg |
| colosseum.jpg | Nicholas Hartmann | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Rome_Colosseum_exterior_1.jpg |
| taj.jpg | Kocosi411 (attributed on Commons) | CC BY 3.0 | https://commons.wikimedia.org/wiki/File:Taj_Mahal2012.jpg |

License texts: https://creativecommons.org/publicdomain/zero/1.0/ · https://creativecommons.org/licenses/by/2.0/ · https://creativecommons.org/licenses/by/3.0/ · https://creativecommons.org/licenses/by-sa/3.0/ · https://creativecommons.org/licenses/by-sa/4.0/

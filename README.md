# Langosmon.github.io — v2

Personal site for Jose Alfredo Ocegueda Sanchez. Vanilla HTML + CSS + a small
amount of JS. Zero dependencies, zero build step.

## Preview locally

```bash
cd /Users/jocegue/Documents/Langosmon.github.io-v2
python -m http.server 8000
# open http://localhost:8000 in your browser
```

## Edit content

Everything that goes on every page lives in **one file: `data.js`**. Every
translatable string is `{ en: "...", es: "..." }`. To change anything, open
`data.js`, find the relevant section, edit, save, refresh the browser.

### Add a news item

In `data.js`, find the `news:` array. Add a new block at the top (newest first):

```js
{
  date: "2026-06-15",
  tag: { en: "Talk", es: "Charla" },
  featured: true,                          // optional — terracotta dot on the rail
  title: {
    en: "Invited talk at AOML",
    es: "Charla invitada en AOML",
  },
  body: {
    en: "Spoke about *ITCZ breakdown × ENP cyclogenesis*. Slides at [link](https://...).",
    es: "Hablé sobre *ruptura ZCIT × ciclogénesis ENP*.",
  },
  link: { url: "https://example.com", label: { en: "Slides", es: "Diapositivas" } },
  mediaSrc: "images/aoml.jpg",             // optional image/gif/mp4
  mediaCaption: { en: "AOML / Miami", es: "AOML / Miami" },
}
```

Inline markdown supported in body fields:
- `*italic*` → italic
- `[text](url)` → link

### Add a research project

In `data.js`, find the `research:` array, append a block:

```js
{
  num: "04",
  title: { en: "...", es: "..." },
  tags: ["TC", "Monsoon"],
  body:  { en: "...", es: "..." },
  caption: { en: "What goes in the placeholder card", es: "..." },
}
```

### Add a publication

In `data.js`, `publications:` array. Newest first by year:

```js
{
  year: 2026,
  authors: "Ocegueda-Sanchez, J. A., et al.",
  title: { en: "...", es: "..." },
  venue: "Journal of Climate",
  doi: "10.1175/...",
  url: "https://doi.org/10.1175/...",
  tag: { en: "Journal", es: "Revista" },
}
```

### Add a place to the world map

In `data.js`, `places:` array. Multiple `entries` per city are allowed (they
all show in the same popup when you click the pin).

```js
{
  city: "Boulder, CO",
  lat: 40.015, lon: -105.2705,
  entries: [
    {
      date: "2025-07-10",
      tag: { en: "Workshop", es: "Taller" },
      title: { en: "NCAR ASP Summer Colloquium", es: "Coloquio NCAR ASP" },
      brief: {
        en: "Two weeks on tropical convection. Met half the cyclone community.",
        es: "Dos semanas sobre convección tropical. Conocí a media comunidad de ciclones.",
      },
      // Materials are optional — drop files into assets/places/ and reference them.
      materials: [
        { kind: "pdf",   src: "assets/places/ncar2025.pdf", label: { en: "Slides", es: "Diapositivas" } },
        { kind: "video", src: "assets/places/ncar2025.mp4", label: { en: "Talk video", es: "Video" } },
        { kind: "link",  src: "https://...",                label: { en: "Program", es: "Programa" } },
      ],
    },
  ],
}
```

For pin coordinates, look up `lat, lon` on Google Maps (right-click → "What's here?").

## File map

| File | Purpose |
|---|---|
| `index.html`        | Home: animated IR hero, about, scrubbable IR widget, news timeline |
| `research.html`     | Research projects + publications list |
| `era5.html`         | ERA5 maps landing (links to your existing interactive apps) |
| `cv.html`           | CV embedded PDF + download |
| `places.html`       | World map with clickable pins |
| `data.js`           | **All content lives here** (edit this) |
| `styles.css`        | Editorial design system + light/dark themes |
| `app.js`            | Vanilla templating, theme/lang toggles, scroll reveals, tweaks panel |
| `ir-satellite.js`   | Procedural IR satellite animation (canvas) |
| `world-geometry.js` | Simplified continent outlines for the places map |
| `places-map.js`     | SVG world map + pin popups |
| `assets/places/`    | Drop PDFs / MP4s here for places-page materials |
| `files/cv.pdf`      | Your CV (replace this file to update) |

## Themes and languages

- **Theme:** the site follows the visitor's OS dark/light preference by default.
  The ☾ / ☼ button in the nav lets them override. Saved to localStorage.
- **Language:** the ES / EN button toggles between English and Spanish. Saved
  to localStorage. Every translatable string is `{ en, es }` in `data.js`.
- **Accent color:** the floating ⚙ button (bottom right) reveals a hue slider.
  Visitors can change the accent color live; their choice is remembered.

## Deploy

This repo is `Langosmon.github.io` — pushing to `main` deploys automatically to
https://Langosmon.github.io.

To go live with this v2:
1. Preview locally first (`python -m http.server 8000`).
2. Once happy, copy these files into your existing
   `/Users/jocegue/Documents/Langosmon.github.io/` repo, replacing the old
   `index.html`, `research.html`, etc. Keep `files/cv.pdf` and `images/`.
3. Add a `.nojekyll` file at the repo root so GitHub doesn't try to run Jekyll.
4. `git add . && git commit -m "Site redesign" && git push`.

## License

Content (text, images): all rights reserved by Jose Alfredo Ocegueda Sanchez.
Site code: feel free to learn from / reuse with credit.

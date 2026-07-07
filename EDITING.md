# Editing your website — a no-coding-required tutorial

This site was built so you can update **almost everything** by editing **one
file**: `data.js`. No JavaScript or HTML knowledge needed. You'll do three
things:

1. Open `data.js` in any text editor (TextEdit on Mac is fine).
2. Find the section you want to change (News, Research, Places…) and edit it.
3. Save, refresh your browser to preview, then push to GitHub when happy.

---

## Quick reference: where each thing lives

| What you want to change                       | File to edit            | Section in that file        |
|-----------------------------------------------|-------------------------|-----------------------------|
| Your name, role, location, advisor, ORCID     | `data.js`               | `profile:`                  |
| Bio paragraphs on the home page               | `data.js`               | `about:`                    |
| The 4 little cards next to your portrait      | `data.js`               | `facts:`                    |
| Add a news item                               | `data.js`               | `news:` array               |
| Add a research project                        | `data.js`               | `research:` array           |
| Add a publication                             | `data.js`               | `publications:` array       |
| Add a pin to the world map                    | `data.js`               | `places:` array             |
| Change Science Maps apps (URLs, tabs)         | `data.js`               | `scienceMaps:` → `groups:`  |
| Replace your CV PDF                           | drop new file at        | `files/cv.pdf`              |
| Replace your portrait photo                   | `data.js`               | `profile:` → `portrait:`    |
| Add an image / GIF to a news item             | `data.js` + drop file   | `news:` `mediaSrc:`         |
| Attach a PDF/video to a place pin             | `data.js` + drop file   | `places:` `materials:`      |
| Navigation menu items (top bar)               | `data.js`               | `nav:` array                |
| Footer "always up to talk…" line              | `data.js`               | `footer:` → `cta:`          |

If a string has both English and Spanish (a `{ en: "...", es: "..." }`
object), **edit both** so the language toggle keeps working. The site doesn't
auto-translate — you provide both.

---

## How to preview your changes locally

Open Terminal (Applications → Utilities → Terminal) and run:

```
cd /Users/jocegue/Documents/Langosmon.github.io
python3 -m http.server 8000
```

Open <http://localhost:8000> in your browser. Edit `data.js`, save, refresh
the page — your changes appear immediately. Press `Ctrl+C` in Terminal to
stop the server when you're done.

---

## How to push your changes live

When you're happy with what you see locally:

```
cd /Users/jocegue/Documents/Langosmon.github.io
git add .
git commit -m "Update news / research / places (describe what you changed)"
git push
```

GitHub Pages takes 1–2 minutes to rebuild after the push. Visit
<https://langosmon.github.io> to see it live.

> **Note**: this folder isn't yet a git repository. The first time you push,
> you'll either copy these files into the existing `Langosmon.github.io`
> folder, OR initialize this folder as a new git repo and replace the live
> one. Ask Claude when you're ready to go live.

---

# Tutorial: common edits

Each example below shows the **block to copy** and where to paste it. The
order matters — **newest items go at the top** of each array.

## 1. Add a news item

Open `data.js`, search for `news:` (around line 60). The structure looks like:

```js
news: [
  {                                       ← existing newest item
    date: "2025-11-08",
    ...
  },
  {                                       ← older item
    date: "2025-05-12",
    ...
  },
],
```

To add a new entry, copy this block **right after the opening `news: [`**:

```js
  {
    date: "2026-06-15",
    tag: { en: "Talk", es: "Charla" },
    featured: true,                       // optional — terracotta dot on the rail
    title: {
      en: "Invited talk at AOML",
      es: "Charla invitada en AOML",
    },
    body: {
      en: "Spoke about *ITCZ breakdown × ENP cyclogenesis*. Slides at [this link](https://example.com).",
      es: "Hablé sobre *ruptura ZCIT × ciclogénesis ENP*. Diapositivas en [este enlace](https://example.com).",
    },
    link: {                               // optional — adds an "Open ↗" button
      url: "https://example.com",
      label: { en: "Slides", es: "Diapositivas" },
    },
    mediaSrc: "images/clip.mp4",          // optional — image or mp4/webm video
    mediaPoster: "images/clip-poster.jpg", // poster frame shown before a video plays
    mediaCaption: {
      en: "AOML / Miami",
      es: "AOML / Miami",
    },
  },
```

**Tips for the body text:**
- Wrap text in `*` for italic: `*ITCZ breakdown*` → *ITCZ breakdown*
- Make a link with `[text](url)`: `[GRL paper](https://doi.org/10.1234)` → [GRL paper](https://doi.org/10.1234)

**Required fields:** `date`, `title`, `body`.
**Optional fields:** `tag`, `featured`, `link`, `mediaSrc`, `mediaCaption`.

## 2. Add a research project

Search for `research:` in `data.js`. Copy this block:

```js
  {
    num: "04",                            // next number after the last project
    title: {
      en: "New project title",
      es: "Nuevo título del proyecto",
    },
    tags: ["TC", "Monsoon", "ENP"],       // free-form chips shown below the title
    body: {
      en: "Two or three sentences about the project. Inline *italic* and [links](https://example.com) work.",
      es: "Dos o tres oraciones sobre el proyecto. *Cursivas* y [enlaces](https://example.com) funcionan.",
    },
    caption: {                            // what shows in the placeholder image card
      en: "Composite / figure caption",
      es: "Composición / pie de figura",
    },
  },
```

## 3. Add a publication

Search for `publications:`. Copy:

```js
  {
    year: 2026,
    authors: "Ocegueda-Sanchez, J. A., Chavas, D. R., et al.",
    title: {
      en: "Full title of the paper",
      es: "Título completo del paper",
    },
    venue: "Geophysical Research Letters",
    doi: "10.1029/2026GL123456",          // optional
    url: "https://doi.org/10.1029/2026GL123456",
    tag: { en: "Journal", es: "Revista" }, // or "Preprint", "Book chapter", etc.
  },
```

## 4. Add a place to the world map

Search for `places:`. Each entry is a city (with `lat`, `lon`), and one or
more `entries` (conferences / workshops / talks at that city — they stack
together in the popup when you click the pin).

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
        materials: [                      // optional — shown when user clicks "Materials"
          { kind: "pdf",   src: "assets/places/ncar2025_slides.pdf", label: { en: "Slides",   es: "Diapositivas" } },
          { kind: "video", src: "assets/places/ncar2025.mp4",        label: { en: "Talk",     es: "Charla" } },
          { kind: "image", src: "assets/places/ncar2025_winner.gif", label: { en: "Demo",     es: "Demo" } },
          { kind: "link",  src: "https://example.com",               label: { en: "Programa", es: "Programa" } },
        ],
      },
    ],
  },
```

### Finding lat/lon for a city

On <https://maps.google.com>, right-click the location → first item in the
menu is the coordinates. Copy `40.015, -105.2705` and split into `lat: 40.015,
lon: -105.2705`.

### Adding multiple events at the same city

If you visit Acapulco twice, **don't make two pin entries** — they'd overlap
on the map. Instead, add a second item to the same `entries` array:

```js
  {
    city: "Acapulco, MX",
    lat: 16.8531, lon: -99.8237,
    entries: [
      {
        date: "2024-03-15",
        tag: { en: "Fieldwork", es: "Trabajo de campo" },
        title: { en: "Hurricane Otis post-mortem", es: "Post-mortem del huracán Otis" },
        brief: { en: "...", es: "..." },
      },
      {
        date: "2025-06-20",
        tag: { en: "Talk", es: "Charla" },
        title: { en: "Public lecture, UAGro", es: "Conferencia pública, UAGro" },
        brief: { en: "...", es: "..." },
      },
    ],
  },
```

## 5. Add images / GIFs / videos / PDFs

The site loads media files from local folders. To add a new file:

1. Drop the file into the right folder:
   - **Images / GIFs** for news media → `images/` folder
   - **PDFs / videos** for place materials → `assets/places/` folder
   - **CV PDF** → replace `files/cv.pdf`
2. Reference the file in `data.js` using a relative path:
   - `mediaSrc: "images/your-file.gif"`
   - `src: "assets/places/your-slides.pdf"`

### File size tips

The website should load fast, so:

- **Images**: aim for under 500 KB. Resize anything bigger.
  - Mac shortcut: open in Preview → Tools → Adjust Size → set max dimension to 1600 px.
- **GIFs**: under 5 MB. If yours is bigger, convert to MP4 (it'll be ~10× smaller).
- **PDFs**: under 5 MB. Use Preview → File → Export → reduce file size.
- **Videos**: use MP4 or WebM, under 10 MB. Compress with HandBrake (free) if needed.

### `kind` types for place materials

| `kind`    | What it does                                            |
|-----------|---------------------------------------------------------|
| `"pdf"`   | Embeds the PDF in an iframe inside the popup            |
| `"video"` | Plays an MP4/WebM with HTML5 video controls             |
| `"image"` | Shows an image / animated GIF                           |
| `"link"`  | Just a link out to a URL (no embed)                     |

## 6. Change your portrait

Drop your new photo into `images/` (call it whatever you like, e.g.
`profile2026.jpg`), then in `data.js` find:

```js
profile: {
  ...
  portrait: "images/profile-720.jpg",
},
```

Replace the URL with the new local path:

```js
portrait: "images/profile2026.jpg",
```

## 7. Change navigation items

Search for `nav:` in `data.js`:

```js
nav: [
  { href: "index.html",    key: "home",     label: { en: "Home",      es: "Inicio" } },
  { href: "research.html", key: "research", label: { en: "Research",  es: "Investigación" } },
  ...
],
```

To rename "Research" → "Science", just change the `label.en` / `label.es`
text. To add a new page, you'd also need to create that HTML file — ask
Claude if you want a new page.

## 8. Change Science Maps apps

The Science Maps page (`science-maps.html`) shows two in-page tabs — "TC
Diagnostics" and "ERA5 Reanalysis". Each tab is a `groups:` entry in
`data.js`, and each group holds one or more `apps:`:

```js
scienceMaps: {
  ...
  groups: [
    {
      key: "tcdiag",
      label: { en: "TC Diagnostics", es: "Diagnósticos de CT" },
      desc: { en: "...", es: "..." },      // paragraph shown above the group's apps
      apps: [
        {
          title: { en: "vPI · PI · Ventilation · GPIv", ... },
          desc: { en: "...", es: "..." },
          pending: true,                   // ← "coming online" card instead of the app
          embedUrl: "https://YOUR-URL.streamlit.app/?embed=true&embed_options=hide_loading_screen",
          openUrl:  "https://YOUR-URL.streamlit.app/",
          repo:     "https://github.com/Langosmon/TCdiag_streamlit",
        },
      ],
    },
    { key: "era5", ... },                  // the two ERA5 apps live here
  ],
},
```

**If you re-deploy a Streamlit app with a new URL**, update that app's
`embedUrl` and `openUrl` (keep the `?embed=true&embed_options=hide_loading_screen`
part on `embedUrl`).

**When the TC Diagnostics app goes live**: it currently has `pending: true`,
which renders a "Coming online" card instead of embedding the app. Once the
Streamlit app is deployed, change it to `pending: false` (or delete the
`pending:` line entirely) and the embedded app appears in its place.

---

## Common mistakes (and how to fix them)

### "I edited `data.js` and now the page is blank!"

You probably have a syntax error. The most common cause is a missing comma or
an unbalanced quote. To debug:

1. Open <http://localhost:8000> in your browser.
2. Right-click anywhere → **Inspect** → **Console** tab.
3. Look for the red error message. It will tell you which line of `data.js`.

### "My English text changed but Spanish still shows old text"

Each translatable string is `{ en: "...", es: "..." }`. You edited the
English string but not the Spanish one. Update both.

### "My image / PDF doesn't show up"

Three things to check:
1. Is the file actually in the right folder? (`images/`, `assets/places/`, or `files/`)
2. Does the path in `data.js` match exactly? (case-sensitive — `Photo.JPG` ≠ `photo.jpg`)
3. Is the file too big? (anything over 20 MB will time out on GitHub Pages)

### "I want to undo my changes"

If you haven't pushed yet:

```
cd /Users/jocegue/Documents/Langosmon.github.io
git checkout -- data.js                    # undo edits to data.js
```

If you already pushed and want to revert the last commit:

```
git revert HEAD                            # creates a new commit that undoes the last one
git push
```

---

## What you can't (easily) change in `data.js`

These need code changes — ask Claude:

- The overall design (fonts, colors, layout)
- Adding new types of content (e.g., a "Teaching" or "Talks" section)
- The structure of pages
- The map's appearance (zoom default, pin style)
- The IR satellite hero video — to swap, replace `assets/otis/otis-landfall-480p.webm` + `otis-landfall-240p.webm` + `otis-landfall-poster.png` with new files using the same names.

---

## TL;DR

- **Everything you edit lives in `data.js`**.
- Two-language support: write both `en:` and `es:` for every visible string.
- Newest items go at the top of each array.
- Media files go in `images/` (news) or `assets/places/` (places). Reference them by relative path.
- Preview with `python3 -m http.server 8000`. Push to GitHub when happy.
- Errors? Browser Console (right-click → Inspect → Console) shows what's wrong.

---

## New in this version (2026-07)

### Research projects can now carry real media and a pull-quote

```js
{
  num: "01",
  title: { en: "...", es: "..." },
  tags: ["..."],
  body: { en: "...", es: "..." },
  media:  { kind: "video", src: "assets/research/clip.mp4", poster: "assets/research/clip-poster.jpg",
            caption: { en: "...", es: "..." } },       // or kind: "image"
  media2: { ... },                                      // optional second figure
  quote:  { text: { en: "...", es: "..." }, cite: "GRL 2025 · doi:..." },  // optional
  link:   { url: "https://...", label: { en: "Read the paper", es: "Leer el artículo" } },
}
```

Videos autoplay muted only while on screen (they use `data-inview`), so keep
each under ~3 MB: `ffmpeg -i in.mp4 -vf "scale=-2:900" -c:v libx264 -crf 27 -preset slow -an -movflags +faststart out.mp4`
and make a poster with `ffmpeg -ss 3 -i out.mp4 -frames:v 1 -q:v 4 out-poster.jpg`.

### Places entries: story, remote pins, video materials

- `story:` — a longer reflection shown under the one-line `brief:` in the popup.
- `remote: true` on a *place* renders its pin hollow (events attended online).
- materials now support `{ kind: "video", src, poster, label }`; PDFs/videos
  only download when the visitor opens the Materials panel.

### Home "evidence" section

`SITE_DATA.evidence` drives the science moment between About and the Logbook —
swap `media.src` to feature a different animation.

### Asset layout

- `assets/research/` — project animations + posters + figures
- `assets/places/`   — conference posters (PDF), talk videos
- `images/`          — portrait, news media

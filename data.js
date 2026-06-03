// ============================================================================
// SITE CONTENT — edit this file to update every page on the site.
// ----------------------------------------------------------------------------
// Every translatable string is a { en, es } object. To add content, find the
// matching array (news, research, publications, places...) and append an entry.
// Inline markdown in body text: *italic*  and  [link text](url)
// ============================================================================

window.SITE_DATA = {

  // --------------------------------------------------------------------------
  // PROFILE — appears in nav, footer, hero
  // --------------------------------------------------------------------------
  profile: {
    name: "Jose Alfredo Ocegueda Sanchez",
    short: "Jose Alfredo",
    role: {
      en: "Ph.D. Candidate · Atmospheric Sciences · Purdue",
      es: "Candidato a Ph.D. · Ciencias Atmosféricas · Purdue",
    },
    location: {
      en: "West Lafayette, IN · originally Guadalajara, Jalisco",
      es: "West Lafayette, IN · originario de Guadalajara, Jalisco",
    },
    email: "jocegue@purdue.edu",
    advisor: { name: "Dan Chavas", url: "https://web.ics.purdue.edu/~dchavas/" },
    orcid: "https://orcid.org/0009-0009-1982-2331",
    portrait: "images/Profile.JPEG",
  },

  // --------------------------------------------------------------------------
  // ABOUT — paragraphs shown in the About section on the home page
  // --------------------------------------------------------------------------
  about: {
    en: [
      "I'm a Ph.D. candidate in the EAPS department at Purdue University, where I have been since 2022. I work with Prof. Daniel Chavas to quantify the role of ITCZ breakdowns in tropical cyclogenesis in the Eastern Pacific.",
      "My research interests include weather and climate extremes such as hurricanes, monsoons, atmospheric rivers, cut-off lows, and atmospheric blocking. I enjoy formulating observation-based hypotheses and testing them by integrating theoretical frameworks with numerical modeling.",
      "I am particularly passionate about studying regions that have received relatively little scientific attention. For me, science is not only about understanding the Earth system, but also about producing knowledge that can serve people and communities.",
      "Outside of research, I’m a foodie; I see food and language as windows into other cultures and as delicious, human ways of connecting with one another.",
    ],
    es: [
      "Soy estudiante de doctorado en el Departamento de Ciencias de la Tierra, Atmosféricas y Planetarias de Purdue University, donde he estado desde 2022.",
      "Trabajo con el Prof. Daniel Chavas para cuantificar el papel de los rompimientos de la ZCIT en la ciclogénesis tropical en el Pacífico Oriental. Mis intereses de investigación incluyen extremos meteorológicos y climáticos como huracanes, monzones, ríos atmosféricos, bajas segregadas y bloqueos atmosféricos.",
      "Me interesa formular hipótesis basadas en observaciones y ponerlas a prueba integrando marcos teóricos con modelación numérica.",
      "En particular, me apasiona estudiar regiones que han recibido relativamente poca atención científica, con el objetivo de mejorar nuestra comprensión del sistema Tierra y desarrollar ciencia que sirva a las personas y a sus comunidades.",
      "Fuera de la investigación, soy amante de la comida; veo la comida y el lenguaje como ventanas hacia otras culturas y como dos de las formas más deliciosas de conectar entre nosotros.",
    ],
  },

  // Mini cards shown next to the portrait. Edit freely.
  facts: [
    { label: { en: "Field",     es: "Campo" },        value: { en: "Tropical Meteorology", es: "Meteorología Tropical" } },
    { label: { en: "Lab",       es: "Laboratorio" },  value: "Chavas Group" },
    { label: { en: "Tools",     es: "Herramientas" }, value: "Python · MPAS-A · SpeedyWeather" },
    { label: { en: "Languages", es: "Idiomas" },      value: "Español · English" },
  ],

  // --------------------------------------------------------------------------
  // NEWS — newest first. Date is ISO (YYYY-MM-DD).
  // To add an entry: copy a block, change the date/title/body, push.
  // Optional fields: featured, link, mediaSrc, mediaCaption
  // --------------------------------------------------------------------------
  news: [
    {
      date: "2026-04-03",
      tag: { en: "Award", es: "Premiación" },
      featured: true,
      title: {
        en: "AMS Tropical Oustanding Student Poster Presentation",
        es: "Premio a la mejor presentación de póster estudiantil de la AMS en meteorología tropical",
      },
      body: {
        en: "I’m very honored to have received one of the Outstanding Student Poster Awards in AMS Tropical 2026.I presented my poster, “The Importance of Seed Types for Tropical Cyclone Genesis in the Eastern and Central Pacific,” where I shared my work on how different precursor disturbances may influence the likelihood of tropical cyclone genesis across the basin.",
        es: "Me siento muy honrado de haber recibido uno de los Premios al Póster Destacado para Estudiantes en el AMS Tropical 2026. Presenté mi póster titulado «La importancia de los tipos de semillas para la génesis de ciclones tropicales en el Pacífico oriental y central», en el que compartí mi trabajo sobre cómo diferentes precursores de ciclones tropicales pueden influir en la probabilidad de génesis de todo el Pacífco este",
      },
    },
    {
    {
      date: "2025-11-08",
      tag: { en: "Outreach", es: "Divulgación" },
      featured: true,
      title: {
        en: "ClimART 2025 — first Climate × Art competition at Purdue EAPS",
        es: "ClimART 2025 — primer concurso de Clima × Arte en Purdue EAPS",
      },
      body: {
        en: "I finally launched the first Climate × Art competition at Purdue EAPS. ClimART exists because data can be gorgeous and art can be scientific. Plots, schematics, paintings — they're all ways to say *hey, this is me*, even inside a lab.",
        es: "Finalmente lancé el primer concurso de Clima × Arte en Purdue EAPS. ClimART existe porque los datos pueden ser bellísimos y el arte puede ser científico. Gráficas, esquemas, pinturas — todas son formas de decir *oye, este soy yo*, incluso dentro de un laboratorio.",
      },
      mediaSrc: "images/climart2025.gif",
      mediaCaption: { en: "ClimART 2025 / winners reel", es: "ClimART 2025 / video de ganadores" },
    },
    {
      date: "2025-05-12",
      tag: { en: "Milestone", es: "Hito" },
      title: {
        en: "Passed my preliminary exam",
        es: "Aprobé mi examen preliminar",
      },
      body: {
        en: "Defended a presentation titled *Climatology of ITCZ Breakdown Events and Their Impact on East Pacific Tropical Cyclogenesis.* Expect ITCZ × TC genesis science to keep rolling out over the next couple of years.",
        es: "Defendí una presentación titulada *Climatología de eventos de ruptura de la ZCIT y su impacto en la ciclogénesis tropical del Pacífico oriental.* Esperen más ciencia de ZCIT × génesis de CT en los próximos años.",
      },
    },
    {
      date: "2025-04-03",
      tag: { en: "Publication", es: "Publicación" },
      title: {
        en: "First manuscript accepted to GRL",
        es: "Primer manuscrito aceptado en GRL",
      },
      body: {
        en: "My first Purdue project — Eastern North Pacific tropical cyclone landfalls — landed in *Geophysical Research Letters.* Headline findings: (1) ENP landfalls have a bimodal seasonal cycle driven by orography; (2) high-landfall years hit vulnerable Southern Mexico via stronger easterly reversals; (3) steering-wind anomalies are the main driver of interannual landfall variability.",
        es: "Mi primer proyecto en Purdue — ciclones tropicales del Pacífico Norte oriental — fue aceptado en *Geophysical Research Letters.* Hallazgos: (1) los aterrizajes en el ENP tienen un ciclo estacional bimodal por la orografía; (2) los años de muchos aterrizajes golpean al sur vulnerable de México por una reversión más fuerte de los easterlies; (3) las anomalías del viento de dirección son el principal motor de la variabilidad interanual.",
      },
      link: {
        url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL113807",
        label: { en: "Read in GRL", es: "Leer en GRL" },
      },
    },
    {
      date: "2024-12-02",
      tag: { en: "Preprint", es: "Preprint" },
      title: {
        en: "ENP landfall preprint posted to ESS Open Archive",
        es: "Preprint de aterrizajes ENP en ESS Open Archive",
      },
      body: {
        en: "Posted the preprint version of the ENP landfalls manuscript ahead of acceptance.",
        es: "Publiqué la versión preprint del manuscrito de aterrizajes ENP antes de su aceptación.",
      },
      link: {
        url: "https://essopenarchive.org/doi/full/10.22541/essoar.173238661.14573770",
        label: { en: "Read preprint", es: "Leer preprint" },
      },
    },
  ],

  // --------------------------------------------------------------------------
  // RESEARCH — shown on research.html
  // --------------------------------------------------------------------------
  research: [
    {
      num: "01",
      title: {
        en: "ITCZ Breakdown & East Pacific TC Genesis",
        es: "Ruptura de ZCIT y génesis de CT en el Pacífico Oriental",
      },
      tags: ["ITCZ", "Cyclogenesis", "ENP", "Climatology"],
      body: {
        en: "Building a climatology of ITCZ breakdown events and asking how often, and how much, they seed tropical cyclones in the Eastern North Pacific. Combines satellite-derived precipitation, reanalysis vorticity budgets, and TC tracks.",
        es: "Construyendo una climatología de eventos de ruptura de la ZCIT y preguntando con qué frecuencia y en qué magnitud siembran ciclones tropicales en el Pacífico Norte oriental. Combina precipitación satelital, presupuestos de vorticidad de reanálisis y trayectorias de CT.",
      },
      caption: {
        en: "Composite ITCZ vorticity · breakdown events",
        es: "Composición de vorticidad ZCIT · eventos de ruptura",
      },
    },
    {
      num: "02",
      title: {
        en: "Eastern Pacific Landfall Variability",
        es: "Variabilidad de aterrizajes en el Pacífico oriental",
      },
      tags: ["Tropical Cyclones", "Landfall", "Steering Winds", "GRL 2025"],
      body: {
        en: "Why does the ENP have a bimodal seasonal landfall cycle, and what drives interannual variability? Steering-wind anomalies dominate; orography sets the stage. Published in *GRL* (2025).",
        es: "¿Por qué el ENP tiene un ciclo estacional bimodal de aterrizajes y qué impulsa la variabilidad interanual? Las anomalías del viento dominan; la orografía pone el escenario. Publicado en *GRL* (2025).",
      },
      caption: {
        en: "Landfall density · seasonal cycle",
        es: "Densidad de aterrizajes · ciclo estacional",
      },
    },
    {
      num: "03",
      title: {
        en: "Monsoon — Cyclone Coupling",
        es: "Acoplamiento monzón – ciclón",
      },
      tags: ["Monsoon", "TC", "Tropical Dynamics"],
      body: {
        en: "How monsoon onsets and breaks modulate the large-scale environment that tropical cyclones rely on — vorticity, shear, moisture — across the Northern Hemisphere basins.",
        es: "Cómo los inicios y rupturas del monzón modulan el ambiente de gran escala del que dependen los ciclones tropicales — vorticidad, cizallamiento, humedad — en las cuencas del hemisferio norte.",
      },
      caption: {
        en: "Monsoon onset composites",
        es: "Composiciones de inicio de monzón",
      },
    },
  ],

  // --------------------------------------------------------------------------
  // PUBLICATIONS — formal list shown at the bottom of research.html
  // --------------------------------------------------------------------------
  publications: [
    {
      year: 2025,
      authors: "Ocegueda-Sanchez, J. A., & Chavas, D. R.",
      title: {
        en: "Bimodal Seasonal Cycle and Interannual Drivers of Eastern North Pacific Tropical Cyclone Landfalls",
        es: "Ciclo estacional bimodal y motores interanuales de los aterrizajes de ciclones tropicales en el Pacífico Norte oriental",
      },
      venue: "Geophysical Research Letters",
      doi: "10.1029/2024GL113807",
      url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL113807",
      tag: { en: "Journal", es: "Revista" },
    },
    {
      year: 2024,
      authors: "Ocegueda-Sanchez, J. A., & Chavas, D. R.",
      title: {
        en: "Eastern North Pacific Tropical Cyclone Landfalls (Preprint)",
        es: "Aterrizajes de ciclones tropicales del Pacífico Norte oriental (Preprint)",
      },
      venue: "ESS Open Archive",
      url: "https://essopenarchive.org/doi/full/10.22541/essoar.173238661.14573770",
      tag: { en: "Preprint", es: "Preprint" },
    },
  ],

  // --------------------------------------------------------------------------
  // PLACES — entries on the world map (places.html)
  // Multiple entries per city are allowed (group via the `city` field).
  // Coordinates in lat/lon. tag: Conference | Workshop | Talk | Fieldwork
  // materials: array of { kind: "pdf" | "video" | "link", src, label }
  // --------------------------------------------------------------------------
  places: [
    {
      city: "Guadalajara, MX",
      lat: 20.6597, lon: -103.3496,
      entries: [
        {
          date: "1996-08-01",
          tag: { en: "Origin", es: "Origen" },
          title: { en: "Home", es: "Mi tierra" },
          brief: {
            en: "Where I'm from. Tapatío for life.",
            es: "Mi tierra natal. Tapatío de corazón.",
          },
        },
      ],
    },
    // West Lafayette pin merged with the ClimART entry below — see Purdue block.
    {
      city: "Washington, DC",
      lat: 38.9072, lon: -77.0369,
      entries: [
        {
          date: "2024-12-09",
          tag: { en: "Conference", es: "Congreso" },
          title: { en: "AGU Fall Meeting 2024 — ENP landfalls poster", es: "AGU Fall Meeting 2024 — póster aterrizajes ENP" },
          brief: {
            en: "Poster on ENP landfall variability — the seed of the GRL paper.",
            es: "Póster sobre la variabilidad de aterrizajes en el Pacífico oriental — el origen del paper en GRL.",
          },
          materials: [
            { kind: "pdf", src: "assets/places/agu2024_poster.pdf", label: { en: "Poster (PDF)", es: "Póster (PDF)" } },
          ],
        },
        {
          date: "2025-12-15",
          tag: { en: "Conference", es: "Congreso" },
          title: { en: "AGU Fall Meeting 2025 — ITCZ breakdown talk", es: "AGU Fall Meeting 2025 — charla ruptura ZCIT" },
          brief: {
            en: "Oral on ITCZ breakdown × ENP cyclogenesis — early results from the climatology project.",
            es: "Charla oral sobre ruptura ZCIT × ciclogénesis ENP — resultados preliminares del proyecto de climatología.",
          },
          materials: [
            { kind: "pdf",  src: "assets/places/grl2025.pdf",  label: { en: "Slides (PDF)", es: "Diapositivas (PDF)" } },
            { kind: "link", src: "https://agu.confex.com/agu/", label: { en: "Session page", es: "Página de la sesión" } },
          ],
        },
      ],
    },
    {
      city: "West Lafayette, IN",
      lat: 40.4259, lon: -86.9081,
      entries: [
        {
          date: "2022-08-15",
          tag: { en: "Home base", es: "Base actual" },
          title: { en: "Purdue · EAPS", es: "Purdue · EAPS" },
          brief: {
            en: "Where the Ph.D. is happening. Chavas Group, fourth floor of HAMP.",
            es: "Donde se está haciendo el doctorado. Chavas Group, cuarto piso de HAMP.",
          },
        },
        {
          date: "2025-11-08",
          tag: { en: "Outreach", es: "Divulgación" },
          title: { en: "ClimART 2025 — Climate × Art competition", es: "ClimART 2025 — Concurso Clima × Arte" },
          brief: {
            en: "Founded and organized the first Climate × Art competition at Purdue EAPS. Data can be gorgeous; art can be scientific.",
            es: "Fundé y organicé el primer concurso de Clima × Arte en Purdue EAPS. Los datos pueden ser bellísimos; el arte puede ser científico.",
          },
          materials: [
            { kind: "image", src: "images/climart2025.gif", label: { en: "Winners reel (GIF)", es: "Video ganadores (GIF)" } },
          ],
        },
      ],
    },
    // Add a place: copy this block, fill in lat/lon, push.
    // {
    //   city: "Boulder, CO",
    //   lat: 40.015, lon: -105.2705,
    //   entries: [
    //     {
    //       date: "2025-07-10",
    //       tag: { en: "Workshop", es: "Taller" },
    //       title: { en: "NCAR ASP Summer Colloquium", es: "Colloquium de Verano NCAR ASP" },
    //       brief: { en: "...", es: "..." },
    //       materials: [
    //         { kind: "pdf", src: "assets/places/ncar2025.pdf", label: { en: "Slides", es: "Diapositivas" } },
    //         { kind: "video", src: "assets/places/ncar2025.mp4", label: { en: "Talk video", es: "Video de la charla" } },
    //       ],
    //     },
    //   ],
    // },
  ],

  // --------------------------------------------------------------------------
  // ERA5 — Streamlit apps embedded via iframe.
  // Each app needs a public Streamlit Cloud URL (or local dev URL for testing).
  // The `?embed=true` query strips Streamlit's menu so it looks integrated.
  // --------------------------------------------------------------------------
  era5: {
    intro: {
      en: "Interactive climate visualizations built on ERA5 reanalysis, hosted on Streamlit Cloud. Variables span surface fields (SST, CAPE, MSLP, 10-m winds, 2-m temperature) and pressure levels (PV, geopotential, winds, humidity, vorticity).",
      es: "Visualizaciones climáticas interactivas con reanálisis ERA5, alojadas en Streamlit Cloud. Variables: campos de superficie (SST, CAPE, MSLP, vientos a 10m, temperatura a 2m) y niveles de presión (PV, geopotencial, vientos, humedad, vorticidad).",
    },
    apps: [
      {
        title: { en: "Monthly Means + Anomalies", es: "Medias Mensuales + Anomalías" },
        desc: {
          en: "Pick any year (1980–2022), month, and variable. Toggle anomaly to see departure from the 1980-2010 climatology. Slide colour-bar limits or auto-scale.",
          es: "Elige cualquier año (1980–2022), mes y variable. Activa anomalía para ver la desviación de la climatología 1980-2010. Ajusta la barra de color o auto-escala.",
        },
        embedUrl: "https://era5app-alfredocegueda.streamlit.app/?embed=true&embed_options=light_theme,dark_theme,hide_loading_screen",
        openUrl:  "https://era5app-alfredocegueda.streamlit.app/",
        repo:     "https://github.com/Langosmon/ERA5_streamlit",
      },
      {
        title: { en: "Hourly Maps", es: "Mapas por hora" },
        desc: {
          en: "Pick a date (1940-present) and hour (UTC) to inspect the atmosphere at that exact moment. Same variable catalogue + colour-bar controls as the monthly app.",
          es: "Elige una fecha (1940-presente) y hora (UTC) para inspeccionar la atmósfera en ese instante. Mismo catálogo de variables y controles de la barra de color que la app mensual.",
        },
        embedUrl: "https://era5hourlyapp-alfredocegueda.streamlit.app/?embed=true&embed_options=light_theme,dark_theme,hide_loading_screen",
        openUrl:  "https://era5hourlyapp-alfredocegueda.streamlit.app/",
        repo:     "https://github.com/Langosmon/ERA5_hourly_streamlit",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // CV — embedded PDF
  // --------------------------------------------------------------------------
  cv: {
    intro: {
      en: "My CV is embedded below. Use the download button to save a copy.",
      es: "Mi CV está incrustado abajo. Usa el botón de descarga para guardar una copia.",
    },
    pdf: "files/cv.pdf",
  },

  // --------------------------------------------------------------------------
  // SITE LINKS — navigation labels + footer
  // --------------------------------------------------------------------------
  nav: [
    { href: "index.html",    key: "home",     label: { en: "Home",         es: "Inicio" } },
    { href: "research.html", key: "research", label: { en: "Research",     es: "Investigación" } },
    { href: "era5.html",     key: "era5",     label: { en: "ERA5",         es: "ERA5" } },
    { href: "places.html",   key: "places",   label: { en: "Places",       es: "Lugares" } },
    { href: "cv.html",       key: "cv",       label: { en: "CV",           es: "CV" } },
  ],

  links: {
    elsewhere: [
      { label: "GitHub",   href: "https://github.com/Langosmon" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/josé-alfredo-ocegueda-sanchez-a3598b122/" },
      { label: "ORCID",    href: "https://orcid.org/0009-0009-1982-2331" },
      { label: "Twitter",  href: "https://twitter.com/joceguedasan" },
    ],
  },

  // --------------------------------------------------------------------------
  // FOOTER — the closing line. Lean foodie/Jalisco here.
  // --------------------------------------------------------------------------
  footer: {
    cta: {
      en: "Always up to talk *cyclones, ITCZ, or tacos.*",
      es: "Siempre dispuesto a hablar de *ciclones, ZCIT, o tacos.*",
    },
  },
};

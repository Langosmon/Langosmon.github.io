// ============================================================================
// SITE CONTENT — edit this file to update every page on the site.
// ----------------------------------------------------------------------------
// Every translatable string is a { en, es } object. To add content, find the
// matching array (news, research, publications, places...) and append an entry.
// Inline markdown in body text: *italic*  and  [link text](url)
// See EDITING.md for a full guide.
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
    orcid: "0009-0009-1982-2331",
    portrait: "images/profile-720.jpg",
  },

  // --------------------------------------------------------------------------
  // ABOUT — paragraphs shown in the About section on the home page
  // --------------------------------------------------------------------------
  about: {
    en: [
      "I'm a Ph.D. candidate in the EAPS department at Purdue University, where I have been since 2022. I work with [Prof. Daniel Chavas](https://web.ics.purdue.edu/~dchavas/) to quantify the role of ITCZ breakdowns in tropical cyclogenesis in the Eastern Pacific.",
      "My research interests include weather and climate extremes such as hurricanes, monsoons, atmospheric rivers, cut-off lows, and atmospheric blocking. I enjoy formulating observation-based hypotheses and testing them by integrating theoretical frameworks with numerical modeling.",
      "I am particularly passionate about studying regions that have received relatively little scientific attention. For me, science is not only about understanding the Earth system, but also about producing knowledge that can serve people and communities.",
      "Outside of research, I'm a foodie; I see food and language as windows into other cultures and as delicious, human ways of connecting with one another.",
    ],
    es: [
      "Soy estudiante de doctorado en el Departamento de Ciencias de la Tierra, Atmosféricas y Planetarias de Purdue University, donde he estado desde 2022.",
      "Trabajo con el [Prof. Daniel Chavas](https://web.ics.purdue.edu/~dchavas/) para cuantificar el papel de los rompimientos de la ZCIT en la ciclogénesis tropical en el Pacífico Oriental. Mis intereses de investigación incluyen extremos meteorológicos y climáticos como huracanes, monzones, ríos atmosféricos, bajas segregadas y bloqueos atmosféricos.",
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
    { label: { en: "Languages", es: "Idiomas" },      value: "Español · English · 日本語 (少しだけ)" },
  ],

  // --------------------------------------------------------------------------
  // HOME EVIDENCE BEAT — a moment of actual science between About and News.
  // --------------------------------------------------------------------------
  evidence: {
    label: { en: "From the models", es: "Desde los modelos" },
    title: {
      en: "The wandering rain belt",
      es: "La franja de lluvia errante",
    },
    body: {
      en: "A year of tropical rainfall in a [SpeedyWeather.jl](https://github.com/SpeedyWeather/SpeedyWeather.jl) experiment: Earth's continents, a slab ocean, and *no mountains*. The sun swings through 47° of latitude every year; the gold line tracks how far the rains actually follow. The ocean's thermal memory keeps them pinned near the equator. Every cell you see is the model's real grid.",
      es: "Un año de lluvia tropical en un experimento con [SpeedyWeather.jl](https://github.com/SpeedyWeather/SpeedyWeather.jl): los continentes de la Tierra, un océano de capa mixta y *sin montañas*. El sol recorre 47° de latitud cada año; la línea dorada muestra cuánto lo siguen realmente las lluvias. La memoria térmica del océano las mantiene ancladas cerca del ecuador. Cada celda que ves es la malla real del modelo.",
    },
    media: {
      src: "assets/research/speedy-itcz-healpix.mp4",
      poster: "assets/research/speedy-itcz-healpix-poster.jpg",
      caption: {
        en: "SpeedyWeather.jl · OctaHEALPix grid · year 6 of 6 · rendered on a laptop",
        es: "SpeedyWeather.jl · malla OctaHEALPix · año 6 de 6 · renderizado en una laptop",
      },
    },
    cta: {
      href: "research.html",
      label: { en: "See the research", es: "Ver la investigación" },
    },
  },

  // --------------------------------------------------------------------------
  // NEWS — newest first. Date is ISO (YYYY-MM-DD).
  // To add an entry: copy a block, change the date/title/body, push.
  // Optional fields: featured, link, mediaSrc, mediaPoster, mediaCaption
  // --------------------------------------------------------------------------
  news: [
    {
      date: "2026-04-03",
      tag: { en: "Award", es: "Premiación" },
      featured: true,
      title: {
        en: "AMS Tropical Outstanding Student Poster Presentation",
        es: "Premio a la mejor presentación de póster estudiantil de la AMS en meteorología tropical",
      },
      body: {
        en: "I'm very honored to have received one of the Outstanding Student Poster Awards at AMS Tropical 2026. I presented my poster, *The Importance of Seed Types for Tropical Cyclone Genesis in the Eastern and Central Pacific*, where I shared my work on how different precursor disturbances may influence the likelihood of tropical cyclone genesis across the basin.",
        es: "Me siento muy honrado de haber recibido uno de los Premios al Póster Destacado para Estudiantes en el AMS Tropical 2026. Presenté mi póster titulado *La importancia de los tipos de semillas para la génesis de ciclones tropicales en el Pacífico oriental y central*, en el que compartí mi trabajo sobre cómo diferentes precursores de ciclones tropicales pueden influir en la probabilidad de génesis en todo el Pacífico este.",
      },
      link: {
        url: "assets/places/ams2026-poster.pdf",
        label: { en: "See the poster (PDF)", es: "Ver el póster (PDF)" },
      },
    },
    {
      date: "2025-12-19",
      tag: { en: "Conference", es: "Congreso" },
      title: {
        en: "AGU 2025: TC seeds poster + GeoBurst talk in New Orleans",
        es: "AGU 2025: póster de semillas de CT + charla GeoBurst en Nueva Orleans",
      },
      body: {
        en: "Presented new results on tropical cyclone seed types in the Eastern and Central Pacific (with Dan Chavas and Jane Baldwin, UC Irvine), plus a rapid-fire GeoBurst talk. The poster QR code points right back to this site.",
        es: "Presenté resultados nuevos sobre tipos de semillas de ciclones tropicales en el Pacífico Oriental y Central (con Dan Chavas y Jane Baldwin, UC Irvine), más una charla relámpago GeoBurst. El código QR del póster apunta de regreso a este sitio.",
      },
      link: {
        url: "assets/places/agu2025-poster.pdf",
        label: { en: "Poster (PDF)", es: "Póster (PDF)" },
      },
    },
    {
      date: "2025-11-08",
      tag: { en: "Outreach", es: "Divulgación" },
      featured: true,
      title: {
        en: "ClimART 2025: first Climate × Art competition at Purdue EAPS",
        es: "ClimART 2025: primer concurso de Clima × Arte en Purdue EAPS",
      },
      body: {
        en: "I finally launched the first Climate × Art competition at Purdue EAPS. ClimART exists because data can be gorgeous and art can be scientific. Plots, schematics, and paintings are all ways to say *hey, this is me*, even inside a lab.",
        es: "Finalmente lancé el primer concurso de Clima × Arte en Purdue EAPS. ClimART existe porque los datos pueden ser bellísimos y el arte puede ser científico. Gráficas, esquemas y pinturas son todas formas de decir *oye, este soy yo*, incluso dentro de un laboratorio.",
      },
      mediaSrc: "images/climart2025.mp4",
      mediaPoster: "images/climart2025-poster.jpg",
      mediaCaption: { en: "ClimART 2025 / winners reel", es: "ClimART 2025 / video de ganadores" },
    },
    {
      date: "2025-09-19",
      tag: { en: "Training", es: "Formación" },
      title: {
        en: "NCAS Climate Modelling Summer School (and a new toy: SpeedyWeather.jl)",
        es: "Escuela de Verano de Modelación Climática NCAS (y un juguete nuevo: SpeedyWeather.jl)",
      },
      body: {
        en: "Two weeks in the UK with the National Centre for Atmospheric Science, 80 hours of climate-model guts. Came home with a group project, new friends, and *SpeedyWeather.jl*, the little Julia model behind the rain-belt animation on the home page.",
        es: "Dos semanas en el Reino Unido con el National Centre for Atmospheric Science, 80 horas de entrañas de modelos climáticos. Volví con un proyecto de equipo, nuevas amistades y *SpeedyWeather.jl*, el pequeño modelo en Julia detrás de la animación de la franja de lluvia en la página de inicio.",
      },
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
        en: "First paper published in GRL",
        es: "Primer artículo publicado en GRL",
      },
      body: {
        en: "My first Purdue project (Eastern North Pacific tropical cyclone landfalls) landed in *Geophysical Research Letters* (with Dan Chavas and Jhordanne Jones). Headline findings: (1) ENP landfalls have a bimodal seasonal cycle set up by the region's orography; (2) in high-landfall years a northward-shifted ITCZ turns the steering winds westerly, guiding storms into vulnerable Southwest Mexico; (3) steering-wind anomalies (not storm counts) drive the year-to-year variability.",
        es: "Mi primer proyecto en Purdue (llegadas a tierra de ciclones tropicales del Pacífico Norte oriental) se publicó en *Geophysical Research Letters* (con Dan Chavas y Jhordanne Jones). Hallazgos: (1) las llegadas a tierra en el ENP tienen un ciclo estacional bimodal moldeado por la orografía de la región; (2) en años de muchas llegadas, una ZCIT desplazada al norte vuelve *westerlies* los vientos de dirección, guiando tormentas hacia el vulnerable suroeste de México; (3) las anomalías del viento de dirección (no el número de tormentas) dominan la variabilidad interanual.",
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
        es: "Preprint de llegadas a tierra ENP en ESS Open Archive",
      },
      body: {
        en: "Posted the preprint version of the ENP landfalls manuscript ahead of acceptance.",
        es: "Publiqué la versión preprint del manuscrito de llegadas a tierra en el ENP antes de su aceptación.",
      },
      link: {
        url: "https://essopenarchive.org/doi/full/10.22541/essoar.173238661.14573770",
        label: { en: "Read preprint", es: "Leer preprint" },
      },
    },
  ],

  // --------------------------------------------------------------------------
  // RESEARCH — shown on research.html.
  // media: { kind: "video"|"image", src, poster, caption } (all optional)
  // quote: { text, cite } renders as an editorial pull-quote (optional)
  // --------------------------------------------------------------------------
  research: [
    {
      num: "01",
      title: {
        en: "Why Pacific Hurricanes Strike Mexico, and When",
        es: "Por qué los huracanes del Pacífico golpean México, y cuándo",
      },
      tags: ["Tropical Cyclones", "Landfall", "Steering Winds", "GRL 2025"],
      body: {
        en: "The Eastern North Pacific is the densest tropical cyclone basin on Earth, yet its landfall variability was barely studied. We found that the seasonal cycle of landfalls in the basin is *bimodal*, with a first peak in June and a second in September-October. The drought in July is associated with the Caribbean low-level jet that passes through the gap in the cordillera at Papagayo. The steering winds (not genesis density) are what decide who gets hit: when the ITCZ sits farther north, cross-equatorial winds curl into westerlies that guide hurricanes into the vulnerable Southwest Mexico. Published in [Geophysical Research Letters](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL113807).",
        es: "El Pacífico Norte oriental es la cuenca de ciclones tropicales más densa del planeta, y aun así la variabilidad de sus llegadas a tierra estaba apenas estudiada. Encontramos que el ciclo estacional de llegadas a tierra en la cuenca es *bimodal*, con un primer pico en junio y un segundo en septiembre-octubre. La sequía de julio está asociada al jet de bajo nivel del Caribe, que se cuela por el paso de la cordillera en Papagayo. Los vientos de dirección (no la densidad de génesis) son los que deciden a quién le toca: cuando la ZCIT se asienta más al norte, los vientos que cruzan el ecuador se curvan en *westerlies* que guían huracanes hacia el vulnerable suroeste de México. Publicado en [Geophysical Research Letters](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL113807).",
      },
      quote: {
        text: {
          en: "The Eastern North Pacific differs from most basins: land lies east of where storms form, so it takes a weakening of the easterlies to steer a storm onto the coast.",
          es: "El Pacífico Norte oriental es distinto a casi todas las cuencas: la tierra queda al este de donde nacen las tormentas, así que hace falta que los *easterlies* se debiliten para que una tormenta llegue a la costa.",
        },
        cite: "GRL 2025 · doi:10.1029/2024GL113807",
      },
      media: {
        kind: "image",
        src: "assets/research/grl-scheme.jpg",
        caption: {
          en: "The June steering tug-of-war (Fig. 4b, GRL 2025): ITCZ cross-equatorial winds (red) vs the Caribbean jet (blue) and gap winds (purple) at Tehuantepec, Papagayo, Panama",
          es: "El estira y afloja de junio (Fig. 4b, GRL 2025): vientos de la ZCIT que cruzan el ecuador (rojo) vs el jet del Caribe (azul) y los vientos de paso (morado) en Tehuantepec, Papagayo, Panamá",
        },
      },
      link: {
        url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL113807",
        label: { en: "Read the paper", es: "Leer el artículo" },
      },
    },
    {
      num: "02",
      title: {
        en: "ITCZ Breakdown & the Seeds of East Pacific Cyclones",
        es: "Ruptura de la ZCIT y las semillas de los ciclones del Pacífico Oriental",
      },
      tags: ["ITCZ", "Cyclogenesis", "TC Seeds", "GridSat", "ERA5"],
      body: {
        en: "Sometimes the tropical rain band itself becomes unstable and rolls up into a string of vortices, an *ITCZ breakdown*. I'm building the climatology of these events and asking how often they seed tropical cyclones in the Eastern North Pacific, combining satellite IR imagery, CNN-derived ITCZ axes, seed tracks, and ERA5 fields. Early results (AGU 2025, AMS 2026): seeds born near the curvature-rich, *moisture-trough* state of the band develop into storms far more often than seeds sitting in the classic shear-dominated ITCZ.",
        es: "A veces la propia banda de lluvia tropical se vuelve inestable y se enrolla en una cadena de vórtices, una *ruptura de la ZCIT*. Estoy construyendo la climatología de estos eventos y preguntando con qué frecuencia siembran ciclones tropicales en el Pacífico Norte oriental, combinando imágenes IR de satélite, ejes de la ZCIT derivados con redes neuronales, trayectorias de semillas y campos de ERA5. Resultados preliminares (AGU 2025, AMS 2026): las semillas nacidas cerca del estado rico en curvatura (la *vaguada húmeda*) se convierten en tormentas mucho más seguido que las semillas en la ZCIT clásica dominada por cizalladura.",
      },
      media: {
        kind: "video",
        src: "assets/research/itcz-breakdown-case27.mp4",
        poster: "assets/research/itcz-breakdown-case27-poster.jpg",
        caption: {
          en: "A textbook vortex roll-up, 19–26 Sep 2000: satellite IR (top), CNN-tracked ITCZ/moisture-trough axes (middle), seed tracks (bottom). No named storm ever forms.",
          es: "Un enrollamiento de vórtices de libro, 19–26 sep 2000: IR de satélite (arriba), ejes ZCIT/vaguada húmeda por CNN (centro), trayectorias de semillas (abajo). Ninguna tormenta con nombre llega a formarse.",
        },
      },
    },
    {
      num: "03",
      title: {
        en: "Terrain Surgery: What the Mountains Do to East Pacific Hurricanes",
        es: "Cirugía de terreno: lo que las montañas le hacen a los huracanes del Pacífico Oriental",
      },
      tags: ["MPAS-A", "Modeling", "Orography", "TC Genesis"],
      body: {
        en: "What if the Andes and the Central American cordillera simply weren't there? In year-long global simulations with MPAS-Atmosphere on a variable-resolution mesh (refined to 15 km over the East Pacific), we surgically flatten the mountains and watch the basin respond: tracked storms collapse from 29 to 12, the ITCZ slides equatorward, and the low-shear incubator that shelters developing storms disappears. The mountains, it turns out, are quietly running the show.",
        es: "¿Y si los Andes y la cordillera centroamericana simplemente no estuvieran? En simulaciones globales de un año con MPAS-Atmosphere sobre una malla de resolución variable (refinada a 15 km sobre el Pacífico Oriental), aplanamos quirúrgicamente las montañas y observamos la respuesta de la cuenca: las tormentas detectadas se desploman de 29 a 12, la ZCIT se desliza hacia el ecuador, y desaparece la incubadora de baja cizalladura que protege a las tormentas en formación. Resulta que las montañas dirigen la función calladamente.",
      },
      media: {
        kind: "video",
        src: "assets/research/mpas-terrain-surgery.mp4",
        poster: "assets/research/mpas-terrain-surgery-poster.jpg",
        caption: {
          en: "The surgery itself: the cordillera is erased, and East & Central Pacific TCs drop 29 → 12",
          es: "La cirugía misma: la cordillera se borra, y los CT del Pacífico Oriental y Central caen 29 → 12",
        },
      },
      media2: {
        kind: "video",
        src: "assets/research/mpas-living-planet.mp4",
        poster: "assets/research/mpas-living-planet-poster.jpg",
        caption: {
          en: "The control run as a living planet: ventilated potential intensity glowing over the oceans, the ITCZ in gold, TC tracks growing by intensity, with the 60→15 km mesh visible as texture",
          es: "La simulación de control como planeta vivo: la intensidad potencial ventilada brilla sobre los océanos, la ZCIT en dorado, trayectorias de CT creciendo por intensidad, con la malla de 60→15 km visible como textura",
        },
      },
    },
    {
      num: "04",
      title: {
        en: "The Wandering Rain Belt (a SpeedyWeather side quest)",
        es: "La franja de lluvia errante (una misión secundaria con SpeedyWeather)",
      },
      tags: ["SpeedyWeather.jl", "Julia", "ITCZ", "Idealized Modeling"],
      body: {
        en: "Born at the NCAS Climate Modelling Summer School in the UK: a ladder of idealized experiments with *SpeedyWeather.jl*, climbing from a dry aquaplanet to Earth's continents with a slab ocean (and no mountains), all integrated on a laptop. The punchline of the final rung: the sun migrates 47° of latitude a year, but the ocean's thermal memory pins tropical rain near the equator; with continents and zero orography, 90% of tropical rain still falls over the sea, and monsoon-like reversals appear over all five classic monsoon regions anyway.",
        es: "Nació en la Escuela de Verano de Modelación Climática de NCAS en el Reino Unido: una escalera de experimentos idealizados con *SpeedyWeather.jl*, subiendo desde un aquaplaneta seco hasta los continentes de la Tierra con un océano de capa mixta (y sin montañas), todo integrado en una laptop. El remate del último peldaño: el sol migra 47° de latitud al año, pero la memoria térmica del océano ancla la lluvia tropical cerca del ecuador; con continentes y cero orografía, el 90 % de la lluvia tropical sigue cayendo sobre el mar, y aun así aparecen reversos monzónicos en las cinco regiones monzónicas clásicas.",
      },
      media: {
        kind: "video",
        src: "assets/research/speedy-itcz-healpix.mp4",
        poster: "assets/research/speedy-itcz-healpix-poster.jpg",
        caption: {
          en: "Every polygon is a real model cell (OctaHEALPix grid). Rainfall glows teal-to-white, and the gold line tracks the rain belt against the sun",
          es: "Cada polígono es una celda real del modelo (malla OctaHEALPix). La lluvia brilla de turquesa a blanco y la línea dorada sigue la franja de lluvia frente al sol",
        },
      },
    },
    {
      num: "05",
      title: {
        en: "Monsoon and Cyclone Coupling",
        es: "Acoplamiento entre monzón y ciclón",
      },
      tags: ["Monsoon", "TC", "Tropical Dynamics"],
      body: {
        en: "How monsoon onsets and breaks modulate the large-scale environment that tropical cyclones rely on (vorticity, shear, moisture) across the Northern Hemisphere basins. The dynamical-seasonality lens from the GRL paper, pointed at the rest of the tropics.",
        es: "Cómo los inicios y pausas del monzón modulan el ambiente de gran escala del que dependen los ciclones tropicales (vorticidad, cizalladura, humedad) en las cuencas del hemisferio norte. La mirada de estacionalidad dinámica del artículo en GRL, apuntada al resto de los trópicos.",
      },
    },
  ],

  // --------------------------------------------------------------------------
  // PUBLICATIONS — formal list shown at the bottom of research.html
  // --------------------------------------------------------------------------
  publications: [
    {
      year: 2025,
      authors: "Ocegueda Sanchez, J. A., Chavas, D. R., & Jones, J. J.",
      title: {
        en: "Interannual Variability of Tropical Cyclone Landfalls in the Eastern North Pacific: Environmental Drivers and Implications",
        es: "Variabilidad interanual de las llegadas a tierra de ciclones tropicales en el Pacífico Norte oriental: motores ambientales e implicaciones",
      },
      venue: "Geophysical Research Letters",
      doi: "10.1029/2024GL113807",
      url: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL113807",
      tag: { en: "Journal", es: "Revista" },
    },
    {
      year: 2024,
      authors: "Ocegueda Sanchez, J. A., Chavas, D. R., & Jones, J. J.",
      title: {
        en: "Interannual Variability of Tropical Cyclone Landfalls in the Eastern North Pacific (Preprint)",
        es: "Variabilidad interanual de las llegadas a tierra de ciclones tropicales en el Pacífico Norte oriental (Preprint)",
      },
      venue: "ESS Open Archive",
      url: "https://essopenarchive.org/doi/full/10.22541/essoar.173238661.14573770",
      tag: { en: "Preprint", es: "Preprint" },
    },
  ],

  // --------------------------------------------------------------------------
  // PLACES — entries on the world map (places.html)
  // Multiple entries per city are allowed (group via the `city` field).
  // Coordinates in lat/lon. tag examples: Conference | Workshop | Talk |
  // Summer school | Tutorial | Origin | Home base
  // remote: true marks an event attended online (pin renders hollow).
  // brief = one-liner; story = the longer reflection shown in the popup.
  // materials: array of { kind: "pdf" | "video" | "image" | "link", src, label, poster? }
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
          story: {
            en: "Physics degree at the Universidad de Guadalajara, with the Best of the Generation medal and a thesis simulating turbidity currents in a volcanic lake. Before that, industrial chemistry at CETI, where a new industrial design earned a Jalisco state innovation award (and a patent). The tacos remain undefeated.",
            es: "Licenciatura en física en la Universidad de Guadalajara, con medalla al Mejor de la Generación y una tesis simulando corrientes de turbidez en un lago volcánico. Antes, química industrial en el CETI, donde un nuevo diseño industrial ganó el premio estatal de innovación de Jalisco (y una patente). Los tacos siguen invictos.",
          },
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
          story: {
            en: "Since 2022: the GRL landfall paper, the ITCZ breakdown climatology, MPAS terrain-surgery runs on the Negishi cluster, plus organizing Storm Snacks, TAing the hurricanes course, and founding ClimART.",
            es: "Desde 2022: el artículo de llegadas a tierra en GRL, la climatología de rupturas de la ZCIT, simulaciones de cirugía de terreno con MPAS en el clúster Negishi, además de organizar Storm Snacks, ser TA del curso de huracanes y fundar ClimART.",
          },
        },
        {
          date: "2025-11-08",
          tag: { en: "Outreach", es: "Divulgación" },
          title: { en: "ClimART 2025: Climate × Art competition", es: "ClimART 2025: Concurso Clima × Arte" },
          brief: {
            en: "Founded and organized the first Climate × Art competition at Purdue EAPS. Data can be gorgeous; art can be scientific.",
            es: "Fundé y organicé el primer concurso de Clima × Arte en Purdue EAPS. Los datos pueden ser bellísimos; el arte puede ser científico.",
          },
          materials: [
            { kind: "video", src: "images/climart2025.mp4", poster: "images/climart2025-poster.jpg",
              label: { en: "Winners reel", es: "Video de ganadores" } },
          ],
        },
      ],
    },
    {
      city: "Champaign, IL",
      lat: 40.1164, lon: -88.2434,
      entries: [
        {
          date: "2023-09-15",
          tag: { en: "Conference", es: "Congreso" },
          title: { en: "MSCAR 2023: first conference talk", es: "MSCAR 2023: primera charla en congreso" },
          brief: {
            en: "The Midwest Student Conference on Atmospheric Research: first public outing of the ENP landfall work.",
            es: "El congreso estudiantil del Medio Oeste en investigación atmosférica: primera salida pública del trabajo de llegadas a tierra en el ENP.",
          },
          story: {
            en: "Every project has a first audience. This one was students like me, which is the friendliest possible crowd to discover which slides don't work.",
            es: "Todo proyecto tiene una primera audiencia. Esta fue de estudiantes como yo, el público más amable posible para descubrir qué diapositivas no funcionan.",
          },
        },
      ],
    },
    {
      city: "San Francisco, CA",
      lat: 37.7749, lon: -122.4194,
      entries: [
        {
          date: "2023-12-11",
          tag: { en: "Conference", es: "Congreso" },
          title: { en: "AGU Fall Meeting 2023: ENP landfalls iPoster", es: "AGU Fall Meeting 2023: iPóster de llegadas ENP" },
          brief: {
            en: "First AGU. Presented the landfall-variability work that became the GRL paper.",
            es: "Primer AGU. Presenté el trabajo de variabilidad de llegadas a tierra que se convirtió en el artículo de GRL.",
          },
          story: {
            en: "Twenty-five thousand geoscientists in one building is a weather system of its own. The iPoster format meant animations instead of paper, a preview of how I'd end up telling this story ever since.",
            es: "Veinticinco mil geocientíficos en un edificio son un sistema meteorológico propio. El formato iPóster permitió animaciones en vez de papel, un adelanto de cómo terminaría contando esta historia desde entonces.",
          },
        },
      ],
    },
    {
      city: "Baltimore, MD",
      lat: 39.2904, lon: -76.6122,
      entries: [
        {
          date: "2024-01-29",
          tag: { en: "Conference", es: "Congreso" },
          title: { en: "AMS Annual Meeting 2024: landfalls talk", es: "AMS Annual Meeting 2024: charla de llegadas a tierra" },
          brief: {
            en: "Oral presentation on ENP landfall drivers at the 6th Special Symposium on Tropical Meteorology.",
            es: "Presentación oral sobre los motores de las llegadas a tierra del ENP en el 6.º Simposio Especial de Meteorología Tropical.",
          },
        },
      ],
    },
    {
      city: "Long Beach, CA",
      lat: 33.7701, lon: -118.1937,
      entries: [
        {
          date: "2024-05-08",
          tag: { en: "Conference", es: "Congreso" },
          title: { en: "AMS 36th Hurricanes & Tropical Meteorology: talk", es: "AMS 36.ª Huracanes y Meteorología Tropical: charla" },
          brief: {
            en: "The hurricanes conference: an oral on what drives ENP landfall variability, in front of the people who wrote the textbooks.",
            es: "El congreso de huracanes: una charla sobre qué controla la variabilidad de llegadas a tierra del ENP, frente a quienes escribieron los libros de texto.",
          },
        },
      ],
    },
    {
      city: "Honolulu, HI",
      lat: 21.3069, lon: -157.8583,
      entries: [
        {
          date: "2024-06-03",
          tag: { en: "Conference", es: "Congreso" },
          title: { en: "Symposium on Hurricane Risk in a Changing Climate", es: "Simposio de Riesgo de Huracanes en un Clima Cambiante" },
          brief: {
            en: "Poster on ENP landfall variability at SHRCC 2024, the risk community's take on the same coastline.",
            es: "Póster sobre la variabilidad de llegadas a tierra del ENP en SHRCC 2024, la mirada de la comunidad de riesgo al mismo litoral.",
          },
          story: {
            en: "A small, sharp meeting about who actually gets hurt by hurricanes. Presenting Mexican landfall science in the middle of the Pacific felt exactly right.",
            es: "Una reunión pequeña y afilada sobre quiénes de verdad salen lastimados por los huracanes. Presentar ciencia de llegadas a tierra mexicanas en medio del Pacífico se sintió exactamente correcto.",
          },
          materials: [
            { kind: "pdf", src: "assets/places/shrcc2024-poster.pdf", label: { en: "Poster (PDF)", es: "Póster (PDF)" } },
          ],
        },
      ],
    },
    {
      city: "Washington, DC",
      lat: 38.9072, lon: -77.0369,
      entries: [
        {
          date: "2024-09-30",
          tag: { en: "Tutorial", es: "Tutorial" },
          title: { en: "MPAS-Atmosphere & MPAS-JEDI tutorials (NCAR MMM)", es: "Tutoriales MPAS-Atmosphere y MPAS-JEDI (NCAR MMM)" },
          brief: {
            en: "A week at Howard University learning to build, configure, and run MPAS, the model behind the terrain-surgery experiments.",
            es: "Una semana en Howard University aprendiendo a compilar, configurar y correr MPAS, el modelo detrás de los experimentos de cirugía de terreno.",
          },
        },
        {
          date: "2024-12-09",
          tag: { en: "Conference", es: "Congreso" },
          title: { en: "AGU Fall Meeting 2024: TC seeds poster", es: "AGU Fall Meeting 2024: póster de semillas de CT" },
          brief: {
            en: "Poster on how preexisting disturbance types (shallow vs deep easterly waves vs ITCZ breakdowns) shape the vertical structure of TC seeds.",
            es: "Póster sobre cómo los tipos de perturbaciones preexistentes (ondas del este someras vs profundas vs rupturas de la ZCIT) moldean la estructura vertical de las semillas de CT.",
          },
          story: {
            en: "The pivot meeting: from where storms go (landfalls) to where they come from (seeds). ITCZ-breakdown seeds turned out to spin faster and sit deeper than wave seeds.",
            es: "El congreso bisagra: de a dónde van las tormentas (llegadas a tierra) a de dónde vienen (semillas). Las semillas de rupturas de la ZCIT resultaron girar más rápido y ser más profundas que las de las ondas.",
          },
          materials: [
            { kind: "pdf", src: "assets/places/agu2024-poster.pdf", label: { en: "Poster (PDF)", es: "Póster (PDF)" } },
          ],
        },
      ],
    },
    {
      city: "Mexico City, MX",
      lat: 19.4326, lon: -99.1332,
      entries: [
        {
          date: "2025-01-20",
          tag: { en: "Workshop", es: "Taller" },
          title: { en: "ICTP-UNAM Workshop on Global Monsoons", es: "Taller ICTP-UNAM de Monzones Globales" },
          brief: {
            en: "A week at UNAM on monsoon theory, models, and observations, from Hadley cells to deep convection.",
            es: "Una semana en la UNAM sobre teoría, modelos y observaciones de monzones, de las celdas de Hadley a la convección profunda.",
          },
          story: {
            en: "Doing tropical meteorology *in* Mexico, in Spanish, at the national university. The kind of week that reminds you who the science is for.",
            es: "Hacer meteorología tropical *en* México, en español, en la universidad nacional. La clase de semana que te recuerda para quién es la ciencia.",
          },
        },
      ],
    },
    {
      city: "Boulder, CO",
      lat: 40.0150, lon: -105.2705,
      entries: [
        {
          date: "2025-07-28",
          tag: { en: "Workshop", es: "Taller" },
          title: { en: "NCAR CELCIUS: visitor week at MMM", es: "NCAR CELCIUS: semana de visita en MMM" },
          brief: {
            en: "A week at NSF NCAR's Mesoscale & Microscale Meteorology Lab: short science talk + poster on TC seed types in the Eastern and Central Pacific.",
            es: "Una semana en el laboratorio de Meteorología de Mesoescala y Microescala de NSF NCAR: charla corta + póster sobre tipos de semillas de CT en el Pacífico Oriental y Central.",
          },
          story: {
            en: "Hosted by Rosimar Ríos-Berríos. A week of hallway conversations with the people who build the models I run. The seed-types story sharpened fast here.",
            es: "Con Rosimar Ríos-Berríos como anfitriona. Una semana de conversaciones de pasillo con quienes construyen los modelos que yo corro. La historia de tipos de semillas se afiló rápido aquí.",
          },
        },
      ],
    },
    {
      city: "Trieste, IT",
      lat: 45.6495, lon: 13.7768,
      remote: true,
      entries: [
        {
          date: "2025-05-05",
          tag: { en: "Summer school", es: "Escuela de verano" },
          title: { en: "ICTP School on Climate Dynamics: AI & Climate Modelling (online)", es: "Escuela ICTP de Dinámica del Clima: IA y Modelación Climática (en línea)" },
          brief: {
            en: "Two weeks of hierarchical climate modelling and machine learning with ICTP (attended remotely, poster included).",
            es: "Dos semanas de modelación climática jerárquica y aprendizaje automático con el ICTP (asistencia remota, póster incluido).",
          },
        },
      ],
    },
    {
      city: "Leeds, UK",
      lat: 53.8067, lon: -1.5550,
      entries: [
        {
          date: "2025-09-08",
          tag: { en: "Summer school", es: "Escuela de verano" },
          title: { en: "NCAS Climate Modelling Summer School", es: "Escuela de Verano de Modelación Climática NCAS" },
          brief: {
            en: "80 hours inside climate models with the National Centre for Atmospheric Science, where SpeedyWeather.jl entered my life.",
            es: "80 horas dentro de los modelos climáticos con el National Centre for Atmospheric Science, donde SpeedyWeather.jl entró a mi vida.",
          },
          story: {
            en: "Dynamical cores by day, group project by night, trains to London on the weekend. The ITCZ experiments I started here grew into the rain-belt animation on the home page.",
            es: "Núcleos dinámicos de día, proyecto de equipo de noche, trenes a Londres el fin de semana. Los experimentos de ZCIT que empecé aquí crecieron hasta ser la animación de la franja de lluvia en la página de inicio.",
          },
        },
      ],
    },
    {
      city: "New Orleans, LA",
      lat: 29.9511, lon: -90.0715,
      entries: [
        {
          date: "2025-12-15",
          tag: { en: "Conference", es: "Congreso" },
          title: { en: "AGU Fall Meeting 2025: seed types poster + GeoBurst", es: "AGU Fall Meeting 2025: póster de tipos de semillas + GeoBurst" },
          brief: {
            en: "Poster on the importance of seed types for TC genesis in the Eastern and Central Pacific (with Chavas & Baldwin), plus a GeoBurst rapid talk.",
            es: "Póster sobre la importancia de los tipos de semillas para la génesis de CT en el Pacífico Oriental y Central (con Chavas y Baldwin), más una charla relámpago GeoBurst.",
          },
          story: {
            en: "The vortex roll-up animation on the poster did the recruiting; the QR code brought people here. If that was you: welcome.",
            es: "La animación del enrollamiento de vórtices en el póster hizo el reclutamiento; el código QR trajo a la gente aquí. Si fuiste tú: bienvenido.",
          },
          materials: [
            { kind: "pdf", src: "assets/places/agu2025-poster.pdf", label: { en: "Poster (PDF)", es: "Póster (PDF)" } },
            { kind: "video", src: "assets/places/itcz-vortex-agu25.mp4", poster: "assets/places/itcz-vortex-agu25-poster.jpg",
              label: { en: "ITCZ vortex roll-up animation", es: "Animación del enrollamiento de vórtices de la ZCIT" } },
          ],
        },
      ],
    },
    {
      city: "San Diego, CA",
      lat: 32.7157, lon: -117.1611,
      entries: [
        {
          date: "2026-03-30",
          tag: { en: "Conference", es: "Congreso" },
          title: { en: "AMS 37th Hurricanes: 2nd place student poster 🏆", es: "AMS 37.ª Huracanes: 2.º lugar póster estudiantil 🏆" },
          brief: {
            en: "The seed-types poster earned second place, Outstanding Student Poster Presentation.",
            es: "El póster de tipos de semillas ganó el segundo lugar como Póster Estudiantil Sobresaliente.",
          },
          story: {
            en: "The same coastline Hurricane Hilary soaked in 2023, now full of hurricane scientists. Bringing home an AMS award for East Pacific seeds science felt like the basin finally getting its due.",
            es: "El mismo litoral que el huracán Hilary empapó en 2023, ahora lleno de científicos de huracanes. Traer a casa un premio de la AMS por ciencia de semillas del Pacífico Oriental se sintió como si por fin la cuenca recibiera lo suyo.",
          },
          materials: [
            { kind: "pdf", src: "assets/places/ams2026-poster.pdf", label: { en: "Poster (PDF)", es: "Póster (PDF)" } },
            { kind: "pdf", src: "assets/places/ams2026-award.pdf", label: { en: "Award certificate", es: "Certificado del premio" } },
          ],
        },
      ],
    },
  ],

  // --------------------------------------------------------------------------
  // SCIENCE MAPS — Streamlit apps embedded via iframe, grouped into in-page
  // tabs (one tab per `groups` entry). Each app needs a public Streamlit
  // Cloud URL (or local dev URL for testing). The `?embed=true` query strips
  // Streamlit's menu so it looks integrated.
  // `pending: true` on an app renders a "coming online" card instead of the
  // iframe — flip it to false (or delete the line) once the app is deployed.
  // --------------------------------------------------------------------------
  scienceMaps: {
    intro: {
      en: "Interactive climate maps hosted on Streamlit Cloud, with tropical cyclone diagnostics on one tab and general ERA5 reanalysis browsing on the other.",
      es: "Mapas climáticos interactivos alojados en Streamlit Cloud, con diagnósticos de ciclones tropicales en una pestaña y exploración general del reanálisis ERA5 en la otra.",
    },
    groups: [
      {
        key: "tcdiag",
        label: { en: "TC Diagnostics", es: "Diagnósticos de CT" },
        desc: {
          en: "Tropical cyclone genesis and intensity diagnostics computed from ERA5 with the lab's [tcpyVPI](https://github.com/drchavas/tcpyVPI) package: ventilated potential intensity (vPI), potential intensity (PI), the ventilation index, and the ventilated genesis potential index (GPIv), following *Chavas, Camargo & Tippett (2025, J. Climate)*.",
          es: "Diagnósticos de génesis e intensidad de ciclones tropicales calculados a partir de ERA5 con [tcpyVPI](https://github.com/drchavas/tcpyVPI), el paquete del laboratorio: intensidad potencial ventilada (vPI), intensidad potencial (PI), el índice de ventilación y el índice de potencial de génesis ventilado (GPIv), siguiendo a *Chavas, Camargo y Tippett (2025, J. Climate)*.",
        },
        apps: [
          {
            title: { en: "vPI · PI · Ventilation · GPIv", es: "vPI · PI · Ventilación · GPIv" },
            desc: {
              en: "A 1980–2022 climatology of seven diagnostics: monthly and seasonal (JJA / SON / JJASON) means, plus daily 6-hourly maps with anomalies against the long-term climatology.",
              es: "Una climatología 1980–2022 de siete diagnósticos: medias mensuales y estacionales (JJA / SON / JJASON), más mapas diarios cada 6 horas con anomalías respecto a la climatología de largo plazo.",
            },
            pending: false,   // live at tcvpi-plots.streamlit.app
            embedUrl: "https://tcvpi-plots.streamlit.app/?embed=true&embed_options=hide_loading_screen",
            openUrl:  "https://tcvpi-plots.streamlit.app/",
            repo:     "https://github.com/Langosmon/TCdiag_streamlit",
          },
        ],
      },
      {
        key: "era5",
        label: { en: "ERA5 Reanalysis", es: "Reanálisis ERA5" },
        desc: {
          en: "General ERA5 reanalysis browsing. Variables span surface fields (SST, CAPE, MSLP, 10-m winds, 2-m temperature) and pressure levels (PV, geopotential, winds, humidity, vorticity). Draw a box on any map to rescale the colour-bar to that region.",
          es: "Exploración general del reanálisis ERA5. Variables: campos de superficie (SST, CAPE, MSLP, vientos a 10 m, temperatura a 2 m) y niveles de presión (PV, geopotencial, vientos, humedad, vorticidad). Dibuja un recuadro en cualquier mapa para reescalar la barra de color a esa región.",
        },
        apps: [
          {
            title: { en: "Monthly Means + Anomalies", es: "Medias Mensuales + Anomalías" },
            desc: {
              en: "Pick any year (1980–2022), month, and variable. Toggle anomaly to see departure from the 1980–2010 climatology. Focus the colour-bar on a preset region or a box you draw.",
              es: "Elige cualquier año (1980–2022), mes y variable. Activa anomalía para ver la desviación de la climatología 1980–2010. Enfoca la barra de color en una región predefinida o en un recuadro que dibujes.",
            },
            embedUrl: "https://era5app-alfredocegueda.streamlit.app/?embed=true&embed_options=hide_loading_screen",
            openUrl:  "https://era5app-alfredocegueda.streamlit.app/",
            repo:     "https://github.com/Langosmon/ERA5_streamlit",
          },
          {
            title: { en: "Hourly Maps", es: "Mapas por hora" },
            desc: {
              en: "Pick a date (1940 to near-present) and hour (UTC) to inspect the atmosphere at that exact moment. It opens on Hurricane Otis at landfall. Same variable catalogue and region tools as the monthly app.",
              es: "Elige una fecha (de 1940 a casi el presente) y hora (UTC) para inspeccionar la atmósfera en ese instante. Abre con el huracán Otis tocando tierra. Mismo catálogo de variables y herramientas de región que la app mensual.",
            },
            embedUrl: "https://era5hourlyapp-alfredocegueda.streamlit.app/?embed=true&embed_options=hide_loading_screen",
            openUrl:  "https://era5hourlyapp-alfredocegueda.streamlit.app/",
            repo:     "https://github.com/Langosmon/ERA5_hourly_streamlit",
          },
        ],
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
  // SITE LINKS — navigation labels + footer. `num` is the chapter number the
  // sub-pages show in their section labels (keep in nav order).
  // --------------------------------------------------------------------------
  nav: [
    { href: "index.html",    key: "home",     label: { en: "Home",         es: "Inicio" } },
    { href: "research.html", key: "research", num: "01", label: { en: "Research",     es: "Investigación" } },
    { href: "science-maps.html", key: "science", num: "02", label: { en: "Science Maps", es: "Mapas Científicos" } },
    { href: "places.html",   key: "places",   num: "03", label: { en: "Places",       es: "Lugares" } },
    { href: "cv.html",       key: "cv",       num: "04", label: { en: "CV",           es: "CV" } },
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
      es: "Siempre dispuesto a hablar de *ciclones, ZCIT o tacos.*",
    },
  },
};

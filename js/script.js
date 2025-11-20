// script.js
// Handles dark mode toggling, language switching, and dynamic year update.

// Wait until DOM is loaded before running script
document.addEventListener('DOMContentLoaded', () => {
  const darkToggle = document.getElementById('dark-toggle');
  const langToggle = document.getElementById('lang-toggle');
  const body = document.body;

  // Load preferences from localStorage if available
  const storedTheme = localStorage.getItem('theme');
  const storedLang = localStorage.getItem('lang');

  // Track current language (default to English)
  let currentLang = storedLang || 'en';

  if (storedTheme === 'dark') {
    body.classList.add('dark-mode');
  }
  if (storedLang === 'es') {
    currentLang = 'es';
    langToggle.textContent = 'EN';
    applyTranslations();
  }

  // Dark mode toggle handler
  darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });

  // Language toggle handler
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    localStorage.setItem('lang', currentLang);
    langToggle.textContent = currentLang === 'en' ? 'ES' : 'EN';
    applyTranslations();
  });

  // Update the copyright year dynamically
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Translation dictionary
  const translations = {
    en: {
      siteTitle: 'Jose Alfredo Ocegueda Sanchez',
      siteName: 'Jose Alfredo',
      navHome: 'Home',
      navResearch: 'Research',
      navCV: 'CV',
      heroTitle: 'Jose Alfredo Ocegueda Sanchez',
      heroSubtitle: 'Ph.D. Student in Atmospheric Sciences',
      aboutTitle: 'About Me',
      aboutContent: `I'm José Alfredo Ocegueda Sanchez, originally from Guadalajara Jalisco in Mexico. I'm currently a Ph.D. candidate in atmospheric science at Purdue University, working with Dan Chavas. My scientific interests are in tropical climate and tropical dynamics, particularly Tropical Cyclones and Monsoon systems. I'm also a foodie, and I love to see food (and languages!) as a window towards other cultures and to express ourselves in an easier (and delicious) way.`,
      footerName: 'Jose Alfredo Ocegueda Sanchez',
      researchPageTitle: 'Research – Jose Alfredo',
      researchTitle: 'Research',
      researchIntro: `Below you’ll find a selection of my research projects. Images and animations are
      included to visually communicate the essence of each project. Replace these
      placeholders with your own figures, GIFs, or movies. Videos will autoplay and
      loop by default.`,
      project1Title: 'Tropical Cyclone Genesis',
      project1Desc: `Investigating the environmental conditions and atmospheric dynamics that lead
      to the formation of tropical cyclones in the Eastern North Pacific. This
      includes analyzing vorticity, moisture convergence, and vertical wind shear.`,
      project2Title: 'ITCZ Variability',
      project2Desc: `Studying the seasonal and interannual variability of the Intertropical
      Convergence Zone (ITCZ) and its impact on global weather patterns. This work
      leverages satellite observations and reanalysis data to track shifts in the
      ITCZ.`,
      cvPageTitle: 'Curriculum Vitae – Jose Alfredo',
      cvTitle: 'Curriculum Vitae',
      cvIntro: `My CV is embedded below for your convenience. If you would like to download
      a copy, right-click on the viewer and select “Save As…”. To update your CV,
      replace the files/cv.pdf file in the repository.`,
      cvDownload: 'Download PDF'
      ,
      // New keys for ERA5 and news sections
      navERA5: 'ERA5 Maps',
      newsTitle: 'News',
      newsItem1Title: 'New Publication: Tropical Cyclone Research',
      newsItem1Desc: 'Published a new paper on the interactions between tropical cyclones and the ITCZ.',
      newsItem1Date: 'Oct 15, 2025',
      newsItem2Title: 'Presented at AGU Conference',
      newsItem2Desc: 'Gave a talk at the AGU Fall Meeting on hurricane forecasting models.',
      newsItem2Date: 'Dec 5, 2025',

      // New entry for ClimART 2025 news
      newsItem3Title: 'ClimART 2025',
      newsItem3Desc: `I finally was able to create the first Climate X Art competition at Purdue EAPS. Here is a small video of the winners. ClimART exists because I believe that data can be gorgeous and art can be scientific. Plots, Art, Schematics, etc., are ways to say “Hey, this is me,” even in a scientific environment.`,
      newsItem3Date: 'Nov 2025',
      // Additional news entries
      newsItem4Title: 'Passed my preliminary exam (May 2025)!',
      newsItem4Desc: `I passed my preliminary exam, with a presentation titled “Climatology of ITCZ Breakdown Events and Their Impact on East Pacific Tropical Cyclogenesis,” so expect some ITCZ–TC genesis science in the coming months and years.`,
      newsItem4Date: 'May 2025',
      newsItem5Title: 'First manuscript accepted to GRL (April 2025)!',
      newsItem5Desc: `My first project at Purdue was related to Eastern North Pacific tropical cyclone landfalls. We found that: (1) the Eastern North Pacific seasonal cycle has a bimodal distribution of tropical cyclone landfalls due to its orography; (2) during high landfall years, tropical cyclones make landfall in vulnerable southern Mexico due to a stronger reversal of the easterlies; and (3) steering wind anomalies are the main driver of interannual landfall variability in the eastern Pacific. You can read it here: https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL113807.`,
      newsItem5Date: 'Apr 2025',
      era5Title: 'ERA5 Maps',
      era5Intro: 'This page serves as a central hub for my interactive climate data visualizations using ERA5 data. Below you will find a brief tutorial (pending) on how to use the maps and links to the different applications.',
      era5MonthlyTitle: 'Monthly Means Maps',
      era5MonthlyDesc: 'View maps of monthly average with anomalies available data.',
      era5HourlyTitle: 'Hourly Maps',
      era5HourlyDesc: 'Have a particular date that you want to check the weather?.',
      openMapLink: 'Open map in a new tab ↗'
    },
    es: {
      siteTitle: 'José Alfredo Ocegueda Sánchez',
      siteName: 'José Alfredo',
      navHome: 'Inicio',
      navResearch: 'Investigación',
      navCV: 'CV',
      heroTitle: 'José Alfredo Ocegueda Sánchez',
      heroSubtitle: 'Estudiante de doctorado en Ciencias Atmosféricas',
      aboutTitle: 'Sobre mí',
      aboutContent: `Soy José Alfredo Ocegueda Sánchez, originario de Guadalajara, Jalisco, México. Actualmente soy candidato a doctorado en ciencias atmosféricas en la Universidad Purdue, trabajando con Dan Chavas. Mis intereses científicos están en el clima tropical y la dinámica tropical, especialmente los ciclones tropicales y los sistemas monzónicos. También soy un amante de la comida, y me encanta ver la comida (¡y los idiomas!) como una ventana hacia otras culturas y una forma deliciosa y sencilla de expresarnos.`,
      footerName: 'José Alfredo Ocegueda Sánchez',
      researchPageTitle: 'Investigación – José Alfredo',
      researchTitle: 'Investigación',
      researchIntro: `A continuación encontrarás una selección de mis proyectos de investigación.
      Se incluyen imágenes y animaciones para comunicar visualmente la esencia de cada
      proyecto. Sustituye estos marcadores de posición con tus propias figuras, GIFs
      o vídeos. Los vídeos se reproducen automáticamente y en bucle por defecto.`,
      project1Title: 'Génesis de ciclones tropicales',
      project1Desc: `Investigando las condiciones ambientales y la dinámica atmosférica que conducen
      a la formación de ciclones tropicales en el Pacífico Norte oriental. Esto incluye
      analizar la vorticidad, la convergencia de humedad y el cizallamiento vertical del viento.`,
      project2Title: 'Variabilidad de la ZCIT',
      project2Desc: `Estudiando la variabilidad estacional e interanual de la Zona de Convergencia
      Intertropical (ZCIT) y su impacto en los patrones climáticos globales. Este trabajo
      aprovecha observaciones satelitales y datos de reanálisis para rastrear los cambios
      en la ZCIT.`,
      cvPageTitle: 'Currículum vitae – José Alfredo',
      cvTitle: 'Currículum vitae',
      cvIntro: `Mi CV está incrustado a continuación para tu comodidad. Si deseas descargar una
      copia, haz clic derecho en el visor y selecciona «Guardar como…». Para actualizar tu CV,
      reemplaza el archivo files/cv.pdf en el repositorio.`,
      cvDownload: 'Descargar PDF'
      ,
      // New keys for ERA5 and news sections (Spanish)
      navERA5: 'Mapas ERA5',
      newsTitle: 'Noticias',
      newsItem1Title: 'Nueva publicación: Investigación de ciclones tropicales',
      newsItem1Desc: 'Publicado un nuevo artículo sobre las interacciones entre ciclones tropicales y la ZCIT.',
      newsItem1Date: '15 Oct 2025',
      newsItem2Title: 'Presentación en la conferencia AGU',
      newsItem2Desc: 'Presenté una charla en la reunión anual de otoño de la AGU sobre modelos de predicción de huracanes.',
      newsItem2Date: '5 Dic 2025',

      // Nueva entrada para ClimART 2025
      newsItem3Title: 'ClimART 2025',
      newsItem3Desc: `Finalmente pude crear la primera competencia de Climate X Art en Purdue EAPS. Aquí hay un pequeño video de los ganadores. ClimART existe porque creo que los datos pueden ser hermosos y el arte puede ser científico. Gráficas, arte, esquemas, etc., son formas de decir “Hey, este soy yo”, incluso en un entorno científico.`,
      newsItem3Date: 'Nov 2025',
      // Entradas de noticias adicionales
      newsItem4Title: '¡Aprobé mi examen preliminar (mayo de 2025)!',
      newsItem4Desc: `Aprobé mi examen preliminar con una presentación titulada “Climatología de los eventos de ruptura de la ZCIT y su impacto en la ciclogénesis tropical del Pacífico oriental”, así que esperen ver ciencia sobre la relación ZCIT–generación de ciclones tropicales en los próximos meses y años.`,
      newsItem4Date: 'Mayo 2025',
      newsItem5Title: '¡Primer manuscrito aceptado en GRL (abril de 2025)!',
      newsItem5Desc: `Mi primer proyecto en Purdue se relacionó con los impactos de los ciclones tropicales del Pacífico nororiental. Encontramos que: (1) el ciclo estacional del Pacífico norte oriental tiene una distribución bimodal de los ciclones tropicales que tocan tierra debido a su orografía; (2) durante años con muchos ciclones, éstos tocan tierra en el sur vulnerable de México debido a una inversión más fuerte de los vientos alisios; y (3) las anomalías del viento de dirección son el principal factor de la variabilidad interanual de los ciclones que tocan tierra en el Pacífico oriental. Puedes leerlo aquí: https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024GL113807.`,
      newsItem5Date: 'Abr 2025',
      era5Title: 'Mapas ERA5',
      era5Intro: 'Esta página sirve como un centro para mis visualizaciones interactivas de datos climáticos utilizando los datos ERA5. A continuación encontrarás un breve tutorial (pendiente) sobre cómo utilizar los mapas y enlaces a las distintas aplicaciones.',
      era5MonthlyTitle: 'Mapas de medias mensuales',
      era5MonthlyDesc: 'Consulta mapas de promedios mensuales y anomalías disponibles.',
      era5HourlyTitle: 'Mapas por hora',
      era5HourlyDesc: '¿Tienes una fecha en particular que quieras verificar el clima?.',
      openMapLink: 'Abrir mapa en una nueva pestaña ↗'
    }
  };

  /**
   * Applies translations to the page. Each element with a data-i18n attribute
   * will be updated based on the current language selection.
   */
  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = translations[currentLang][key];
      if (translation) {
        el.textContent = translation;
      }
    });
    // Update document title separately
    const titleKey = document.querySelector('title').getAttribute('data-i18n');
    if (titleKey) {
      document.title = translations[currentLang][titleKey];
    }
  }

  /**
   * Initialise the Vanta.NET 3D background on the element with id
   * `vanta-bg`.  The Vanta scripts are expected to be loaded via
   * <script> tags in the HTML.  If the library has not yet loaded
   * or the target element does not exist this function exits
   * silently and may be called repeatedly without error.
   */
  function initializeVanta() {
    if (typeof VANTA !== 'undefined' && document.getElementById('vanta-bg')) {
      VANTA.NET({
        el: '#vanta-bg',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x00f3ff,        // neon cyan (wind/ocean)
        backgroundColor: 0x020b14, // deep ocean backdrop
        pointsColor: 0xbc13fe,  // magenta nodes (heat)
        maxDistance: 22.0,
        spacing: 18.0
      });
    }
  }

  // Initial translation apply after page load
  applyTranslations();

  // Initialise the Vanta background once translations have been set.
  // This call will only run successfully if the Vanta library has been
  // loaded via <script> tags in the HTML and an element with id
  // 'vanta-bg' exists on the page.
  initializeVanta();
});
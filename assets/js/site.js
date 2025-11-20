// site.js
// Handles dark/light mode, language switching, dynamic year update, and 3D interactive globe.

window.addEventListener('DOMContentLoaded', function() {
  const darkToggle = document.getElementById('dark-toggle');
  const langToggle = document.getElementById('lang-toggle');
  const body = document.body;
  // Restore user preferences from localStorage or set defaults
  let language = localStorage.getItem('language') || 'en';
  let theme = localStorage.getItem('theme') || 'dark';
  if (theme === 'dark') {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
  function updateLanguage(lang) {
    // Hide or show elements based on language
    document.querySelectorAll('.lang-en').forEach(el => {
      el.style.display = (lang === 'en' ? '' : 'none');
    });
    document.querySelectorAll('.lang-es').forEach(el => {
      el.style.display = (lang === 'es' ? '' : 'none');
    });
    // Update the toggle button text to indicate the other language
    if (langToggle) {
      langToggle.textContent = (lang === 'en' ? 'ES' : 'EN');
    }
  }
  updateLanguage(language);
  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', currentTheme);
    });
  }
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      language = (language === 'en') ? 'es' : 'en';
      localStorage.setItem('language', language);
      updateLanguage(language);
    });
  }
  // Update copyright year automatically
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  // Initialize 3D globe if the canvas is present and Three.js is loaded
  const canvas = document.getElementById('globeCanvas');
  if (canvas && typeof THREE !== 'undefined') {
    // Create renderer with transparent background so the globe floats over the page.
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 7;

    // Geometry for the globe
    const geometry = new THREE.SphereGeometry(3, 64, 64);

    // Load Earth texture from the data attribute on the canvas.
    const texturePath = canvas.getAttribute('data-texture');
    const loader = new THREE.TextureLoader();
    loader.load(texturePath, function(texture) {
      texture.encoding = THREE.sRGBEncoding;
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 1.0,
        metalness: 0.0,
        emissive: new THREE.Color(0x000000),
        emissiveIntensity: 0.0
      });
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      // Lighting – a soft white ambient and a directional light to highlight texture details.
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
      directionalLight.position.set(5, 3, 5);
      scene.add(directionalLight);

      // Animation loop
      function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.002;
        sphere.rotation.x += 0.001;
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      }
      animate();
    });

    // Handle window resizing
    window.addEventListener('resize', () => {
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    });
  }
});

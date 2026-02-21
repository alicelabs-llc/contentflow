/* ============================================
   CONTENTFLOW AI — Scroll Effects
   ============================================ */

(function initScroll() {

  // ── Scroll Reveal ──────────────────────────
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));


  // ── Nav background on scroll ───────────────
  const nav = document.querySelector('nav');

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.background = window.scrollY > 50
        ? 'rgba(8, 8, 16, 0.95)'
        : 'rgba(8, 8, 16, 0.7)';
    });
  }

})();

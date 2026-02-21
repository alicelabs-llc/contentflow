/* ============================================
   CONTENTFLOW AI — Custom Cursor
   ============================================ */

(function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');

  if (!cursor || !ring) return;

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    ring.style.left   = e.clientX + 'px';
    ring.style.top    = e.clientY + 'px';
  });

  // Scale up on interactive elements
  const interactiveEls = document.querySelectorAll('button, a, [data-cursor-hover]');

  interactiveEls.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      ring.style.width  = '60px';
      ring.style.height = '60px';
    });

    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.width  = '36px';
      ring.style.height = '36px';
    });
  });
})();

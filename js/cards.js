/* ══════════════════════════════════════════════
   CARDS.JS — Expandable card interaction
   Reusable for: funciones, estilos, no-verbal
   ══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.card[data-expandable]');

  cards.forEach(card => {
    const header = card.querySelector('.card__header');
    const body   = card.querySelector('.card__body');

    if (!header || !body) return;

    header.addEventListener('click', () => {
      const isOpen = card.classList.contains('is-open');

      /* Close all siblings in the same grid (accordion behaviour) */
      const parent = card.closest('.grid-2, .grid-3, .grid-4');
      if (parent) {
        parent.querySelectorAll('.card.is-open').forEach(sibling => {
          if (sibling !== card) closeCard(sibling);
        });
      }

      if (isOpen) {
        closeCard(card);
      } else {
        openCard(card);
      }
    });

    /* Keyboard accessibility */
    header.setAttribute('tabindex', '0');
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', 'false');

    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });

  function openCard(card) {
    const body = card.querySelector('.card__body');
    const header = card.querySelector('.card__header');
    card.classList.add('is-open');
    body.style.maxHeight = body.scrollHeight + 'px';
    if (header) header.setAttribute('aria-expanded', 'true');
  }

  function closeCard(card) {
    const body = card.querySelector('.card__body');
    const header = card.querySelector('.card__header');
    card.classList.remove('is-open');
    body.style.maxHeight = '0';
    if (header) header.setAttribute('aria-expanded', 'false');
  }

  /* ── Scroll reveal ────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-children');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealEls.forEach(el => observer.observe(el));

  /* ── Smooth scroll for header nav ─────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

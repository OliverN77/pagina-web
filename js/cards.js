/* ══════════════════════════════════════════════
   CARDS.JS — Expandable card interaction
   + Navbar toggle & active section tracking
   Reusable for: funciones, estilos, no-verbal, pilares
   ══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Expandable Cards ──────────────────────── */
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

  /* ── Smooth scroll for all anchor links ────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ═══════════════════════════════════════════════
     NAVBAR — Hamburger toggle & active tracking
     ═══════════════════════════════════════════════ */

  const navToggle = document.getElementById('nav-toggle');
  const navList   = document.getElementById('nav-list');
  const navLinks  = document.querySelectorAll('.site-nav__link');

  /* ── Hamburger toggle ─────────────────────── */
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const isOpen = navList.classList.contains('is-open');
      navList.classList.toggle('is-open');
      navToggle.classList.toggle('is-active');
      navToggle.setAttribute('aria-expanded', !isOpen);
    });
  }

  /* ── Close mobile menu on link click ────────── */
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navList && navList.classList.contains('is-open')) {
        navList.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* ── Active link tracking via IntersectionObserver ── */
  const sections = [];
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const section = document.querySelector(href);
      if (section) {
        sections.push({ section, link });
      }
    }
  });

  if (sections.length > 0) {
    let currentActive = null;

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const match = sections.find(s => s.section === entry.target);
          if (match) {
            if (currentActive) {
              currentActive.classList.remove('is-active');
            }
            match.link.classList.add('is-active');
            currentActive = match.link;
          }
        }
      });
    }, {
      threshold: 0,
      rootMargin: '-30% 0px -60% 0px'
    });

    sections.forEach(({ section }) => sectionObserver.observe(section));

    /* Ensure 'Inicio' is highlighted when at the very top */
    window.addEventListener('scroll', () => {
      if (window.scrollY < 100 && sections.length > 0) {
        if (currentActive && currentActive !== sections[0].link) {
          currentActive.classList.remove('is-active');
        }
        sections[0].link.classList.add('is-active');
        currentActive = sections[0].link;
      }
    }, { passive: true });
  }
});

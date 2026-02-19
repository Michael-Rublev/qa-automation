const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
}

const mobileCta = document.querySelector('.mobile-cta');
const footer = document.querySelector('footer');
const contact = document.querySelector('#contact');
if (mobileCta && (footer || contact)) {
  const hideTargets = [contact, footer].filter(Boolean);
  const ctaObserver = new IntersectionObserver((entries) => {
    const shouldHide = entries.some((entry) => entry.isIntersecting);
    mobileCta.classList.toggle('is-hidden', shouldHide);
  }, { threshold: 0.15 });
  hideTargets.forEach((el) => ctaObserver.observe(el));
}


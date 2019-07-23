'use strict';

function scrollAnchor(event, respond = null) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
  event.preventDefault();

  let targetID = respond ? respond.getAttribute('href') : this.getAttribute('href');
  const targetAnchor = document.querySelector(targetID);

  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);
  window.scrollBy({ top: originalTop , left: 0, behavior: 'smooth'});

  const checkIfDone = setInterval(() => {
    const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom ) {
      targetAnchor.tabIndex = '-1';
      targetAnchor.focus();
      window.history.pushState('', '', targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

function smoothScroll() {
  document.querySelectorAll('.scroll').forEach(link => link.onclick = scrollAnchor);
}

document.addEventListener('DOMContentLoaded', () => {
  smoothScroll();
});
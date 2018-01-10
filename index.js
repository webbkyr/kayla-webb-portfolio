'use strict';
/*global $ */


function smoothScroll() {
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
  });
}

function newTabForLinks() {
  if (!$('a[href^="mailto:')) {
    $('a').attr('target', '_blank').attr('title', 'Link will open in a new window');
  }

}

$(document).ready(() => {
  smoothScroll();
  newTabForLinks();
});

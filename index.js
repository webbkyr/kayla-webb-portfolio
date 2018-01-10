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

$(document).ready(() => {
  smoothScroll();
});

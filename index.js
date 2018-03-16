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
  //if condition doesnt work as expected.. come back to later
  if (!$('a[href^="mailto:')) {
    return;
  } else {
    $('a').attr('target', '_blank');
  }


// function toggleNav() {
//   $('.hamburger').on('click', () => {
//     $('.main-nav-ul').toggleClass('hidden');
//   });

}



$(document).ready(() => {
  smoothScroll();
  newTabForLinks();
  // toggleNav();
});

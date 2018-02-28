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
}

function toggleNav() {
  $('.hamburger').on('click', () => {
    console.log('clicked?');
    $('.main-nav-ul').toggleClass('hidden');
  });
}

function toggleBio() {
  $('#long_version').on('click', () => {
    console.log('clickeD?')
    $('long-bio').toggleClass('long-bio');
  });
}

$(document).ready(() => {
  smoothScroll();
  newTabForLinks();
  toggleNav();
  toggleBio();
});

'use strict';

var menuButton = document.getElementById('header-play-button');
var mainHome = document.getElementById('main-home');
var mobileMenu = document.getElementById('mobile-menu');

mobileMenu.style.display = 'none';

function menuToggle() {

  if (mobileMenu.style.display == 'none') {
    mobileMenu.style.display = 'flex';
    return;
  } else if (mobileMenu.style.display == 'flex') {
    mobileMenu.style.display = 'none';
    return;
  }
}
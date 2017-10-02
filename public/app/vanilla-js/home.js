let menuButton = document.getElementById('header-play-button');
let mainHome = document.getElementById('main-home');
let mobileMenu = document.getElementById('mobile-menu');

mobileMenu.style.display = 'none';

function menuToggle () {

  if (mobileMenu.style.display == 'none'){
    mobileMenu.style.display = 'flex';
    return;
  } else if (mobileMenu.style.display == 'flex'){
    mobileMenu.style.display ='none';
    return;
  }

}

// $(window).ready(function() {

  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      navToggle.classList.remove('main-nav__toggle--close');
      navToggle.classList.add('main-nav__toggle--open');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      navToggle.classList.remove('main-nav__toggle--open');
      navToggle.classList.add('main-nav__toggle--close');
    }
  });

// });

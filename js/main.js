$(document).ready(function () {
  $('.menu-burger__header').click(function () {
    $('.menu-burger__header').toggleClass('open-menu');
    $('.nav__list').toggleClass('open-menu');
    $('.nav__icon').toggleClass('open-menu');
    $('body').toggleClass('scroll');

  });
  $('.nav__item').click(function () {
    $('.menu-burger__header').removeClass('open-menu');
    $('.nav__list').removeClass('open-menu');
    $('.nav__icon').removeClass('open-menu');
    $('body').removeClass('scroll');
  });
});
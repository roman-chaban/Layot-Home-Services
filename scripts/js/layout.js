'use strict';

const headerMenuItems = document.querySelector('.nav__menu');
const heroTitleItem = document.querySelector('.hero__title');
const subscribeButton = document.querySelector('.subscribe');
let homeProLogo = document.querySelectorAll('.homepro__logo');
let viewButtonItem = document.querySelector('.view');
let professionalImage = document.querySelector('.professional__image');
const headerBurgerButton = document.querySelector('.header__burger');
const companyMenuItems = document.querySelectorAll(
  '.company__menu > .company__menu--item'
);
const legalMenuItems = document.querySelectorAll(
  '.legal__menu > .legal__menu--item'
);

document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.header__burger-menu');
  const nav = document.querySelector('.header__nav');
  const closeButton = document.querySelector('.header__nav--close');

  burgerMenu.addEventListener('click', function () {
    nav.classList.add('active');
  });

  closeButton.addEventListener('click', function () {
    nav.classList.remove('active');
  });
});

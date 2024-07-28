'use strict';

const slider = document.querySelector('.slider');
const sliderBlocks = [...slider.querySelectorAll('.slider__block')];
const prevButton = document.querySelector('.menu__arrow--left');
const nextButton = document.querySelector('.menu__arrow-right');
const swipersContainer = document.querySelector('.gray__swippers');
let currentIndex = 0;

const initializeSlider = () => {
  sliderBlocks.forEach((slide, i) => {
    slide.dataset.index = i;
    if (i === currentIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.add('hidden');
    }
  });

  sliderBlocks.forEach((_, i) => {
    const swiperDot = document.createElement('span');
    swiperDot.classList.add('gray-swipper');
    swiperDot.dataset.index = i;
    swipersContainer.appendChild(swiperDot);
  });

  updateSwipers();
};

const showSlide = (index) => {
  sliderBlocks.forEach((slide, i) => {
    slide.classList.remove('active', 'previous', 'hidden');
    if (i === index) {
      slide.classList.add('active');
    } else if (i === (currentIndex - 1 + sliderBlocks.length) % sliderBlocks.length) {
      slide.classList.add('previous');
    } else {
      slide.classList.add('hidden');
    }
  });
  currentIndex = index;
  updateSwipers();
};

const updateSwipers = () => {
  const swipers = swipersContainer.querySelectorAll('.gray-swipper');
  swipers.forEach((dot, i) => {
    dot.style.backgroundColor = i === currentIndex ? '#15b2f5' : '#ccc';
  });
};

const showNextSlide = () => {
  const nextIndex = (currentIndex + 1) % sliderBlocks.length;
  showSlide(nextIndex);
};

const showPrevSlide = () => {
  const prevIndex = (currentIndex - 1 + sliderBlocks.length) % sliderBlocks.length;
  showSlide(prevIndex);
};

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

swipersContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('gray-swipper')) {
    const index = parseInt(event.target.dataset.index, 10);
    showSlide(index);
  }
});

initializeSlider();

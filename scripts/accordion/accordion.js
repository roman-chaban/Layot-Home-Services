const arrowButtonsGroup = [...document.querySelectorAll('.arrow__button_open')];
const arrowIconsGroup = [...document.querySelectorAll('.arrow__menu--down')];

const handleToggleArrowButtonOpen = (buttons) => {};

const handleRotateArrowIcon = (iconsButtons) => {
  for (let i = 0; i < iconsButtons.length; i++) {
    iconsButtons[i].addEventListener('click', () => {
      iconsButtons[i].classList.toggle('active-arrow');
      if (iconsButtons[i].classList.contains('active-arrow')) {
        iconsButtons[i].style.transform = 'rotate(180deg)';
      } else {
        iconsButtons[i].style.transform = 'rotate(0deg)';
      }
    });
  }
};

handleRotateArrowIcon(arrowIconsGroup);

const NAV = document.querySelector('.nav');
const NAV_TOGGLE = NAV.querySelector('.nav-toggle');
const NAV_LIST = NAV.querySelector('.nav-list');
const BACKGROUND_SELECT = document.querySelector('.background-select');
const WOLF_DIV = document.querySelector('.wolf-meme');
const TOP_TEXT = document.querySelector('.meme-top');
const TOP_OUTPUT = WOLF_DIV.querySelector('.wolf-top');
const BOTTOM_TEXT = document.querySelector('.meme-bottom');
const BOTTOM_OUTPUT = WOLF_DIV.querySelector('.wolf-bottom');

NAV_TOGGLE.onclick = function () {
  NAV.classList.toggle('nav--open');
  NAV_TOGGLE.classList.toggle('nav-toggle--open');
  NAV_LIST.classList.toggle('nav-list--open');
};

BACKGROUND_SELECT.onchange = function () {
    WOLF_DIV.classList.toggle(`${background.value}`);
};

TOP_TEXT.oninput = function () {
    TOP_OUTPUT.textContent = TOP_TEXT.value;
};

BOTTOM_TEXT.oninput = function () {
    BOTTOM_OUTPUT.textContent = BOTTOM_TEXT.value;
};

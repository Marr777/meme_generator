let nav = document.querySelector('.nav');
let toggle = document.querySelector('.nav-toggle');
let list = document.querySelector('.nav-list');

toggle.onclick = function () {
  nav.classList.toggle('nav--open');
  toggle.classList.toggle('nav-toggle--open');
  list.classList.toggle('nav-list--open');
};



let background = document.querySelector('.background-select');
let wolf = document.querySelector('.wolf-meme');

background.onchange = function () {
    if (background.value == 'wise') {
        wolf.classList.add('wise')}
        else {wolf.classList.remove('wise')};
    if (background.value == 'angry') {
        wolf.classList.add('angry')}
        else {wolf.classList.remove('angry')};
    if (background.value == 'alpha') {
        wolf.classList.add('alpha')}
        else {wolf.classList.remove('alpha')};
    if (background.value == 'clown') {
        wolf.classList.add('clown')}
        else {wolf.classList.remove('clown')};
    if (background.value == 'cutie') {
        wolf.classList.add('cutie')}
        else {wolf.classList.remove('cutie')};
    if (background.value == 'cry') {
        wolf.classList.add('cry')}
        else {wolf.classList.remove('cry')};
    if (background.value == 'nya') {
        wolf.classList.add('nya')}
        else {wolf.classList.remove('nya')};
    if (background.value == 'man') {
        wolf.classList.add('man')}
        else {wolf.classList.remove('man')};
    if (background.value == 'thinker') {
        wolf.classList.add('thinker')}
        else {wolf.classList.remove('thinker')};
    if (background.value == 'snow') {
        wolf.classList.add('snow')}
        else {wolf.classList.remove('snow')};
    if (background.value == 'trees') {
        wolf.classList.add('trees')}
        else {wolf.classList.remove('trees')};
    if (background.value == 'winter') {
        wolf.classList.add('winter')}
        else {wolf.classList.remove('winter')};
};

let topText = document.querySelector('.meme-top');
let topOutput = document.querySelector('.wolf-top');
let bottomText = document.querySelector('.meme-bottom');
let bottomOutput = document.querySelector('.wolf-bottom');

topText.oninput = function () {
    topOutput.textContent = topText.value;
};
bottomText.oninput = function () {
    bottomOutput.textContent = bottomText.value;
};

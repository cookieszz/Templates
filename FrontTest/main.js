'use strict';

let burgerMenu = document.querySelector('.head-burger');
let userInfo = document.querySelector('.user-info');
let body = document.querySelector('body');
let backButton = document.querySelector('.btn-back');
let menuBar = document.querySelector('.menu ul');

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.add('active');
  userInfo.classList.add('active');
  body.classList.add('active');
});

backButton.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    userInfo.classList.remove('active');
    body.classList.remove('active');
});

menuBar.addEventListener('click', (e) => {
    e.preventDefault();
    for(let i of document.querySelectorAll('.menu ul li a')) {
      if(i.className == 'isFocused') {
        i.classList.remove('isFocused');
      }
    }
    e.target.classList.toggle('isFocused');
});





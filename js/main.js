'use strict'

const tabItem = document.querySelectorAll('.tabs__btn_item');
const tabContent = document.querySelectorAll('.tabs__content_item');
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

tabItem.forEach((elem)=> {
  elem.addEventListener('click', openContent)
});

function openContent (ev) {
  const tabTarget = ev.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach((item) => {
    item.classList.remove('tabs__btn_item--active')
  })

  tabContent.forEach((item) => {
    item.classList.remove('tabs__content_item--active')
  })

  tabTarget.classList.add('tabs__btn_item--active')
  document.querySelector(`#${button}`).classList.add('tabs__content_item--active')
};

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active')
});
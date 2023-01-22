'use strict';

const listTabs = document.getElementById('tabs');
const tabButtons = document.querySelectorAll('#tabs button');
const tabViewList = document.querySelectorAll('#tabs-view div');

tabButtons.forEach( (button, idx) => {
  button.addEventListener('click', () => {
    [...listTabs.children].forEach((button) => button.classList.remove('active'));
    button.classList.add('active');
    tabViewList.forEach((tabView, tabViewIdx) => {
      if (idx === tabViewIdx) {
        tabView.classList.add('active');
      }
      else {
        tabView.classList.remove('active');
      };
    });
  });
});





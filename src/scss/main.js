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

////////////////TITLE//////////////

// function onEntry(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//      change.target.classList.add('element-show');
//     }
//   });
// }

// let options = {
//   threshold: [0.5] };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll('.title');

// for (let elm of elements) {
//   observer.observe(elm);
// }



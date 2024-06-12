"use strict";
// --------features---------//
const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabItem.forEach((e) => {
  e.addEventListener("click", open);
});

function open(evt) {
 
  const tabTarget = evt.currentTarget;
  console.log(`tabTarget: ${tabTarget}`);

  const buttonDataset = tabTarget.dataset.button;
  console.log(`buttonDataset: ${buttonDataset}`);

  tabItem.forEach((item) => {
    item.classList.remove('tabs__btn-item--active');
  });

  tabContent.forEach((item) => {
    item.classList.remove('tabs__content-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');
  document.querySelector(`#${buttonDataset}`).classList.add('tabs__content-item--active');

}
// 
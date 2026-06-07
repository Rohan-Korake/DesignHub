import { renderCategoryCard } from './renderCategoryCard.js';

document.addEventListener('DOMContentLoaded', () => {
  renderCategoryCard();
});

// handle nav bar (hambarger)
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.addEventListener('click', () => {});

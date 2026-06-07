import { renderLoginPages } from './loginPageRenderer.js';
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

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// handle explore button event
document.addEventListener('click', async (e) => {
  if (e.target.classList.contains('explore-btn')) {
    console.log('Rohan');
    const id = e.target.id;
    if (id) {
      await handleRendering(id);
      document.getElementById('uiPages').scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
});

// handle rendering
function handleRendering(uiPage) {
  switch (uiPage) {
    case 'loginCard':
      renderLoginPages();
      break;

    case 'signupCard':
      console.log('signupCard');
      break;

    case 'dashboardCard':
      console.log('dashboardCard');
      break;

    case 'landingCard':
      console.log('landingCard');
      break;

    case 'formCard':
      console.log('formCard');
      break;

    case 'uiCard':
      console.log('uiCard');
      break;

    case 'pricingCard':
      console.log('pricingCard');
      break;

    case 'analyticsCard':
      console.log('analyticsCard');
      break;

    case 'taskCard':
      console.log('taskCard');
      break;

    case 'designSystemCard':
      console.log('designSystemCard');
      break;

    default:
      return;
      break;
  }
}

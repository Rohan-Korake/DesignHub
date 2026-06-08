import { renderCard } from './cardRenderer.js';
import { renderdashboardPages } from './dashboardPageRenderer.js';
import { renderFormPages } from './formPageRenderer.js';
import { imagePreview } from './imagePreview.js';
import { renderLandingPages } from './landingPageRenderer.js';
import { renderLoginPages } from './loginPageRenderer.js';
import { renderProfilePages } from './profilePageRenderer.js';
import { renderCategoryCard } from './renderCategoryCard.js';
import { renderPricingPages } from './renderPricingPages.js';
import { renderSignupPages } from './signupPageRenderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderCategoryCard();
  imagePreview();
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
    const id = e.target.id;
    if (id) {
      await handleRendering(id);
      document.getElementById('uiPages').scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
});

const sectionHeading = document.getElementById('sectionHeading');
// handle rendering
function handleRendering(uiPage) {
  switch (uiPage) {
    case 'loginCard':
      sectionHeading.innerText = 'login Pages';
      renderLoginPages();
      break;

    case 'signupCard':
      sectionHeading.innerText = 'Sign Up Pages';
      renderSignupPages();
      break;

    case 'dashboardCard':
      sectionHeading.innerText = 'Dashboard';
      renderdashboardPages();
      break;

    case 'landingCard':
      sectionHeading.innerText = 'Landing Page';
      renderLandingPages();
      break;

    case 'formCard':
      sectionHeading.innerText = 'Form UI';
      renderFormPages();
      break;

    case 'uiCard':
      sectionHeading.innerText = 'Card UI';
      renderCard();
      break;

    case 'pricingCard':
      sectionHeading.innerText = 'Pircing Page';
      renderPricingPages();
      break;

    case 'profileCard':
      sectionHeading.innerText = 'User Profile';
      renderProfilePages();
      break;

    default:
      return;
      break;
  }
}

// add image url
export function addCardImage(imageUrl) {
  const uiPagesContainer = document.getElementById('uiPagesContainer');

  uiPagesContainer.innerHTML += `
  <div class="group overflow-hidden rounded-2xl border border-purple-900/30 bg-[#0b0b1e] cursor-pointer">
    <img src="${imageUrl}" alt="Login Page UI" class="preview-image w-full aspect-16/10 object-cover transition duration-500 group-hover:scale-105">
  </div>
`;
}

import { addCardImage } from './main.js';

export function renderPricingPages() {
  const uiPagesContainer = document.getElementById('uiPagesContainer');
  uiPagesContainer.innerHTML = '';

  const pricingPages = [
    'src/assets/pricingPages/1.webp',
    'src/assets/pricingPages/2.webp',
    'src/assets/pricingPages/3.webp',
    'src/assets/pricingPages/4.webp',
    'src/assets/pricingPages/5.webp',
    'src/assets/pricingPages/6.webp',
    'src/assets/pricingPages/7.webp',
    'src/assets/pricingPages/8.webp',
    'src/assets/pricingPages/9.webp',
    'src/assets/pricingPages/10.webp',
    'src/assets/pricingPages/11.webp',
    'src/assets/pricingPages/12.webp',
    'src/assets/pricingPages/13.webp',
    'src/assets/pricingPages/14.webp',
    'src/assets/pricingPages/15.webp',
    'src/assets/pricingPages/16.webp',
  ];

  // load the pages into container
  pricingPages.forEach((imageUrl) => {
    addCardImage(imageUrl);
  });
}

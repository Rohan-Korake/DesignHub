import { addCardImage } from './main.js';

export function renderLandingPages() {
  const uiPagesContainer = document.getElementById('uiPagesContainer');
  uiPagesContainer.innerHTML = '';

  const landingPages = [
    'src/assets/landingPages/1.webp',
    'src/assets/landingPages/2.webp',
    'src/assets/landingPages/3.webp',
    'src/assets/landingPages/4.webp',
    'src/assets/landingPages/5.webp',
    'src/assets/landingPages/6.webp',
    'src/assets/landingPages/7.webp',
    'src/assets/landingPages/8.webp',
    'src/assets/landingPages/9.webp',
    'src/assets/landingPages/10.webp',
    'src/assets/landingPages/11.webp',
    'src/assets/landingPages/12.webp',
    'src/assets/landingPages/13.webp',
  ];

  // load the pages into container
  landingPages.forEach((imageUrl) => {
    addCardImage(imageUrl);
  });
}

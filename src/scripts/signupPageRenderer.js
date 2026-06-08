import { addCardImage } from './main.js';

export function renderSignupPages() {
  const uiPagesContainer = document.getElementById('uiPagesContainer');
  uiPagesContainer.innerHTML = '';

  const signupPages = [
    'src/assets/singupPages/1.webp',
    'src/assets/singupPages/2.webp',
    'src/assets/singupPages/3.webp',
    'src/assets/singupPages/4.webp',
    'src/assets/singupPages/5.webp',
    'src/assets/singupPages/6.webp',
    'src/assets/singupPages/7.webp',
    'src/assets/singupPages/8.webp',
    'src/assets/singupPages/9.webp',
    'src/assets/singupPages/10.webp',
    'src/assets/singupPages/11.webp',
    'src/assets/singupPages/12.webp',
    'src/assets/singupPages/13.webp',
  ];

  // load the pages into container
  signupPages.forEach((imageUrl) => {
    addCardImage(imageUrl);
  });
}

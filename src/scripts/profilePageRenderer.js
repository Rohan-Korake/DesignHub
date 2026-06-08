import { addCardImage } from './main.js';

export function renderProfilePages() {
  const uiPagesContainer = document.getElementById('uiPagesContainer');
  uiPagesContainer.innerHTML = '';

  const profilePages = [
    'src/assets/profilePages/1.webp',
    'src/assets/profilePages/2.webp',
    'src/assets/profilePages/3.webp',
    'src/assets/profilePages/4.webp',
    'src/assets/profilePages/5.webp',
    'src/assets/profilePages/6.webp',
    'src/assets/profilePages/7.webp',
    'src/assets/profilePages/8.webp',
    'src/assets/profilePages/9.webp',
    'src/assets/profilePages/10.webp',
    'src/assets/profilePages/11.webp',
    'src/assets/profilePages/12.webp',
  ];

  // load the pages into container
  profilePages.forEach((imageUrl) => {
    addCardImage(imageUrl);
  });
}

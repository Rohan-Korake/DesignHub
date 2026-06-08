import { addCardImage } from './main.js';

export function renderdashboardPages() {
  const uiPagesContainer = document.getElementById('uiPagesContainer');
  uiPagesContainer.innerHTML = '';

  const dashboardPages = [
    'src/assets/dashboardPages/1.webp',
    'src/assets/dashboardPages/2.webp',
    'src/assets/dashboardPages/3.webp',
    'src/assets/dashboardPages/4.webp',
    'src/assets/dashboardPages/5.webp',
    'src/assets/dashboardPages/6.webp',
    'src/assets/dashboardPages/7.webp',
    'src/assets/dashboardPages/8.webp',
    'src/assets/dashboardPages/9.webp',
    'src/assets/dashboardPages/10.webp',
    'src/assets/dashboardPages/11.webp',
    'src/assets/dashboardPages/12.webp',
    'src/assets/dashboardPages/13.webp',
  ];

  // load the pages into container
  dashboardPages.forEach((imageUrl) => {
    addCardImage(imageUrl);
  });
}

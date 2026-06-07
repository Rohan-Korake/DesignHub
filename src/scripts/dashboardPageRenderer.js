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
  dashboardPages.forEach((element) => {
    uiPagesContainer.innerHTML += `
        <div class="group overflow-hidden rounded-2xl border border-purple-900/30 bg-[#0b0b1e] cursor-pointer">
          <img src="${element}" alt="Login Page UI" class="w-full aspect-16/10 object-cover transition duration-500 group-hover:scale-105">
        </div>
    `;
  });
}

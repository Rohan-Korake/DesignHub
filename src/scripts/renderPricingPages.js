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
  pricingPages.forEach((element) => {
    uiPagesContainer.innerHTML += `
        <div class="group overflow-hidden rounded-2xl border border-purple-900/30 bg-[#0b0b1e] cursor-pointer">
          <img src="${element}" alt="Login Page UI" class="w-full aspect-16/10 object-cover transition duration-500 group-hover:scale-105">
        </div>
    `;
  });
}

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

  // load the pages into constiner
  signupPages.forEach((element) => {
    uiPagesContainer.innerHTML += `
        <div class="group overflow-hidden rounded-2xl border border-purple-900/30 bg-[#0b0b1e] cursor-pointer">
          <img src="${element}" alt="Login Page UI" class="w-full aspect-16/10 object-cover transition duration-500 group-hover:scale-105">
        </div>
    `;
  });
}

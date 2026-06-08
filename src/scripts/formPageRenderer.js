export function renderFormPages() {
  const uiPagesContainer = document.getElementById('uiPagesContainer');
  uiPagesContainer.innerHTML = '';

  const formPages = [
    'src/assets/formPages/1.webp',
    'src/assets/formPages/2.webp',
    'src/assets/formPages/3.webp',
    'src/assets/formPages/4.webp',
    'src/assets/formPages/5.webp',
    'src/assets/formPages/6.webp',
    'src/assets/formPages/7.webp',
    'src/assets/formPages/8.webp',
    'src/assets/formPages/9.webp',
    'src/assets/formPages/10.webp',
    'src/assets/formPages/11.webp',
    'src/assets/formPages/12.webp',
    // 'src/assets/formPages/13.webp',
  ];

  // load the pages into container
  formPages.forEach((element) => {
    uiPagesContainer.innerHTML += `
        <div class="group overflow-hidden rounded-2xl border border-purple-900/30 bg-[#0b0b1e] cursor-pointer">
          <img src="${element}" alt="Login Page UI" class="w-full aspect-16/10 object-cover transition duration-500 group-hover:scale-105">
        </div>
    `;
  });
}

export function renderLoginPages() {
  const uiPagesContainer = document.getElementById('uiPagesContainer');
  uiPagesContainer.innerHTML = '';

  //   collection login pages address
  const loginPages = [
    'src/assets/loginPages/1.webp',
    'src/assets/loginPages/2.webp',
    'src/assets/loginPages/3.webp',
    'src/assets/loginPages/4.webp',
    'src/assets/loginPages/5.webp',
    'src/assets/loginPages/6.webp',
    'src/assets/loginPages/7.webp',
    'src/assets/loginPages/8.webp',
    'src/assets/loginPages/9.webp',
    'src/assets/loginPages/10.webp',
    'src/assets/loginPages/11.webp',
    'src/assets/loginPages/12.webp',
    'src/assets/loginPages/13.webp',
  ];

  // load the pages into constiner
  loginPages.forEach((element) => {
    uiPagesContainer.innerHTML += `
        <div class="group overflow-hidden rounded-2xl border border-purple-900/30 bg-[#0b0b1e] cursor-pointer">
          <img src="${element}" alt="Login Page UI" class="w-full aspect-[16/10] object-cover transition duration-500 group-hover:scale-105">
        </div>
    `;
  });
}

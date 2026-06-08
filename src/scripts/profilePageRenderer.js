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
  profilePages.forEach((element) => {
    uiPagesContainer.innerHTML += `
        <div class="group overflow-hidden rounded-2xl border border-purple-900/30 bg-[#0b0b1e] cursor-pointer">
          <img src="${element}" alt="Login Page UI" class="w-full aspect-16/10 object-cover transition duration-500 group-hover:scale-105">
        </div>
    `;
  });
}

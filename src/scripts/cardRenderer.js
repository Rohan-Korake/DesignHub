export function renderCard() {
  const uiPagesContainer = document.getElementById('uiPagesContainer');
  uiPagesContainer.innerHTML = '';

  const cards = [
    'src/assets/cards/1.webp',
    'src/assets/cards/2.webp',
    'src/assets/cards/3.webp',
    'src/assets/cards/4.webp',
    'src/assets/cards/5.webp',
    'src/assets/cards/6.webp',
    'src/assets/cards/7.webp',
    'src/assets/cards/8.webp',
    'src/assets/cards/9.webp',
    'src/assets/cards/10.webp',
    'src/assets/cards/11.webp',
    'src/assets/cards/12.webp',
    'src/assets/cards/13.webp',
  ];

  // load the pages into container
  cards.forEach((element) => {
    uiPagesContainer.innerHTML += `
        <div class="group overflow-hidden rounded-2xl border border-purple-900/30 bg-[#0b0b1e] cursor-pointer">
          <img src="${element}" alt="Login Page UI" class="w-full aspect-16/10 object-cover transition duration-500 group-hover:scale-105">
        </div>
    `;
  });
}

export async function renderCategoryCard() {
  const uiCategoryCardContainer = document.getElementById(
    'uiCategoryCardContainer'
  );
  uiCategoryCardContainer.innerHTML = '';

  // create card data
  const cardData = [
    {
      icon: `<i class="fa-solid fa-lock text-lg"></i>`,
      name: 'Login Page',
      desc: 'Beautiful login screens for modern apps.',
      id: 'loginCard',
    },
    {
      icon: `<i class="fa-solid fa-user-plus text-lg"></i>`,
      name: 'Sign Up Page',
      desc: 'Modern registration UI with smooth UX.',
      id: 'signupCard',
    },
    {
      icon: `<i class="fa-solid fa-gauge-high text-lg"></i>`,
      name: 'Dashboard',
      desc: 'Analytics dashboards with clean data UI.',
      id: 'dashboardCard',
    },
    {
      icon: `<i class="fa-solid fa-house text-lg"></i>`,
      name: 'Landing Page',
      desc: 'High-converting hero sections and layouts.',
      id: 'landingCard',
    },
    {
      icon: `<i class="fa-solid fa-list-check text-lg"></i>`,
      name: 'Forms UI',
      desc: 'Smart input forms with interative design.',
      id: 'formCard',
    },
    {
      icon: `<i class="fa-solid fa-square-plus text-lg"></i>`,
      name: 'UI Cards',
      desc: 'Modern reusable card components.',
      id: 'uiCard',
    },
    {
      icon: `<i class="fa-solid fa-tags text-lg"></i>`,
      name: 'Pricing Page',
      desc: 'Pricing tables with comparison layouts.',
      id: 'pricingCard',
    },
    {
      icon: `<i class="fa-solid fa-chart-line text-lg"></i>`,
      name: 'Analytics UI',
      desc: 'Charts and insights dashboards.',
      id: 'analyticsCard',
    },
  ];

  // pass card data
  for (const element of cardData) {
    await sleep(300);
    createCard(element);
  }
}

// create card
function createCard(element) {
  const card = document.createElement('div');
  card.className =
    'bg-[#0b0b1e]/80 border border-purple-900/40 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm shadow-xl hover:border-purple-500/30 transition-all duration-300';

  card.innerHTML = ` 
                <div class="flex flex-col gap-4">
                    <!-- icon -->
                    <div class="w-10 h-10 rounded-xl bg-linear-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
                        ${element.icon}
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-white mb-2">${element.name}</h3>
                        <p class="text-gray-400 text-sm leading-relaxed">${element.desc}</p>
                    </div>
                </div>

                 <div id=${element.id} class="explore-btn cursor-pointer mt-6 inline-flex items-center text-indigo-400 text-sm font-semibold hover:text-indigo-300 group">
                    Explore 
                    <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12l-7.5 7.5" />
                    </svg>
                </div>`;

  uiCategoryCardContainer.appendChild(card);
}

// Sleep helper
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

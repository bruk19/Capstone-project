const menuBtn = document.querySelector('#menu-button');
const closeMenuBtn = document.querySelector('i.close-menu');
const header = document.querySelector('header');
const horseCardSkeleton = document.querySelector('#horse-card-skeleton');
const featuredHorses = document.querySelector('#featured-horses ul');
const body = document.querySelector('body');
const FEATURED_HORSES = [
  {
    name: 'C Runner',
    highlights: 'TB, DK B/, G, foaled February 19, 2017',
    description: 'Seven times G1 winner. Total career earnings $382.000, best results achieved in 2020.',
    img: './media/horse-1.jpg',
  },
  {
    name: 'Life is Cold',
    highlights: 'TB, B, C, foaled April 08, 2018',
    description: 'Six times G1 winner. Total career earnings $3.400.000. The fans\' favorite to this year title.',
    img: './media/horse-2.jpg',
  },
  {
    name: 'Inglorious',
    highlights: 'TB, DK B/, C, foaled March 01, 2018',
    description: 'Two times G1 winner. Total career earnings $613.000. The rookie of the year coming with great expectations.',
    img: './media/horse-3.jpg',
  },
  {
    name: 'Kick In',
    highlights: 'TB, GR/RO, H, foaled January 15, 2016',
    description: 'Ten times G1 winner. Total career earnings $2.700.000. The most experience contender for this year\'s event.',
    img: './media/horse-4.jpg',
  },
  {
    name: 'Black Cloud',
    highlights: 'TB, CH, C, foaled March 01, 2019',
    description: 'Three times G1 winner. Total career earnings $860.000. Coming from Argentina as a top horse.',
    img: './media/horse-5.jpg',
  },
  {
    name: 'Into My Life',
    highlights: 'TB, DK B/, C, foaled February 9, 2019',
    description: 'Three times G1 winner. Total career earnings $550.000. Son of the greatest Into Mischief, with a bright future.',
    img: './media/horse-6.jpg',
  },
];

const toggleMenu = () => {
  if (header.classList.length === 0) {
    header.classList.add('mobile-show');
    body.classList.add('lock-scroll');
  } else if (header.classList.contains('mobile-hidden')) {
    header.classList.add('mobile-show');
    body.classList.add('lock-scroll');
    header.classList.remove('mobile-hidden');
  } else {
    header.classList.remove('mobile-show');
    body.classList.remove('lock-scroll');
    header.classList.add('mobile-hidden');
  }
};

if (horseCardSkeleton) {
  for (let i = 0; i < FEATURED_HORSES.length; i += 1) {
    const card = horseCardSkeleton.cloneNode(true);
    card.querySelector('img').src = FEATURED_HORSES[i].img;
    card.querySelector('img').alt = FEATURED_HORSES[i].name;
    card.querySelector('h3').textContent = FEATURED_HORSES[i].name;
    card.querySelector('h5').textContent = FEATURED_HORSES[i].highlights;
    card.querySelector('h6').textContent = FEATURED_HORSES[i].description;
    featuredHorses.append(card);
  }
  horseCardSkeleton.remove();
}

menuBtn.onclick = toggleMenu;
closeMenuBtn.onclick = toggleMenu;
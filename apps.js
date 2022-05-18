const menuBtn = document.querySelector('#menu-button');
const closeMenuBtn = document.querySelector('i.close-menu');
const header = document.querySelector('header');
const carCardSkeleton = document.querySelector('#CAR-card-skeleton');
const featuredCars = document.querySelector('#featured-horses ul');
const body = document.querySelector('body');
const FEATURED_CARS = [
  {
    name: 'Abreham Awoke',
    highlights: '1200cc, >1500cc foaled February 19, 2017',
    description: 'one times Dankira race winner. Total career earnings 382.000br, best results achieved in 2020.',
    img: './media/racem.jpg',
  },
  {
    name: 'Oliad Birhanu',
    highlights: '1200cc, >1500cc foaled April 08, 2018',
    description: 'four times Dankira race winner. Total career earnings 3.400.000br. The fans\' favorite to this year title.',
    img: './media/raceo.jpg',
  },
  {
    name: 'Wendimagegn Leta',
    highlights: '1200cc, >1500cc foaled March 01, 2018',
    description: 'one times Dankira race winner. Total career earnings 613.000br. The rookie of the year coming with great expectations.',
    img: './media/racef.jpg',
  },
  {
    name: 'Addis Belete',
    highlights: '1200cc, >1500cc foaled January 15, 2016',
    description: 'two times Dankira race winner. Total career earnings 2.700.000br. The most experience contender for this year\'s event.',
    img: './media/raccef.jpg',
  },
  {
    name: 'Kirubel Kebefe',
    highlights: '1200cc, >1500cc foaled March 01, 2019',
    description: 'Three times Dankira race winner. Total career earnings 860.000br. Coming from Argentina as a top horse.',
    img: './media/racce3.jpg',
  },
  {
    name: 'Abel Birhanu',
    highlights: '1200cc, >1500cc, foaled February 9, 2019',
    description: 'one times Dankira race winner. Total career earnings 550.000br. Son of the greatest Into Mischief, with a bright future.',
    img: './media/racce1.jpg',
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

if (carCardSkeleton) {
  for (let i = 0; i < FEATURED_CARS.length; i += 1) {
    const card = carCardSkeleton.cloneNode(true);
    card.querySelector('img').src = FEATURED_CARS[i].img;
    card.querySelector('img').alt = FEATURED_CARS[i].name;
    card.querySelector('h3').textContent = FEATURED_CARS[i].name;
    card.querySelector('h5').textContent = FEATURED_CARS[i].highlights;
    card.querySelector('h6').textContent = FEATURED_CARS[i].description;
    featuredCars.append(card);
  }
  carCardSkeleton.remove();
}

menuBtn.onclick = toggleMenu;
closeMenuBtn.onclick = toggleMenu;
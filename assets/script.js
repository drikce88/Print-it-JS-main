const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots-container');
dotsContainer.innerHTML = '';


let currentSlide = 0;

right.addEventListener('click', goToNextSlide);
left.addEventListener('click', goToPreviousSlide);


function updateSlide() {
  const bannerImg = document.querySelector('.banner-img');
  const bannerTagline = document.querySelector('.banner-tagline');
  const dots = document.querySelectorAll('.dot');

  bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
  bannerTagline.innerHTML = slides[currentSlide].tagLine;
 
  dots.forEach((dot, index) => {
    dot.classList.remove('dot_selected');
    if (index === currentSlide) {
      dot.classList.add('dot_selected');
    }
  });
}

function goToSlide(index) {
  currentSlide = index;
  updateSlide();
}


slides.forEach((_, index) => {
  const dot = document.createElement('li');
  dot.classList.add('dot');
  if (index === currentSlide) {
    dot.classList.add('dot_selected');
  }
  dotsContainer.appendChild(dot);

  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});


function goToNextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlide();
}

function goToPreviousSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlide();
}

updateSlide();





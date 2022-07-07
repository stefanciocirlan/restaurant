const slides = document.querySelectorAll('.review-item');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const aboutUsSection = document.querySelector('.about-us');
const aboutUsLink = document.getElementById('about-link');
const homeLink = document.getElementById('home-link');
const reviewsLink = document.getElementById('reviews-link');
const menuLink = document.getElementById('menu-link');
const contactLink = document.getElementById('contact-link');
const menuSection = document.getElementById('menu-section');
const reviewsSection = document.querySelector('.review-section');
const contactSection = document.querySelector('.contact-section');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav-links');
const menuBurger = document.querySelector('.menu-btn');

aboutUsLink.addEventListener('click', () => {
    aboutUsSection.scrollIntoView();
})

menuLink.addEventListener('click', () => {
    menuSection.scrollIntoView();
})

reviewsLink.addEventListener('click', () => {
    reviewsSection.scrollIntoView();
})

contactLink.addEventListener('click', () => {
    contactSection.scrollIntoView();
})


function slideLeft() {
    const index = findIndexCurrSlide();
    if (index == 0) {
        const nextSlide = slides[slides.length - 1];
        nextSlide.classList.add('show');
    }
    else {
        const nextSlide = slides[index - 1];
        nextSlide.classList.add('show');
    }
    hidePrevSlide(index);
}

function slideRight() {
    const index = findIndexCurrSlide();
    if (index == slides.length - 1) {
        const nextSlide = slides[0];
        nextSlide.classList.add('show');
    } else {
        const nextSlide = slides[index + 1];
        nextSlide.classList.add('show');
    }
    hidePrevSlide(index);
}

function hidePrevSlide(prevSlideIndex) {

    const currSlide = slides[prevSlideIndex];
    currSlide.classList.remove('show');
}

function findIndexCurrSlide() {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('show')) {
            return i;
        }
    }
}

leftArrow.addEventListener('click', () => {
    slideLeft();
})

rightArrow.addEventListener('click', () => {
    slideRight();
})

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})

window.addEventListener('resize', () => {
    if (window.outerWidth < 800) {
        navLinks.classList.add('hide');
        menuBurger.classList.remove('hide');
    }
});
window.addEventListener('resize', () => {
    if (window.outerWidth > 800) {
        navLinks.classList.remove('hide');
        menuBurger.classList.add('hide');
    }
});

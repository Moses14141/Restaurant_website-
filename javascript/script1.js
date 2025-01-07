let currentIndex = 0;
const slides = document.querySelectorAll('.menu-hero-slide');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderPosition();
}

function updateSliderPosition() {
    const slider = document.querySelector('.menu-hero-slider');
    const offset = -currentIndex * 100; // Shift slides to the left by 100%
    slider.style.transform = `translateX(${offset}%)`;
}

// Automatic sliding every 3 seconds
setInterval(showNextSlide, 3000);

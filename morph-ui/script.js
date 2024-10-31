let currentSlide = 0;
let autoScroll;

function moveSlide(direction) {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;

    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function startAutoScroll() {
    autoScroll = setInterval(() => {
        moveSlide(1);
    }, 3000);  // Change slide every 3 seconds
}

function stopAutoScroll() {
    clearInterval(autoScroll);
}

// Start the auto-scrolling when the page loads
window.onload = function () {
    startAutoScroll();
};

// Stop auto-scrolling when the mouse is over the carousel
document.querySelector('.carousel-container').addEventListener('mouseenter', stopAutoScroll);

// Restart auto-scrolling when the mouse leaves the carousel
document.querySelector('.carousel-container').addEventListener('mouseleave', startAutoScroll);
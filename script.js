document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.space-section');

    sections.forEach(section => {
        section.addEventListener('mouseover', function () {
            section.style.transform = 'scale(1.05)';
            section.style.transition = 'transform 0.3s ease-in-out';
        });

        section.addEventListener('mouseout', function () {
            section.style.transform = 'scale(1)';
        });
    });

    const newSection = document.getElementById('space-bar');
    document.addEventListener('keydown', function (e) {
        if (e.code === 'Space') {
            e.preventDefault();

            if (newSection.classList.contains('active')) {
                newSection.classList.remove('active');
            } else {
                newSection.classList.add('active');
                newSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // ---------------------------------------------------

    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.style.display = 'none';
            slide.classList.remove('active');
            if (index === currentIndex) {
                slide.style.display = 'block';
                slide.classList.add('active');
            }
        });
    }

    document.getElementById('next').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    document.getElementById('prev').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    updateCarousel(); // Initialize carousel with first slide active
});

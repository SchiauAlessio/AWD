document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('show');
});

// Simple script to enhance interaction (optional)
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
});

// Simple Scroll Animation for Menu Section
document.addEventListener('DOMContentLoaded', function () {
    const menuSections = document.querySelectorAll('.menu-section');
    
    window.addEventListener('scroll', () => {
        menuSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100 && sectionTop + sectionHeight > 100) {
                section.classList.add('fade-in');
            }
        });
    });
});

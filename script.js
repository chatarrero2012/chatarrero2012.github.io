// script.js

// Smooth scrolling for anchor links
const scroll = (target) => {
    const element = document.querySelector(target);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
};

// Add event listeners to all anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        scroll(this.getAttribute('href'));
    });
});

// Animation example for fade-in effect
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});

fadeInElements.forEach(element => {
    observer.observe(element);
});

// CSS for fade-in effect
// Add this to your CSS file: 
// .fade-in { opacity: 0; transition: opacity 1s ease-in; }
// .visible { opacity: 1; }
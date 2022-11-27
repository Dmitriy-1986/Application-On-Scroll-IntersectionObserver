'use strict';

//Появление частей сайта
const allSection = document.querySelectorAll('.section');

const appearanceSection = function(entries, observer) {
    const entry = entries[0];
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section-hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(appearanceSection, {
    root: null,
    threshold: 0.1,
});

allSection.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('section-hidden');
});















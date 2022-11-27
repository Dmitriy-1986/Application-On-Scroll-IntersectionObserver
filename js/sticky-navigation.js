'use strict';

const header = document.querySelector('.header');
const headerSection = document.querySelector('.header-section');
const headerHeight = header.getBoundingClientRect().height;

//Обсервер для навигации
const getStickyNav = function(entries) {
    const entry = entries[0];
    console.log(entry);
    if(entry.isIntersecting) {
        header.classList.remove('sticky');  
    } else {
        header.classList.add('sticky');         
    }
};

const headerObserver = new IntersectionObserver(getStickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${headerHeight}px`,// При отслеживании sectionobserver и при его выявлении на уровне минус высоты навигации
});

headerObserver.observe(headerSection);

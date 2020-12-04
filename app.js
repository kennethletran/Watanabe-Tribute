// Scroll indicator appears after a few seconds
<<<<<<< HEAD
const main = document.querySelector('.main');
function addScrollIndicator() {
    const scrollIndicator = main.lastElementChild;
    scrollIndicator.classList.add('scroll-indicator')
}
setTimeout(addScrollIndicator, 2000);


// Have card fade in when scrolled to page
const cards = document.querySelectorAll('.card');
function cardFadeObserver(cards) {
    cards.forEach(card => {
        if(!card.isIntersecting) {
            return;
        } else {
            card.target.classList.add('fade-in');
            appearOnScroll.unobserve(card.target);
        }
    });
}
const appearOnScroll = new IntersectionObserver(cardFadeObserver, { threshold: 1 });
cards.forEach(card => {
    appearOnScroll.observe(card);
})


// Type in name
=======
const biography = document.querySelector('.biography');
function addScrollIndicator() {
    const scrollIndicator = biography.lastElementChild;
    scrollIndicator.classList.add('scroll-indicator')
}
setTimeout(addScrollIndicator, 5000);


// Fade in elements on scroll
const cards = document.querySelectorAll('.card');
const thumbnails = document.querySelectorAll('.thumbnail-pic');

function elementFadeObserver(entries) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('fade-in');
            appearOnScroll.unobserve(entry.target);
        }
    });
}
const appearOnScroll = new IntersectionObserver(elementFadeObserver, { threshold: 1 });

cards.forEach(card => {
    appearOnScroll.observe(card);
})
thumbnails.forEach(thumbnail => {
    appearOnScroll.observe(thumbnail);
})
>>>>>>> master

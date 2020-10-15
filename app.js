// Scroll indicator appears after a few seconds
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


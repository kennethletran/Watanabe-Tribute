// Scroll indicator appears after a few seconds
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
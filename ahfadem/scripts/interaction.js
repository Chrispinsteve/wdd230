const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay: 200, origin: "left"})
sr.reveal('.hero-img', {delay: 450, origin: "top"})

document.getElementById('toggleNav').addEventListener('click', function() {
    let navaList = document.querySelector('.navalist');
    navaList.classList.toggle('open');
})
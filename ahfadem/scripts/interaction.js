//--------------- Menu Button ---------------\\
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navlist');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})



const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay: 200, origin: "left"})
sr.reveal('.hero-img', {delay: 450, origin: "top"})

document.getElementById('toggleNav').addEventListener('click', function() {
    let navaList = document.querySelector('.navlist');
    navaList.classList.toggle('open');
})







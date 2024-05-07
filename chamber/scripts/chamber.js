const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navalist');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})


/*-------------- "DARK" and "LIGHT" --------------*/
const modeButton = document.querySelector('#mode');
const header = document.querySelector('header');
const main = document.querySelector('main');
const divGeneral = document.querySelector('.general');
const leftSide = document.querySelector('.left-side');
const section = document.querySelector('section');
const article = document.querySelector('article');
const h1 = document.querySelector('h1');
const paragraph = document.querySelector('p');


modeButton.addEventListener('click', () => {
    if(modeButton.textContent.includes('🌙')) {

        divGeneral.style.background = '#363638';
        leftSide.style.background = 'rgb(190, 190, 190)'
        main.style.background = '#797979'
        h1.style.color = 'white'

        modeButton.textContent = '🔆'
    }
    else {
        divGeneral.style.background = 'whitesmoke'
        main.style.background = 'rgb(226, 226, 226)';
        h1.style.color = 'rgb(68, 68, 68)'
        modeButton.textContent = '🌙';
    }
})

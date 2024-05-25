const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url){
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
    });
    
    //Create element to add to div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('__');
    let portrait = document.createElement('img')
}

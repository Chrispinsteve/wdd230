const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        //Create element to add to div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('__');
        let portrait = document.createElement('img');


        //Build h2 content out to show prophet's full name
        fullName.textContent = `${prophets._____} ________`;

        //Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophets.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophets.____} ____________`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('heith', '440');

        // Append the section(card) with the created elements
        card.appendChild(_________) // fill in the blank
        card.appendChild(portrait);

        card.appendChild(card);
    });
}

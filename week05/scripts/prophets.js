const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

getProphetData(url);

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Créer un élément section pour la carte
        let card = document.createElement('section');
        
        // Créer un élément h2 pour le nom complet
        let fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Créer un élément h3 pour la date et le lieu de naissance
        let birthDate = document.createElement('h3');
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;

        let placeBirth = document.createElement('h3');
        placeBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
        
        // Créer un élément img pour le portrait
        let portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        
        // Ajouter le h2, h3 et l'image à la section
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(placeBirth);
        card.appendChild(portrait);
        
        // Ajouter la carte au conteneur de cartes
        cards.appendChild(card);
    });
}

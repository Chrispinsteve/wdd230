const linkMembers = "https://raw.githubusercontent.com/Chrispinsteve/wdd230/main/chamber/data/members.json";

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed'); // Debugging log
    displayLinks();
    addToggleViewListener(); // Add listener after DOM is loaded
});

const section = document.querySelector('.content-1');
const toggleViewButton = document.getElementById('toggleView');

async function displayLinks() {
    try {
        const response = await fetch(linkMembers);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Data fetched successfully:', data); // Debugging log
        displayMembers(data.members);
    } catch (error) {
        console.error('Oups! There is an error: ', error);
    }
}

function displayMembers(members) {
    section.innerHTML = '';
    console.log('Displaying members:', members); // Debugging log

    members.forEach(memberData => {
        const member = memberData.member;
        console.log('Processing member:', member); // Debugging log

        const memberArticle = document.createElement('article');
        memberArticle.classList.add('member');

        const memberName = document.createElement('h3');
        memberName.textContent = member.name;

        const memberImage = document.createElement('img');
        memberImage.setAttribute('src', member.image);
        memberImage.setAttribute('alt', member.name);
        memberImage.setAttribute('width', '300');

        const memberLevel = document.createElement('h4');
        memberLevel.textContent = `Level: ${member.level}`;

        const memberPhone = document.createElement('p');
        memberPhone.textContent = `Phone: ${member.phone}`;

        const memberAddress = document.createElement('p');
        memberAddress.textContent = `Address: ${member.address}`;

        const memberUrl = document.createElement('a');
        memberUrl.setAttribute('href', member.url);
        memberUrl.textContent = 'Visit website';

        memberArticle.appendChild(memberImage);
        memberArticle.appendChild(memberName);
        memberArticle.appendChild(memberLevel);
        memberArticle.appendChild(memberPhone);
        memberArticle.appendChild(memberAddress);
        memberArticle.appendChild(memberUrl);
        memberArticle.style.background = 'rgb(229, 217, 217)';

        section.appendChild(memberArticle);

    });
}

function addToggleViewListener() {
    toggleViewButton.addEventListener('click', () => {
        section.classList.toggle('hide-images');
    });
}

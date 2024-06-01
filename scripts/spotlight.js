const linkMembers = "https://raw.githubusercontent.com/Chrispinsteve/wdd230/main/chamber/data/members.json";

document.addEventListener('DOMContentLoaded', () => {
    displaySpotlight();
});

const spotlightSection = document.getElementById('spotlight-section');

async function displaySpotlight() {
    try {
        const response = await fetch(linkMembers);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const qualifiedMembers = data.members.filter(memberData => {
            const level = memberData.member.level.toLowerCase();
            return level === 'silver' || level === 'gold';
        });
        const selectedMembers = getRandomMembers(qualifiedMembers, 2, 3);
        displayMembers(selectedMembers);
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
}

function getRandomMembers(members, min, max) {
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayMembers(members) {
    spotlightSection.innerHTML = '';
    members.forEach(memberData => {
        const member = memberData.member;

        const memberArticle = document.createElement('article');
        memberArticle.classList.add('member-spotlight');

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

        spotlightSection.appendChild(memberArticle);
    });
}

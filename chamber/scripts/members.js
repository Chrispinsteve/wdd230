
const linkMembers = "https://github.com/Chrispinsteve/wdd230/blob/main/chamber/data/members.json";

//Get into the html document

async function displayLinks() {
    try {
        const response = await fetch(linkMembers);
        if (!response.ok) {
            throw new Error('Something does not work');
        }
        const data = await response.json();
        console.table(data); // Display data 
        displayMembers(data.members);
    } catch (error) {
        console.error('Oups! There is an error: ', error);
    }
}


function displayMembers(members) {

    //Get into the html document
    const section = document.querySelector('.content-1');
    section.innerHTML = '';

    members.forEach(member => {

        const memberArticle = document.createElement('article');
        memberArticle.classList.add('member');

        const memberName = document.createElement('h3');
        memberName.textContent = member.member.name;

        const memberImage = document.createElement('img');
        memberImage.setAttribute('src', member.member.image);
        memberImage.setAttribute('alt', member.member.name);
        memberImage.setAttribute('width', '300');

        const memberLevel = document.createElement('h4');
        memberLevel.textContent = `Level: ${member.member.level}`;

        const memberPhone = document.createElement('p');
        memberPhone.textContent = `Phone: ${member.member.phone}`;

        const memberAdress = document.createElement('p');
        memberAdress.textContent = `Adress: ${member.member.address}`;

        const memberUrl = document.createElement('a');
        memberUrl.setAttribute('href', member.member.url);
        memberUrl.textContent = `Visit website`;

        memberArticle.appendChild(memberImage);
        memberArticle.appendChild(memberName);
        memberArticle.appendChild(memberLevel);
        memberArticle.appendChild(memberPhone);
        memberArticle.appendChild(memberAdress);
        memberArticle.appendChild(memberUrl);

        section.appendChild(memberArticle);

    });
}

displayLinks();


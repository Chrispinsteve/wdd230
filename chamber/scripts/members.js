
const linkMembers = "https://github.com/Chrispinsteve/wdd230/blob/main/chamber/data/members.json";

//Get into the html document
const article = document.querySelector('.article');
const image = document.querySelector('#image-main');

async function displayLinks() {
    const response = await fetch(linkMembers);
    console.table(data)//display data 
    displayMembers(data.members);
}


function displayMembers(members) {

    const section = document.querySelector('.content-1');
    section.innerHTML = '';

    Members.forEach(member => {

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

        const memberAdress = document.createElement('p');
        memberAdress.textContent = `Adress: ${member.address}`;

        const memberUrl = document.createElement('a');
        memberUrl.setAttribute('href', member.url);
        memberUrl.textContent = `Visit website`;

    })
}

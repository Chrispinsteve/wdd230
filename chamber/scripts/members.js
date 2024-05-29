
const linkMembers = "https://github.com/Chrispinsteve/wdd230/blob/main/chamber/data/members.json";

//Get into the html document
const article = document.querySelector('.article');
const image = document.querySelector('#image-main');

async function displayLinks() {
    const response = await fetch(linkMembers);
    const data = await response.json();
    console.table(data)//display data 
    displayMembers(data.Members);
}


function discoverMember() {
    Members.forEach(member => {
        let memberItem = document.createElement('li');
        let memberName = document.createElement('h3');
        let imageSrc = member.image;

        image.setAttribute('src', imageSrc)
        memberName.textContent = member.name;
        memberItem.appendChild(memberName);
    })
}


const linkMembers = "https://github.com/Chrispinsteve/wdd230/blob/main/chamber/data/members.json";

//Get into the html document
const article = document.querySelector('.article');
const image = document.querySelector('#image-main');

async function displayLinks() {
    const response = await fetch(linkMembers);
    console.table(data)//display data 
    displayMembers(data.members);
}


function discoverMember(members) {
    Members.forEach(member => {
        let memberItem = document.createElement('li');
        let memberName = document.createElement('h3');
        let imageSrc = member.image;

        image.setAttribute('src', imageSrc);
        image.setAttribute('alt', "image main")
        memberName.textContent = member.name;
        memberItem.appendChild(memberName);
    })
}

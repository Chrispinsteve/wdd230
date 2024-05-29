const  article = document.querySelector('.article');
const linkMembers = "https://github.com/Chrispinsteve/wdd230/blob/main/chamber/data/members.json";


async function displayLinks(){
    const response = await fetch(linkMembers);
    const data = await response.json();
    console.table(data)//display data 
    displayMembers(data.Members);
}


function discoverMember(){
    Members.forEach(member => {
        let memberItem = document.createElement('li');
        let memberName = document.createElement('h3');

        memberName.textContent = member.name;
        memberItem.appendChild(memberName);
    })
}

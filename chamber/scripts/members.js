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

    })
}

const  article = document.querySelector('.article');
const linkMembers = "https://github.com/Chrispinsteve/wdd230/blob/main/chamber/data/members.json";


async function displayLinks(){
    let response = await fetch(linkMembers);
    let data = await response.json();
    console.table(data)//display data 
    displayMembers(data.member);
}


function discoverMember(){

}

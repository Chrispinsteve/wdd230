const baseURL = "https://chrispinsteve.github.io/wdd230/";
const linksURL = "https://chrispinsteve.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    let data = await response.json();
    displayLinks(data);
}
getLinks();

function displayLinks(data){

}

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=18.53921&lon=-72.335&appid=9a91868ee8db995a0699a868f975dfe6&units=imperial';

const baseURL = "https://chrispinsteve.github.io/wdd230/";
const linksURL = "https://chrispinsteve.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    let data = await response.json();
    displayLinks(data);
}
getLinks();

function displayLinks(weeks){

}
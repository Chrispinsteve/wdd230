const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74719956797481&lon=6.637868782747855&appid=9a91868ee8db995a0699a868f975dfe6';

//Select HTML elements in the the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


async function apiFetch(url){
    try{
        let response = await fetch(url)
        let data = await response.json()
    }
    catch(error){
        console.error('An error occurred:', error)
    }
}
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74719956797481&lon=6.637868782747855&appid=9a91868ee8db995a0699a868f975dfe6';

//Select HTML elements in the the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


async function apiFetch() {
    try {
        let response = await fetch(url)
        if (response.ok) {
            let data = await response.json()
            console.log(data)// For Testing
            //displayResult(data);
        } 
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log('An error occurred:', error);
    }
}
apiFetch();

function displayResult(data){
    currentTemp.innerHTML = `${data.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/10d.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', data.icon)
    weatherIncon.setAttribute('alt', 'weathet icon');
    captionDesc.textContent = `${desc}`;
}


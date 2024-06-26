const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74719956797481&lon=6.637868782747855&appid=9a91868ee8db995a0699a868f975dfe6&units=imperial';

// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            displayResult(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log('An error occurred:', error);
    }
}
apiFetch();

function displayResult(data) {
    // Display the temperature in Fahrenheit
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    // Get the icon code from the weather data
    const iconCode = data.weather[0].icon;

    // Construct the icon URL
    const iconsrc = `https://openweathermap.org/img/w/10d.png`;

    // Get the description from the weather data
    let desc = data.weather[0].description;

    // Set the icon URL and alt text
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    // Set the description text
    captionDesc.textContent = desc;
}

const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=18.53921&lon=-72.335&appid=9a91868ee8db995a0699a868f975dfe6&units=imperial';
const linksURL = 'https://chrispinsteve.github.io/wdd230/data/links.json';

// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weekLinks = document.querySelector('#Activities');

// ----------- Fetch and display weather data -------------\\
async function fetchWeather() {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            console.log('Weather data:', data);  // Debugging log
            displayWeather(data);
        } else {
            throw new Error('Unable to fetch weather data');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

function displayWeather(data) {
    //------------ Display the temperature in Fahrenheit ----------\\
    currentTemp.innerHTML = `Weather: ${data.main.temp}&deg;F`;

    //------------ icon code from the weather data ------------\\
    const iconCode = data.weather[0].icon;

    // Construct the icon URL
    const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;

    // Get the description from the weather data
    let desc = data.weather[0].description;

    //------------- icon URL and alt text ------------\\
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    //------------- description text --------------\\
    captionDesc.textContent = desc;
}



//----------[  DATA WEEKS LEARNING ACTIVITIES  ]--------- FRON LINKS.JSON ---------//

// Fetch and display links data
async function fetchLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log('Links data:', data);  // Debugging log
            displayLinks(data.weeks);
        } else {
            throw new Error('Unable to fetch links data');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

function displayLinks(weeks) {
    weeks.forEach(week => {
        const weekItem = document.createElement('li');
        const titleW = document.createElement('h3');
        TitleW.textContent = week.week;
        weekItem.appendChild(TitleW);

        const weekLinksList = document.createElement('ul');
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            weekLinksList.appendChild(listItem);
        });

        weekItem.appendChild(weekLinksList);
        weekLinks.appendChild(weekItem);
    });
}

fetchWeather();
fetchLinks();

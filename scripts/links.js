const url = 'https://api.openweathermap.org/data/2.5/weather?lat=18.53921&lon=-72.335&appid=9a91868ee8db995a0699a868f975dfe6&units=imperial';
const linksURL = "https://chrispinsteve.github.io/wdd230/data/links.json";

// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const linkList = document.querySelector('#Activities');

// Fetch and display weather data
async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log('An error occurred:', error);
    }
}

function displayWeather(data) {
    // Display the temperature in Fahrenheit
    currentTemp.innerHTML = `Weather: ${data.main.temp}&deg;F`;

    // Get the icon code from the weather data
    const iconCode = data.weather[0].icon;

    // Construct the icon URL
    const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;

    // Get the description from the weather data
    let desc = data.weather[0].description;

    // Set the icon URL and alt text
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    // Set the description text
    captionDesc.textContent = desc;
}

// Fetch and display links data
async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            let data = await response.json();
            displayLinks(data.weeks);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log('An error occurred:', error);
    }
}

function displayLinks(weeks) {
    weeks.forEach(week => {
        let weekItem = document.createElement('li');
        let weekTitle = document.createElement('h3');
        weekTitle.textContent = week.week;
        weekItem.appendChild(weekTitle);
        
        let weekLinksList = document.createElement('ul');
        
        week.links.forEach(link => {
            let listItem = document.createElement('li');
            let anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            weekLinksList.appendChild(listItem);
        });
        
        weekItem.appendChild(weekLinksList);
        linkList.appendChild(weekItem);
    });
}

// Initialize the data fetches
apiFetch();
getLinks();

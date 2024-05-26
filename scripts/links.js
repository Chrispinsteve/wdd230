
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=18.53921&lon=-72.335&appid=9a91868ee8db995a0699a868f975dfe6&units=imperial';
const baseURL = "https://chrispinsteve.github.io/wdd230/";
const linksURL = "https://chrispinsteve.github.io/wdd230/data/links.json";


// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const linkList = document.querySelector('#Activities')


//Data WEEKS INFORMATION
async function getLinks() {
    const response = await fetch(linksURL);
    let data = await response.json();
    displayLinks(data);
}
getLinks();

function displayLinks(weeks){
    weeks.forEach(week => {
        let listItem = document.createElement('li');
        let link = document.createElement('a');
        link.href = week.url;
        link.textContent = `Week ${week.week}`;
        listItem.appendChild(link);
        linkList.appendChild(listItem);
    })
}




//-------------------------- WEATHER --------------------------\\
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

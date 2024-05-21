const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navalist');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})


/*------------------- "DATE" ---------------------*/
const Options = { 
    month: 'long', day: 'numeric', year: 'numeric'};

document.querySelector('#date').textContent = new Date().toLocaleDateString('en-Us', Options);

document.querySelector('#lastModified').textContent = new Date().toDateString('en-Us', Options)


/*-------------- "DARK" and "LIGHT" --------------*/
const modeButton = document.querySelector('#mode');
const main = document.querySelector('main');
const divGeneral = document.querySelector('.general');
const leftSide = document.querySelector('.left-side');
const sections = document.querySelectorAll('section');
const articles = document.querySelectorAll('article');
const h1 = document.querySelector('.h11');
const h3Elements = document.querySelectorAll('h3');
const paraSpans = document.querySelectorAll('p span');

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes('🌙')) {
        divGeneral.style.background = '#363638';
        leftSide.style.background = '#7c7c7c';
        main.style.background = '#797979';
        h1.style.color = 'white';
        
        h3Elements.forEach(h3 => {
            h3.style.color = 'white';
        });
        
        paraSpans.forEach(span => {
            span.style.color = 'white';
        });

        modeButton.textContent = '🔆';
    } else {
        divGeneral.style.background = 'whitesmoke';
        leftSide.style.background = 'whitesmoke';
        main.style.background = 'rgb(226, 226, 226)';
        h1.style.color = 'rgb(68, 68, 68)';
        
        h3Elements.forEach(h3 => {
            h3.style.color = 'rgb(68, 68, 68)';
        });
        
        
        paraSpans.forEach(span => {
            span.style.color = 'black';
        });

        modeButton.textContent = '🌙';
    }
});






// 1️⃣ Initialize display element variables
const visitsDisplay = document.querySelector(".visits");
const sideContent = document.querySelector(".side-content");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions. 🥳`;
}

// 4️⃣ Get the last visit date from localStorage
const lastVisit = window.localStorage.getItem("lastVisit");

if (lastVisit) {
    // Calculate the time difference between now and the last visit
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const daysSinceLastVisit = Math.floor((Date.now() - new Date(lastVisit)) / millisecondsPerDay);

    if (daysSinceLastVisit === 0) {
        sideContent.textContent = "Back so soon! Awesome!";
    } else if (daysSinceLastVisit === 1) {
        sideContent.textContent = "You last visited 1 day ago.";
    } else {
        sideContent.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
    }
} else {
    sideContent.textContent = "This is your first visit.";
}

// 5️⃣ Increment the number of visits by one and update last visit date
numVisits++;
window.localStorage.setItem("numVisits-ls", numVisits);
window.localStorage.setItem("lastVisit", new Date().toISOString());



/*------------ FORM STYLING ------------*/
// Function to get the current date and time in ISO format
function getCurrentTimestamp() {
    return new Date().toISOString();
}

// Set the value of the hidden input field with the current date and time
document.getElementById('timestamp').value = getCurrentTimestamp();

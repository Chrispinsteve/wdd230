document.addEventListener('DOMContentLoaded', () => {
    const pass1 = document.getElementById('pass1');
    const pass2 = document.getElementById('pass2');
    const form = document.querySelector('form');
    const formMessage = document.getElementById('formmessage');

    form.addEventListener('submit', (event) => {
        if (pass1.value !== pass2.value) {
            event.preventDefault();  // Prevent form submission
            formMessage.textContent = "❗Passwords DO NOT MATCH!";
            formMessage.style.color = "red";
            formMessage.style.visibility = "visible";

            pass2.style.backgroundColor = "#fff0f3";
            pass2.value = "";
            pass2.focus();
        } else {
            formMessage.style.visibility = "hidden";
            pass2.style.backgroundColor = "#fff";
        }
    });
});


/*----------- MENU BOTTON -----------*/

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navalist");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

const navigationLinks = document.querySelector('.navalist a');

/*--------------GET DATE-------------*/


const Options = { 
    month: 'long', day: 'numeric', year: 'numeric'};

document.querySelector('#date').textContent = new Date().toLocaleDateString('en-Us', Options);

document.querySelector('#lastModified').textContent = new Date().toDateString('en-Us', Options)


/*--------------------RANGE------------------ */
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

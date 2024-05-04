const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navalist");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

const navigationLinks  = document.querySelector('.navalist a');



/*------------------ Dark and Light  Mode -----------------*/

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const navalist = document.querySelector("nav");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {

        hamButton.style.color = "rgb(0, 125, 171)";
        header.style.background = "363638";
        header.style.color = "#fff";

        navalist.style.background = "#363638"
        
        main.style.background = "#363638";
		main.style.color = "#fff";

		modeButton.textContent = "🔆";
	} else {
        hamButton.style.color = "black"
        header.style.color = "#000"

        navalist.style.background = "white"

		main.style.background = "#fff";
		main.style.color = "#000";
		modeButton.textContent = "🌙";
	}
});

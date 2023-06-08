import generateInitialPage from "./page-load"
import generateMenuPage from "./menu"
import generateHomePage from "./home";
import generateContactPage from "./contact"

generateInitialPage();
window.addEventListener("load", generateHomePage);

const navbar = document.querySelector(".navbar");

const btnArr = Array.from(document.querySelectorAll(".btn"));
const moduleGeneratorsArray = [generateMenuPage, generateHomePage, generateContactPage];

for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener("click", moduleGeneratorsArray[i])
}
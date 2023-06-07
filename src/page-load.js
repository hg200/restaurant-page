import "./styles/style.css"
import menuIcon from "./assets/menu-icon.png"
import homeIcon from "./assets/burger-icon-home.png"

function generateInitialPage() {
    const body = document.querySelector("body");
    const content = document.getElementById("content");

    const navbar = document.createElement("div");
    navbar.classList.add("navbar");
    navbar.innerHTML = `<div class="menuBtn btn"><img src="${menuIcon}">Menu</div>
    <div class="homebtn btn"><img src="${homeIcon}"></div>
    <div class="contactBtn btn">Contact</div>`;
    content.appendChild(navbar);

    return;
}

export default generateInitialPage;
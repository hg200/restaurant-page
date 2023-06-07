import "./styles/style.css";

function generateHomePage() {
    const body = document.querySelector("body");
    const content = document.getElementById("content");

    //body.addEventListener("load", CreateHomePage);
    const navbar = document.createElement("div");
    navbar.classList.add("navbar");
    navbar.innerHTML = `<div class="menuBtn btn">Menu</div>
    <div class="homebtn btn">Home</div>
    <div class="contactBtn btn">Contact</div>`;
    content.appendChild(navbar);

    return;
}

export default generateHomePage;
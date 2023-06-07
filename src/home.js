import "./styles/style.css"
import burger from "./assets/burger-transparent.png"


function generateHomePage() {
    const content = document.querySelector("#content");

    const containerHome = document.createElement("div");
    containerHome.classList.add("containerHome");
    containerHome.innerHTML = `<img src="${burger}">`;

    content.appendChild(containerHome);

};

export default generateHomePage;
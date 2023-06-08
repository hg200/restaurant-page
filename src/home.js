import "./styles/style.css"
import burger from "./assets/burger-transparent.png"


function generateHomePage() {
    const content = document.querySelector("#content");

    //const container = document.createElement("div");
    const container = document.querySelector(".container");
    container.innerHTML = "";

    container.classList.add("containerHome");
    container.classList.add("container");
    container.innerHTML = `<img src="${burger}">`;

    content.appendChild(container);

};

export default generateHomePage;
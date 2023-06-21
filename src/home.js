import "./styles/style.css"
import burger from "./assets/chef.jpg"


function generateHomePage() {
    const content = document.querySelector("#content");

    //const container = document.createElement("div");
    const container = document.querySelector(".container");
    container.innerHTML = "";

    container.className = "";

    container.classList.add("containerHome");
    container.classList.add("container");
    container.innerHTML = `<span>Test the real Burger</span><img src="${burger}">`;

    content.appendChild(container);

};

export default generateHomePage;
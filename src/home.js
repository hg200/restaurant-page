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
    container.innerHTML = `<div><span>Test the real Burger</span><p>Savor the ultimate burger experience at Burger Bistro, where quality ingredients, customizable options, and friendly service come together to create mouthwatering perfection.</p></div><img src="${burger}">`;

    content.appendChild(container);

};

export default generateHomePage;
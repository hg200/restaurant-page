import "./styles/style.css"
import eggBurst from "./assets/egg-burst.jpg"
import vegFrenzy from "./assets/veg-frenzy.jpg"
import icecreamBurst from "./assets/icecream-burst.jpg"
import cheeseBurst from "./assets/cheese-burst.jpg"
import purrfect from "./assets/purrfect.jpg"

function generateMenuPage() {
    const content = document.querySelector("#content");

    //const container = document.createElement("div");
    const container = document.querySelector(".container");
    container.innerHTML = "";

    container.className = "";

    container.innerHTML = `<div class="burger"><img src="${cheeseBurst}"><span><div class="burgerName">Cheese Burst</div> All the cheese you can imagine!</span></div>
    <div class="burger"><img src="${purrfect}"><span><div class="burgerName">Purrfect!</div>All the cheese you can imagine!</span></div>
    <div class="burger"><img src="${icecreamBurst}"><span><div class="burgerName">Ice Cream Burst</div>All the cheese you can imagine!</span></div>
    <div class="burger"><img src="${eggBurst}"><span><div class="burgerName">Ice Cream Burst</div>All the cheese you can imagine!</span></div>
    `

    container.classList.add("containerMenu");
    container.classList.add("container");
    content.appendChild(container);

};

export default generateMenuPage;
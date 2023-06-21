import "./styles/style.css"
import map from "./assets/google-map.png"
import phone from "./assets/contact-icon.svg"

function generateContactPage() {
    const content = document.querySelector("#content");

    // const container = document.createElement("div");
    const container = document.querySelector(".container");
    container.innerHTML = "";

    container.className = "";

    container.innerHTML = `<img src="${map}"><span><img src="${phone}"> +1-541-754-3010 <img src="${phone}"> Broadway</span>`

    container.classList.add("containerContact");
    container.classList.add("container");

    content.appendChild(container);

};

export default generateContactPage;
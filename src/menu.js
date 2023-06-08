import "./styles/style.css"

function generateMenuPage() {
    const content = document.querySelector("#content");

    //const container = document.createElement("div");
    const container = document.querySelector(".container");
    container.innerHTML = "";
    container.classList.add("containerMenu");
    container.classList.add("container");
    content.appendChild(container);

};

export default generateMenuPage;
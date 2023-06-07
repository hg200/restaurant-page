import "./styles/style.css"

function generateMenuPage() {
    const content = document.querySelector("#content");

    const containerMenu = document.createElement("div");
    containerMenu.classList.add("containerMenu");

    content.appendChild(containerMenu);

};

export default generateMenuPage;
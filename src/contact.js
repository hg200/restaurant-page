import "./styles/style.css"

function generateContactPage() {
    const content = document.querySelector("#content");

    // const container = document.createElement("div");
    const container = document.querySelector(".container");
    container.innerHTML = "";

    container.classList.add("containerContact");
    container.classList.add("container");

    content.appendChild(container);

};

export default generateContactPage;
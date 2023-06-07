import "./styles/style.css"

function generateContactPage() {
    const content = document.querySelector("#content");

    const containerContact = document.createElement("div");
    containerContact.classList.add("containerContact");

    content.appendChild(containerContact);

};

export default generateContactPage;
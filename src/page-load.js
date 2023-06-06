import { CreateHomePage } from "./home";

export function initialPageLoad() {
    const body = document.querySelector("body");
    body.addEventListener("load", CreateHomePage);
}
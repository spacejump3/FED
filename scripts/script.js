// JavaScript Document
console.log("hi");

let groeneButton = document.querySelector("section > a:first-of-type");

groeneButton.addEventListener("mouseover", buttonAnimatie);

groeneButton.addEventListener("mouseout", buttonAnimatieWeg);

function buttonAnimatie() {
    groeneButton.classList.add("hoverAnimatie")
}

function buttonAnimatieWeg() {
    groeneButton.classList.remove("hoverAnimatie")
}
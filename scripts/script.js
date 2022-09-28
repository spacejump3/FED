// JavaScript Document
console.log("hi");

let groeneButton = document.querySelector("section > a:first-of-type")

groeneButton.addEventListener("mouseover", buttonAnimatie)

groeneButton.addEventListener("mouseout", buttonAnimatieWeg)

function buttonAnimatie() {
    groeneButton.classList.add("hoverAnimatie")
}

function buttonAnimatieWeg() {
    groeneButton.classList.remove("hoverAnimatie")
}

// hamburger menu

let burgerKnop = document.querySelector("header > button:first-of-type")
let burgerTerugKnop = document.querySelector("header nav button")

let mobileNav = document.querySelector("header nav:nth-of-type(2)")

burgerKnop.addEventListener("click", openMenu)
burgerTerugKnop.addEventListener("click", sluitMenu)

function openMenu() {
    mobileNav.classList.add("toonMenu")
}

function sluitMenu() {
    mobileNav.classList.remove("toonMenu")
}
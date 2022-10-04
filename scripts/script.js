// JavaScript Document
console.log("hi");

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

// muziekje

let meerLadenKnop = document.querySelector("section:nth-of-type(5) button")
let backgroundMusic = document.querySelector("audio")

meerLadenKnop.addEventListener("click", speelMuziek)

function speelMuziek() {
    backgroundMusic.play()
    backgroundMusic.volume = .4
}
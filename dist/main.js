import { Tamagotchi } from "./Tamagotchi.js";
const cinnamonroll = new Tamagotchi();
const title = document.querySelector("#title");
const play = document.querySelector("#play");
const eat = document.querySelector("#eat");
const sleep = document.querySelector("#sleep");
const sprite = document.getElementById("sprite");
title.textContent = "¡Hola pequeño Chile Morron!";
cinnamonroll.getHappiness();
cinnamonroll.getHunger();
cinnamonroll.getSleepiness();
play.addEventListener("click", simpleAction);
sleep.addEventListener("click", sleeping);
eat.addEventListener("click", eting);
function simpleAction() {
    sprite.style.opacity = '0.8';
    setTimeout(() => {
        sprite.src = './src/sprites/cinammonroll.png';
        sprite.style.opacity = '1';
        sprite.height = 230;
    }, 3000);
    sprite.style.opacity = '0';
    setTimeout(() => {
        sprite.src = './src/sprites/cinammonroll-heart.png';
        sprite.style.opacity = '1';
        sprite.height = 230;
    }, 2000);
    sprite.style.opacity = '0';
    setTimeout(() => {
        sprite.src = './src/sprites/cinammonroll-play.png';
        sprite.style.opacity = '1';
        sprite.height = 230;
    }, 1000);
    cinnamonroll.playWith();
}
function sleeping() {
    sprite.style.opacity = '0';
    setTimeout(() => {
        sprite.src = './src/sprites/cinammonroll.png';
        sprite.style.opacity = '1';
        sprite.height = 230;
    }, 3000);
    sprite.style.opacity = '0';
    setTimeout(() => {
        sprite.src = './src/sprites/cinammonroll-up.png';
        sprite.style.opacity = '0';
        sprite.height = 280;
    }, 2000);
    sprite.style.opacity = '0';
    setTimeout(() => {
        sprite.src = './src/sprites/cinammonroll-sleep.png';
        sprite.style.opacity = '1';
        sprite.height = 230;
    }, 1000);
    cinnamonroll.sleepWell();
}
function eting() {
    sprite.style.opacity = '0';
    setTimeout(() => {
        sprite.src = './src/sprites/cinammonroll.png';
        sprite.style.opacity = '1';
        sprite.height = 230;
    }, 3000);
    sprite.style.opacity = '0';
    setTimeout(() => {
        sprite.src = './src/sprites/cinammonroll-full.png';
        sprite.style.opacity = '0';
    }, 2000);
    sprite.style.opacity = '0';
    setTimeout(() => {
        sprite.src = './src/sprites/cinammonroll-eat.png';
        sprite.style.opacity = '1';
    }, 1000);
    cinnamonroll.giveFood();
}
//# sourceMappingURL=main.js.map
import { Tamagotchi } from "./Tamagotchi.js";
import { GameState } from "./GameState.js";
const cinnamonroll = new Tamagotchi();
const title = document.querySelector("#title");
const play = document.querySelector("#play");
const eat = document.querySelector("#eat");
const sleep = document.querySelector("#sleep");
const reset = document.querySelector("#reset");
const sprite = document.getElementById("sprite");
title.textContent = "¡Hola pequeño Chile Morron!";
cinnamonroll.getHappiness();
cinnamonroll.getHunger();
cinnamonroll.getSleepiness();
play.addEventListener("click", simpleAction);
sleep.addEventListener("click", sleeping);
eat.addEventListener("click", eating);
reset.addEventListener("click", resetGame);
function simpleAction() {
    sprite.style.opacity = '0';
    setTimeout(() => {
        sprite.src = './src/img/sprites/cinammonroll-play.png';
        sprite.style.opacity = '1';
        sprite.height = 230;
    }, 1000);
    setTimeout(() => {
        sprite.src = './src/img/sprites/cinammonroll-heart.png';
        sprite.style.opacity = '1';
        sprite.height = 230;
    }, 2000);
    setTimeout(() => {
        sprite.src = './src/img/sprites/cinammonroll.png';
        sprite.style.opacity = '1';
        sprite.height = 230;
    }, 3000);
    cinnamonroll.playWith();
}
function sleeping() {
    sprite.style.opacity = '0';
    setTimeout(() => {
        sprite.src = './src/img/sprites/cinammonroll-sleep.png';
        sprite.style.opacity = '1';
        sprite.height = 230;
    }, 1000);
    setTimeout(() => {
        sprite.src = './src/img/sprites/cinammonroll-up.png';
        sprite.style.opacity = '1';
        sprite.height = 280;
    }, 2000);
    setTimeout(() => {
        sprite.src = './src/img/sprites/cinammonroll.png';
        sprite.style.opacity = '1';
        sprite.height = 230;
    }, 3000);
    cinnamonroll.sleepWell();
}
function eating() {
    sprite.style.opacity = '0';
    setTimeout(() => {
        sprite.src = './src/img/sprites/cinammonroll-eat.png';
        sprite.style.opacity = '1';
        sprite.height = 230;
    }, 1000);
    setTimeout(() => {
        sprite.src = './src/img/sprites/cinammonroll-full.png';
        sprite.style.opacity = '1';
        sprite.height = 230;
    }, 2000);
    setTimeout(() => {
        sprite.src = './src/img/sprites/cinammonroll.png';
        sprite.style.opacity = '1';
        sprite.height = 230;
    }, 3000);
    cinnamonroll.giveFood();
}
function resetGame() {
    if (confirm('¿Estás seguro de que quieres reiniciar el juego? Se perderá todo el progreso.')) {
        GameState.clear();
        location.reload();
    }
}
//# sourceMappingURL=main.js.map
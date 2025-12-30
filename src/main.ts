import { Tamagotchi} from "./Tamagotchi.js";
import { GameState } from "./GameState.js";
const cinnamonroll = new Tamagotchi();

const title = document.querySelector("#title") as HTMLElement;
const play = document.querySelector("#play") as HTMLButtonElement;
const eat = document.querySelector("#eat") as HTMLButtonElement;
const sleep = document.querySelector("#sleep") as HTMLButtonElement;
const reset = document.querySelector("#reset") as HTMLButtonElement;
const sprite = document.getElementById("sprite") as HTMLImageElement;

title.textContent = "¡Hola pequeño Chile Morron!";

cinnamonroll.getHappiness();
cinnamonroll.getHunger();
cinnamonroll.getSleepiness();

play.addEventListener("click", simpleAction);
sleep.addEventListener("click", sleeping);
eat.addEventListener("click", eating);
reset.addEventListener("click", resetGame);

function simpleAction(): void {
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

function sleeping(): void {
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

function eating(): void {
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

function resetGame(): void {
    if (confirm('¿Estás seguro de que quieres reiniciar el juego? Se perderá todo el progreso.')) {
        GameState.clear();
        location.reload();
    }
}
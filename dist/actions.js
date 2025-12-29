const play = document.getElementById("play");
const sleep = document.getElementById("sleep");
const sprite = document.getElementById("sprite");
export function actions() {
    if (play)
        play.addEventListener("click", simpleAction);
    if (sleep)
        sleep.addEventListener("click", sleeping);
}
export function simpleAction() {
    sprite.style.opacity = '0.8';
    setTimeout(() => {
        sprite.src = './src/sprites/cinammonroll.png';
        sprite.style.opacity = '1';
    }, 1000);
    sprite.style.opacity = '1';
    setTimeout(() => {
        sprite.src = './src/sprites/cinammonroll-heart.png';
        sprite.style.opacity = '0';
    }, 500);
}
export function sleeping() {
    sprite.style.opacity = '0';
    setTimeout(() => {
        sprite.src = './src/sprites/cinammonroll.png';
        sprite.style.opacity = '1';
    }, 1000);
    sprite.style.opacity = '0';
    setTimeout(() => {
        sprite.src = './src/sprites/cinammonroll-up.png';
        sprite.style.opacity = '0';
    }, 600);
    sprite.style.opacity = '0';
    setTimeout(() => {
        sprite.src = './src/sprites/cinammonroll-sleep.png';
        sprite.style.opacity = '1';
    }, 300);
}
//# sourceMappingURL=actions.js.map
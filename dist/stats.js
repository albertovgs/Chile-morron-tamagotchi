const happiness = document.getElementById('happiness');
const sleepiness = document.getElementById('sleepiness');
const hunger = document.getElementById('hunger');
function showHappinessChange(num) {
    if (happiness)
        happiness.innerText = num.toString();
}
function showSleepinessChange(num) {
    if (sleepiness)
        sleepiness.innerText = num.toString();
}
function showHungerChange(num) {
    if (hunger)
        hunger.innerText = num.toString();
}
export { showHappinessChange, showSleepinessChange, showHungerChange };
//# sourceMappingURL=stats.js.map
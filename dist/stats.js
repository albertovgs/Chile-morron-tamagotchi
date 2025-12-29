const happiness = document.getElementById('happiness');
const sleepiness = document.getElementById('sleepiness');
const hunger = document.getElementById('hunger');
function showHappinessChange(num) {
    happiness.innerText = num.toString();
}
function showSleepinessChange(num) {
    sleepiness.innerHTML = num.toString();
}
function showHungerChange(num) {
    hunger.innerHTML = num.toString();
}
export { showHappinessChange, showSleepinessChange, showHungerChange };
//# sourceMappingURL=stats.js.map
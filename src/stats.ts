const happiness = document.getElementById('happiness') as HTMLSpanElement;
const sleepiness = document.getElementById('sleepiness') as HTMLSpanElement;
const hunger = document.getElementById('hunger') as HTMLSpanElement;

function showHappinessChange(num: number): void {
    if (happiness) happiness.innerText = num.toString();
}

function showSleepinessChange(num: number): void {
    if (sleepiness) sleepiness.innerText = num.toString();
}

function showHungerChange(num: number): void {
    if (hunger) hunger.innerText = num.toString();
}

export { showHappinessChange, showSleepinessChange, showHungerChange };
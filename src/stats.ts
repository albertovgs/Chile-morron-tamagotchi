const happiness = document.getElementById('happiness') as HTMLButtonElement;
const sleepiness = document.getElementById('sleepiness') as HTMLButtonElement;
const hunger = document.getElementById('hunger') as HTMLButtonElement;

function showHappinessChange(num:number): void {
    happiness.innerText = num.toString();
}

function showSleepinessChange(num:number): void {
    sleepiness.innerHTML = num.toString();
}

function showHungerChange(num:number): void {
    hunger.innerHTML = num.toString();
}

export { showHappinessChange, showSleepinessChange, showHungerChange };
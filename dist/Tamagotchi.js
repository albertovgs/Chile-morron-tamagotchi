import { showHappinessChange, showHungerChange, showSleepinessChange } from "./stats.js";
const sprite = document.getElementById("sprite");
const title = document.querySelector("#title");
const play = document.querySelector("#play");
const eat = document.querySelector("#eat");
const sleep = document.querySelector("#sleep");
class Tamagotchi {
    constructor() {
        this.happiness = 5;
        this.hunger = 5;
        this.sleepiness = 5;
        this.isAlive = true;
        setInterval(this.makeUnhappy.bind(this), 20000);
        setInterval(this.makeSleepy.bind(this), 60000);
        setInterval(this.makeHungry.bind(this), 40000);
        setInterval(this.cinammonrollIsWaiting.bind(this), 10000);
        setInterval(this.checkStats.bind(this), 10000);
    }
    cinammonrollIsWaiting() {
        sprite.height = 270;
        this.changeTitle('');
        sprite.style.opacity = '0.8';
        sprite.src = './src/img/sprites/cinammonroll-stay.png';
        sprite.style.opacity = '1';
    }
    checkStats() {
        if (this.happiness === 10 && this.hunger === 10 && this.sleepiness === 10) {
            this.isAlive = false;
            this.changeTitle('help');
            sprite.style.opacity = '0.8';
            setTimeout(() => {
                this.changeTitle('dead');
                sprite.style.opacity = '0';
                sprite.src = './src/img/sprites/cinammonroll-dead.png';
            }, 15000);
            sprite.src = './src/img/sprites/cinammonroll-gost.png';
            sprite.style.opacity = '1';
            play.disabled = true;
            eat.disabled = true;
            sleep.disabled = true;
        }
        if (this.happiness >= 7 && this.isAlive) {
            this.changeTitle('isBoring');
            sprite.style.opacity = '0.8';
            sprite.height = 200;
            sprite.src = './src/img/sprites/cinammonroll-boring.png';
            sprite.style.opacity = '1';
        }
        if (this.hunger >= 7 && this.isAlive) {
            this.changeTitle('isHungry');
            sprite.style.opacity = '0.8';
            sprite.src = './src/img/sprites/cinammonroll-hungry.png';
            sprite.style.opacity = '1';
        }
        if (this.sleepiness >= 7 && this.isAlive) {
            sprite.height = 220;
            this.changeTitle('isSleepy');
            sprite.style.opacity = '0.8';
            sprite.src = './src/img/sprites/cinammonroll-tired.png';
            sprite.style.opacity = '1';
        }
    }
    giveFood() {
        this.changeTitle('eat');
        if (this.hunger > 0) {
            this.hunger = Math.min(10, this.hunger - 2);
        }
        if (this.hunger <= 0) {
            this.hunger = 0;
        }
        showHungerChange(this.hunger);
    }
    playWith() {
        this.changeTitle('play');
        if (this.happiness > 0) {
            this.happiness = Math.min(10, this.happiness - 2);
        }
        if (this.happiness <= 0) {
            this.happiness = 0;
        }
        showHappinessChange(this.happiness);
    }
    sleepWell() {
        this.changeTitle('sleep');
        if (this.sleepiness > 0) {
            this.sleepiness = Math.min(10, this.sleepiness - 2);
        }
        if (this.sleepiness <= 0) {
            this.sleepiness = 0;
        }
        showSleepinessChange(this.sleepiness);
    }
    makeUnhappy() {
        if (this.happiness < 10)
            this.happiness = Math.max(0, this.happiness + 1);
        else
            this.happiness = 10;
        showHappinessChange(this.happiness);
        return this.happiness;
    }
    makeHungry() {
        if (this.hunger < 10)
            this.hunger = Math.max(0, this.hunger + 1);
        else
            this.hunger = 10;
        showHungerChange(this.hunger);
        return this.hunger;
    }
    makeSleepy() {
        if (this.sleepiness < 10)
            this.sleepiness = Math.max(0, (this.hunger < 7 ? this.sleepiness + 2 : this.sleepiness + 1));
        else
            this.sleepiness = 10;
        showSleepinessChange(this.sleepiness);
        return this.sleepiness;
    }
    getHappiness() {
        showHappinessChange(this.happiness);
        return this.happiness;
    }
    getHunger() {
        showHungerChange(this.hunger);
        return this.hunger;
    }
    getSleepiness() {
        showSleepinessChange(this.sleepiness);
        return this.sleepiness;
    }
    changeTitle(actions) {
        switch (actions) {
            case 'play':
                title.textContent = "¡Hora de jugar!";
                break;
            case 'eat':
                title.textContent = "¡Vamos a comer!";
                break;
            case 'sleep':
                title.textContent = "¡Esta mimido shhh!";
                break;
            case 'dead':
                title.textContent = "¡Esta MORIDO!";
                break;
            case 'isHungry':
                title.textContent = "¡Esta hambriento!";
                break;
            case 'isSleepy':
                title.textContent = "¡Esta cansado!";
                break;
            case 'isBoring':
                title.textContent = "¡Esta aburrido!";
                break;
            case 'help':
                title.textContent = "¡Oh no!";
                break;
            default:
                title.textContent = "";
                break;
        }
    }
}
export { Tamagotchi };
//# sourceMappingURL=Tamagotchi.js.map
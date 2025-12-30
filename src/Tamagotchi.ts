import { showHappinessChange, showHungerChange, showSleepinessChange } from "./stats.js";
import { GameState } from "./GameState.js";

const sprite = document.getElementById("sprite") as HTMLImageElement;
const title = document.querySelector("#title") as HTMLElement;
const play = document.querySelector("#play") as HTMLButtonElement;
const eat = document.querySelector("#eat") as HTMLButtonElement;
const sleep = document.querySelector("#sleep") as HTMLButtonElement;


class Tamagotchi {
    happiness: number;
    hunger: number;
    sleepiness: number;
    isAlive: boolean;
    private intervals: number[] = [];

    constructor(){
        // Intentar cargar datos guardados
        const savedData = GameState.load();
        
        if (savedData && savedData.isAlive) {
            // Calcular progresión offline
            const offlineProgress = GameState.calculateOfflineProgression(savedData);
            this.happiness = offlineProgress.happiness;
            this.hunger = offlineProgress.hunger;
            this.sleepiness = offlineProgress.sleepiness;
            this.isAlive = !(this.happiness === 10 && this.hunger === 10 && this.sleepiness === 10);
        } else {
            this.happiness = 5;
            this.hunger = 5;
            this.sleepiness = 5;
            this.isAlive = true;
        }

        this.intervals.push(setInterval(this.makeUnhappy.bind(this), 20000));
        this.intervals.push(setInterval(this.makeSleepy.bind(this), 60000));
        this.intervals.push(setInterval(this.makeHungry.bind(this), 40000));
        this.intervals.push(setInterval(this.cinnamonRollIsWaiting.bind(this), 10000));
        this.intervals.push(setInterval(this.checkStats.bind(this), 10000));
        this.intervals.push(setInterval(() => GameState.save(this), 30000)); // Auto-save cada 30 segundos
    }

    cinnamonRollIsWaiting(): void {
        if (!this.isAlive) return;
        sprite.height = 270;
        this.changeTitle('');
        sprite.style.opacity = '0.8';
        sprite.src = './src/img/sprites/cinammonroll-stay.png';
        sprite.style.opacity = '1';
    }

    private clearIntervals(): void {
        this.intervals.forEach(interval => clearInterval(interval));
        this.intervals = [];
    }

    private setSpriteState(titleKey: string, spriteSrc: string, height: number = 230): void {
        this.changeTitle(titleKey);
        sprite.style.opacity = '0.8';
        sprite.height = height;
        sprite.src = spriteSrc;
        sprite.style.opacity = '1';
    }

    checkStats(): void {
        if(this.happiness === 10 && this.hunger === 10 && this.sleepiness === 10){
            this.isAlive = false;
            this.clearIntervals();
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
            return;
        }

        if (!this.isAlive) return;

        if (this.happiness >= 7) {
            this.setSpriteState('isBoring', './src/img/sprites/cinammonroll-boring.png', 200);
        } else if (this.hunger >= 7) {
            this.setSpriteState('isHungry', './src/img/sprites/cinammonroll-hungry.png');
        } else if (this.sleepiness >= 7) {
            this.setSpriteState('isSleepy', './src/img/sprites/cinammonroll-tired.png', 220);
        }
    }

    giveFood(): void {
        if (!this.isAlive) return;
        this.changeTitle('eat');
        this.hunger = Math.max(0, this.hunger - 2);
        showHungerChange(this.hunger);
        GameState.save(this);
    }

    playWith(): void {
        if (!this.isAlive) return;
        this.changeTitle('play');
        this.happiness = Math.max(0, this.happiness - 2);
        showHappinessChange(this.happiness);
        GameState.save(this);
    }

    sleepWell(): void {
        if (!this.isAlive) return;
        this.changeTitle('sleep');
        this.sleepiness = Math.max(0, this.sleepiness - 2);
        showSleepinessChange(this.sleepiness);
        GameState.save(this);
    }

    makeUnhappy(): number {
        if (!this.isAlive) return this.happiness;
        if (this.happiness < 10) {
            this.happiness = this.happiness + 1;
        } else {
            this.happiness = 10;
        }
        showHappinessChange(this.happiness);
        return this.happiness;
    }

    makeHungry(): number {
        if (!this.isAlive) return this.hunger;
        if (this.hunger < 10) {
            this.hunger = this.hunger + 1;
        } else {
            this.hunger = 10;
        }
        showHungerChange(this.hunger);
        return this.hunger;
    }

    makeSleepy(): number {
        if (!this.isAlive) return this.sleepiness;
        if (this.sleepiness < 10) {
            this.sleepiness = this.hunger < 7 ? this.sleepiness + 2 : this.sleepiness + 1;
        } else {
            this.sleepiness = 10;
        }
        showSleepinessChange(this.sleepiness);
        return this.sleepiness;
    }

    getHappiness(): number {
        showHappinessChange(this.happiness);
        return this.happiness;
    }

    getHunger(): number {
        showHungerChange(this.hunger);
        return this.hunger;
    }

    getSleepiness(): number {
        showSleepinessChange(this.sleepiness);
        return this.sleepiness;
    }

    changeTitle(actions: string): void {
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
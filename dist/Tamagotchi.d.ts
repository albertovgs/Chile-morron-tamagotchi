declare class Tamagotchi {
    happiness: number;
    hunger: number;
    sleepiness: number;
    isAlive: boolean;
    constructor();
    cinammonrollIsWaiting(): void;
    checkStats(): void;
    giveFood(): void;
    playWith(): void;
    sleepWell(): void;
    makeUnhappy(): number;
    makeHungry(): number;
    makeSleepy(): number;
    getHappiness(): number;
    getHunger(): number;
    getSleepiness(): number;
    changeTitle(actions: String): void;
}
export { Tamagotchi };
//# sourceMappingURL=Tamagotchi.d.ts.map
declare class Tamagotchi {
    happiness: number;
    hunger: number;
    sleepiness: number;
    isAlive: boolean;
    private intervals;
    constructor();
    cinnamonRollIsWaiting(): void;
    private clearIntervals;
    private setSpriteState;
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
    changeTitle(actions: string): void;
}
export { Tamagotchi };
//# sourceMappingURL=Tamagotchi.d.ts.map
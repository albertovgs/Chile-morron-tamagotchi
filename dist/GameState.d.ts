interface SaveData {
    happiness: number;
    hunger: number;
    sleepiness: number;
    isAlive: boolean;
    lastSaved: number;
}
export declare class GameState {
    private static readonly SAVE_KEY;
    static save(tamagotchi: {
        happiness: number;
        hunger: number;
        sleepiness: number;
        isAlive: boolean;
    }): void;
    static load(): SaveData | null;
    static clear(): void;
    static calculateOfflineProgression(saveData: SaveData): {
        happiness: number;
        hunger: number;
        sleepiness: number;
    };
}
export {};
//# sourceMappingURL=GameState.d.ts.map
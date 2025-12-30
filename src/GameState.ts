interface SaveData {
    happiness: number;
    hunger: number;
    sleepiness: number;
    isAlive: boolean;
    lastSaved: number;
}

export class GameState {
    private static readonly SAVE_KEY = 'tamagotchi-save';

    static save(tamagotchi: { happiness: number; hunger: number; sleepiness: number; isAlive: boolean }): void {
        const saveData: SaveData = {
            happiness: tamagotchi.happiness,
            hunger: tamagotchi.hunger,
            sleepiness: tamagotchi.sleepiness,
            isAlive: tamagotchi.isAlive,
            lastSaved: Date.now()
        };
        localStorage.setItem(this.SAVE_KEY, JSON.stringify(saveData));
    }

    static load(): SaveData | null {
        const saved = localStorage.getItem(this.SAVE_KEY);
        if (!saved) return null;
        
        try {
            return JSON.parse(saved) as SaveData;
        } catch {
            return null;
        }
    }

    static clear(): void {
        localStorage.removeItem(this.SAVE_KEY);
    }

    static calculateOfflineProgression(saveData: SaveData): { happiness: number; hunger: number; sleepiness: number } {
        const timeDiff = Date.now() - saveData.lastSaved;
        const minutesOffline = Math.floor(timeDiff / (1000 * 60));
        
        const happinessIncrease = Math.floor(minutesOffline / 0.33); // 20 seconds = 0.33 minutes
        const hungerIncrease = Math.floor(minutesOffline / 0.67); // 40 seconds = 0.67 minutes
        const sleepinessIncrease = Math.floor(minutesOffline / 1); // 60 seconds = 1 minute
        
        return {
            happiness: Math.min(10, saveData.happiness + happinessIncrease),
            hunger: Math.min(10, saveData.hunger + hungerIncrease),
            sleepiness: Math.min(10, saveData.sleepiness + sleepinessIncrease)
        };
    }
}
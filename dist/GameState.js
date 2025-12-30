export class GameState {
    static save(tamagotchi) {
        const saveData = {
            happiness: tamagotchi.happiness,
            hunger: tamagotchi.hunger,
            sleepiness: tamagotchi.sleepiness,
            isAlive: tamagotchi.isAlive,
            lastSaved: Date.now()
        };
        localStorage.setItem(this.SAVE_KEY, JSON.stringify(saveData));
    }
    static load() {
        const saved = localStorage.getItem(this.SAVE_KEY);
        if (!saved)
            return null;
        try {
            return JSON.parse(saved);
        }
        catch {
            return null;
        }
    }
    static clear() {
        localStorage.removeItem(this.SAVE_KEY);
    }
    static calculateOfflineProgression(saveData) {
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
GameState.SAVE_KEY = 'tamagotchi-save';
//# sourceMappingURL=GameState.js.map

export interface TinyEpicDungeonsItemSet {
    name: string;
    set: TinyEpicDungeonsVersion;
}
 
export interface TinyEpicDungeonsItemSet {
    name: string;
    set: TinyEpicDungeonsVersion;
} 

export enum TinyEpicDungeonsVersion {
    BASE = "Base",
    STORIES = "Stories",
    POTIONS_AND_PERILS = "Potions and Perils",
    ECHOES_OF_AUGHMOORE = "Echoes of Aughmoore",
    PHANTOM_VOYAGE = "Phantom Voyage",
}

export const itemSets: Array<TinyEpicDungeonsItemSet> = [
    {"name": "Of The Bear", "set": TinyEpicDungeonsVersion.BASE},
    {"name": "Of The Lion", "set": TinyEpicDungeonsVersion.BASE},
    {"name": "Of The Panthor", "set": TinyEpicDungeonsVersion.BASE},
    {"name": "Of The Phoenix", "set": TinyEpicDungeonsVersion.BASE},
    {"name": "Of The Viper", "set": TinyEpicDungeonsVersion.STORIES},
    {"name": "Of The Scarab", "set": TinyEpicDungeonsVersion.STORIES},
    {"name": "Of The Dragon", "set": TinyEpicDungeonsVersion.ECHOES_OF_AUGHMOORE},
    {"name": "Of The Pegasus", "set": TinyEpicDungeonsVersion.ECHOES_OF_AUGHMOORE},
    {"name": "Of The Automata", "set": TinyEpicDungeonsVersion.ECHOES_OF_AUGHMOORE},
    {"name": "Aughmoore's", "set": TinyEpicDungeonsVersion.ECHOES_OF_AUGHMOORE},
    {"name": "Of The Revenant", "set": TinyEpicDungeonsVersion.PHANTOM_VOYAGE},
    {"name": "Of The Kraken", "set": TinyEpicDungeonsVersion.PHANTOM_VOYAGE},
];
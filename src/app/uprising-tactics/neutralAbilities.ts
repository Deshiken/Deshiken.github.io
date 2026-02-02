export enum UprisingTacticsFaction {
    TEMPLAR = 'TEMPLAR',
    ORC = 'Orc',
    WOODELF = 'Wood Elf',
    ABOMINATIONS = 'Abominations',
    DRAGONBORN = 'Dragonborn',
    DWARF = 'Dwarf',
    DROW = 'Drow',
    GNOME = 'Gnome',
};

export type NeutralAbility = {
    name: string;
    cost: { 
        gold?: number; 
        mana?: number; 
        technology?: number 
    };
    description: string;
    factionSynergy?: UprisingTacticsFaction[];
};

export const neutralAbilities: NeutralAbility[] = [
    {
        name: 'Reinforced Armor',
        cost: { technology: 2 },
        description: 'Choose a unit. That unit gains +2 Health.',
        factionSynergy: [UprisingTacticsFaction.TEMPLAR],
    },
    {
        name: 'Reinforced Armor',
        cost: { technology: 2 },
        description: 'Choose a unit. That unit gains +2 Health.',
        factionSynergy: [UprisingTacticsFaction.TEMPLAR],
    },
    {
        name: 'Reinforced Armor',
        cost: { technology: 2 },
        description: 'Choose a unit. That unit gains +2 Health.',
        factionSynergy: [UprisingTacticsFaction.TEMPLAR],
    },
    
];
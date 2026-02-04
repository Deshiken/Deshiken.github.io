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

/* Faction Goals Reference
    Elves Ranged attacks, entangle, forest synergy
    Dwarves Armored, siege attacks, buildings synergy
    Orcs added toughness, melee attacks
    Templars healing,
    Abominations multiple units, weakness effects
    Dragonborn flying, spell casting
    Gnomes technology, spell cost reduction
    Drow stealth, poison effects, 
*/

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
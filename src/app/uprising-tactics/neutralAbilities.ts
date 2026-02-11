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
    Orcs added toughness, melee attacks, Hinder spells
    Templars healing, Charge/Calvary
    Abominations multiple units, weakness effects
    Dragonborn flying, spell casting
    Gnomes technology, harvest/farming
    Drow stealth, poison effects, 
*/

export const neutralAbilities: NeutralAbility[] = [
    {
        name: 'Eagle Eye',
        cost: { technology: 2 },
        description: 'Units you control gain +1 damage when attacking a unit or building that is not adjacent.',
        factionSynergy: [UprisingTacticsFaction.WOODELF],
    },
    {
        name: 'Shared Energy',
        cost: { technology: 2 },
        description: 'Units and Buildings you control Heal 1 at the end of your turn when on a region with an entangle token.',
        factionSynergy: [UprisingTacticsFaction.WOODELF, UprisingTacticsFaction.TEMPLAR],
    },
    {
        name: 'Overwhelming Wilderness',
        cost: { technology: 2 },
        description: 'When you perform a special action, place an entangle token on a region.',
        factionSynergy: [UprisingTacticsFaction.WOODELF],
    },
    {
        name: 'Enraged',
        cost: { technology: 2 },
        description: 'Units you control gain +1 damage if they are not at their maximum health.',
        factionSynergy: [UprisingTacticsFaction.ORC],
    },
    {
        name: 'Pillage',
        cost: { technology: 2 },
        description: 'Gain 1 gold when you damage an enemy building.',
        factionSynergy: [UprisingTacticsFaction.ORC],
    },
    {
        name: 'Brute Strength',
        cost: { technology: 2 },
        description: 'Gain +1 gold income for each strength token on units you control.',
        factionSynergy: [UprisingTacticsFaction.ORC],
    },
    {
        name: 'Cure Light Wounds',
        cost: { technology: 2 },
        description: 'Heal 1 on a unit you control after casting a non-combat spell.',
        factionSynergy: [UprisingTacticsFaction.TEMPLAR],
    },
    {
        name: 'Advanced Horsemanship',
        cost: { technology: 2 },
        description: 'Units you control gain an additional +1 damage when using the Charge ability.',
        factionSynergy: [UprisingTacticsFaction.TEMPLAR],
    },
    {
        name: 'Sacred Ground',
        cost: { technology: 2 },
        description: 'If a unit you control is at maximum heath and were to heal any amount, gain 1 mana.',
        factionSynergy: [UprisingTacticsFaction.TEMPLAR],
    },
    {
        name: '',
        cost: { technology: 2 },
        description: 'Heal 1 on a unit you control after casting a non-combat spell.',
        factionSynergy: [UprisingTacticsFaction.DWARF],
    },
    {
        name: 'Advanced Horsemanship',
        cost: { technology: 2 },
        description: 'Units you control gain an additional +1 damage when using the Charge ability.',
        factionSynergy: [UprisingTacticsFaction.DWARF],
    },
    {
        name: 'Sacred Ground',
        cost: { technology: 2 },
        description: 'If a unit you control is at maximum heath and were to heal any amount, gain 1 mana.',
        factionSynergy: [UprisingTacticsFaction.DWARF],
    },
    {
        name: 'Attract the Masses',
        cost: { technology: 2 },
        description: 'Units cost 1 less gold for you to recruit.',
        factionSynergy: [UprisingTacticsFaction.ABOMINATIONS],
    },
    {
        name: 'Group Attack',
        cost: { technology: 2 },
        description: 'Enemy units adjacent to two or more units you control lose all abilities.',
        factionSynergy: [UprisingTacticsFaction.ABOMINATIONS],
    },
    {
        name: 'Curse of Decay',
        cost: { technology: 2 },
        description: 'Enemy units with weaken or slow tokens take 1 damage at the end of your turn.',
        factionSynergy: [UprisingTacticsFaction.ABOMINATIONS],
    },
    {
        name: 'Siphon Magic',
        cost: { technology: 2 },
        description: 'Gain 1 mana when you destroy an enemy unit.',
        factionSynergy: [UprisingTacticsFaction.DRAGONBORN],
    },
    {
        name: 'Arcane Boost',
        cost: { technology: 2 },
        description: 'Once per martial action, you may give a mage unit you control +1 attack distance.',
        factionSynergy: [UprisingTacticsFaction.DRAGONBORN],
    },
    {
        name: 'Sorcerous Bloodline',
        cost: { technology: 3 },
        description: 'You may cast two combat spells each battle.',
        factionSynergy: [UprisingTacticsFaction.DRAGONBORN],
    },
    {
        name: '',
        cost: { technology: 2 },
        description: '',
        factionSynergy: [UprisingTacticsFaction.GNOME],
    },
    {
        name: '',
        cost: { technology: 2 },
        description: '',
        factionSynergy: [UprisingTacticsFaction.GNOME],
    },
    {
        name: '',
        cost: { technology: 2 },
        description: '',
        factionSynergy: [UprisingTacticsFaction.GNOME],
    },
    {
        name: '',
        cost: { technology: 2 },
        description: '',
        factionSynergy: [UprisingTacticsFaction.DROW],
    },
    {
        name: '',
        cost: { technology: 2 },
        description: '',
        factionSynergy: [UprisingTacticsFaction.DROW],
    },
    {
        name: '',
        cost: { technology: 2 },
        description: '',
        factionSynergy: [UprisingTacticsFaction.DROW],
    },
    
];
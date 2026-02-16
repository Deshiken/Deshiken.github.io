import { IconHtml } from "../uprising/spell-cards/spell-card-data";

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
    Drow combat spells, damage to own units
*/

export const neutralAbilities: NeutralAbility[] = [
    {
        name: 'Eagle Eye',
        cost: { technology: 2 },
        description: `<p>Units you control gain +1${IconHtml.Attack} when attacking a unit or building that is not adjacent.</p>`,
        factionSynergy: [UprisingTacticsFaction.WOODELF],
    },
    {
        name: 'Shared Energy',
        cost: { technology: 2 },
        description: `<p>Units and Buildings you control Heal 1 at the end of your turn when on a region with an ${IconHtml.Entangle} token.</p>`,
        factionSynergy: [UprisingTacticsFaction.WOODELF, UprisingTacticsFaction.TEMPLAR],
    },
    {
        name: 'Overwhelming Wilderness',
        cost: { technology: 2 },
        description: `<p>When you perform a special action, place an ${IconHtml.Entangle} token on a region.</p>`,
        factionSynergy: [UprisingTacticsFaction.WOODELF],
    },
    {
        name: 'Enraged',
        cost: { technology: 2 },
        description: `<p>Units you control gain +1${IconHtml.Attack} if they are not at their maximum health.</p>`,
        factionSynergy: [UprisingTacticsFaction.ORC],
    },
    {
        name: 'Pillage',
        cost: { technology: 2 },
        description: `<p>Gain 1${IconHtml.Gold} when you damage an enemy building. Gain 1${IconHtml.Mana} when you destroy an enemy building.</p>`,
        factionSynergy: [UprisingTacticsFaction.ORC],
    },
    {
        name: 'Brute Strength',
        cost: { technology: 2 },
        description: `<p>Gain +1${IconHtml.Gold} income for each strength token on units you control.</p>`,
        factionSynergy: [UprisingTacticsFaction.ORC],
    },
    {
        name: 'Cure Light Wounds',
        cost: { technology: 2 },
        description: `<p>Heal 1 on a unit you control after casting a non-combat spell.</p>`,
        factionSynergy: [UprisingTacticsFaction.TEMPLAR],
    },
    {
        name: 'Advanced Horsemanship',
        cost: { technology: 2 },
        description: `<p>Units you control gain an additional +1${IconHtml.Attack} when using the Charge ability.</p>`,
        factionSynergy: [UprisingTacticsFaction.TEMPLAR],
    },
    {
        name: 'Sacred Ground',
        cost: { technology: 2 },
        description: `<p>If a unit you control is at maximum heath and were to heal any amount, gain 1${IconHtml.Mana}.</p>`,
        factionSynergy: [UprisingTacticsFaction.TEMPLAR],
    },
    {
        name: 'Engineered Mobility',
        cost: { technology: 3 },
        description: `<p>Once per martial action, you may move one building you control to an adjacent region.</p>`,
        factionSynergy: [UprisingTacticsFaction.DWARF],
    },
    {
        name: 'Master Smiths',
        cost: { technology: 2 },
        description: `<p>Units you control adjacent to cities you control gain the Armored ability.</p>`,
        factionSynergy: [UprisingTacticsFaction.DWARF],
    },
    {
        name: 'Iron Defender',
        cost: { technology: 2 },
        description: `<p>When an enemy unit attacks a unit you control and that unit receives no damage, gain 1${IconHtml.Gold}.</p>`,
        factionSynergy: [UprisingTacticsFaction.DWARF],
    },
    {
        name: 'Attract the Masses',
        cost: { technology: 2 },
        description: `<p>Units cost 1 less ${IconHtml.Gold} for you to recruit.</p>`,
        factionSynergy: [UprisingTacticsFaction.ABOMINATIONS],
    },
    {
        name: 'Group Attack',
        cost: { technology: 2 },
        description: `<p>Enemy units adjacent to two or more units you control lose all abilities.</p>`,
        factionSynergy: [UprisingTacticsFaction.ABOMINATIONS],
    },
    {
        name: 'Curse of Decay',
        cost: { technology: 3 },
        description: `<p>Enemy units with weaken or slow tokens take 1 damage at the end of your turn.</p>`,
        factionSynergy: [UprisingTacticsFaction.ABOMINATIONS],
    },
    {
        name: 'Siphon Magic',
        cost: { technology: 2 },
        description: `<p>Gain 1${IconHtml.Mana} when you destroy an enemy unit.</p>`,
        factionSynergy: [UprisingTacticsFaction.DRAGONBORN],
    },
    {
        name: 'Arcane Boost',
        cost: { technology: 2 },
        description: `<p>Once per martial action, you may give a mage unit you control +1${IconHtml.Range}.</p>`,
        factionSynergy: [UprisingTacticsFaction.DRAGONBORN],
    },
    {
        name: 'Sorcerous Bloodline',
        cost: { technology: 3 },
        description: `<p>You may cast two combat spells each battle.</p>`,
        factionSynergy: [UprisingTacticsFaction.DRAGONBORN, UprisingTacticsFaction.DROW],
    },
    {
        name: 'Wealth of Knowledge',
        cost: { technology: 2 },
        description: `<p>You gain +1${IconHtml.Gold} income for each neutral ability you have researched.</p>`,
        factionSynergy: [UprisingTacticsFaction.GNOME],
    },
    {
        name: 'Research Grant',
        cost: { technology: 2 },
        description: `<p>When you perform a research action, you may gain the resources from 1 farm.</p>`,
        factionSynergy: [UprisingTacticsFaction.GNOME],
    },
    {
        name: 'Agricultural Expertise',
        cost: { technology: 2 },
        description: `<p>You may gain the resources of an additonal farm when you perform a harvest action.</p>`,
        factionSynergy: [UprisingTacticsFaction.GNOME],
    },
    {
        name: 'Trechery',
        cost: { technology: 2 },
        description: `<p>Gain 1${IconHtml.Gold} when a unit you control is dealt damage. If you are the cause of this damage, gain 2${IconHtml.Gold} instead.</p>`,
        factionSynergy: [UprisingTacticsFaction.DROW],
    },
    {
        name: 'Counterspell',
        cost: { technology: 2 },
        description: `<p>After an opponent plays a combat spell (before it is revealed), you may pay the ${IconHtml.Mana} cost of that spell to discard it.</p>`,
        factionSynergy: [UprisingTacticsFaction.DROW, UprisingTacticsFaction.DRAGONBORN],
    },
    {
        name: 'Rewarding Pain',
        cost: { technology: 2 },
        description: `<p>When a unit you control is dealt damage you may remove an effect token from that unit or from the region that unit is in and gain 1${IconHtml.Gold}.</p>`,
        factionSynergy: [UprisingTacticsFaction.DROW],
    },
    // Abilities not associated with a faction
    {
        name: 'Shadowstep',
        cost: { technology: 3 },
        description: `<p>You may move a unit you control to an adjacent empty space after it attacks. This movement does not trigger attacks of opportunity.</p>`,
        factionSynergy: [],
    },
    {
        name: 'Homfield Advantage',
        cost: { technology: 2 },
        description: `<p>Units on a region that matches your factions favored region gain +1 ${IconHtml.Attack}.</p>`,
        factionSynergy: [],
    },
    {
        name: 'Familiar Terrain',
        cost: { technology: 2 },
        description: `<p>Gain +1${IconHtml.SlowHaste} when a unit you control moves onto a region matching your faction's favored region during the movement phase of the martial action.</p>`,
        factionSynergy: [],
    },
    {
        name: 'Transmutation',
        cost: { technology: 2 },
        description: `<p>When spending resources (research, casting, recruicting, ect), you may exchange any 1${IconHtml.Mana} or 1${IconHtml.Research} for 3${IconHtml.Gold} or vice versa.</p>`,
        factionSynergy: [],
    },
    {
        name: 'Overwhelming Odds',
        cost: { technology: 2 },
        description: `<p>When attacking a unit or building controlled by a player that has more units than you, gain +1${IconHtml.Attack}.</p>`,
        factionSynergy: [],
    },
    {
        name: 'Enhanced Training',
        cost: { technology: 2 },
        description: `<p>You may add a +${IconHtml.StrengthenWeaken} or +${IconHtml.SlowHaste} to units recruited adjacent to cities you control.</p>`,
        factionSynergy: [],
    },
    {
        name: 'Circle of Life',
        cost: { technology: 2 },
        description: `<p>When a unit you control is destroyed, you may add a ${IconHtml.Entangle} token to the region they were in. Units you control gain +1${IconHtml.Attack} when attacking a unit in an entangled region.</p>`,
        factionSynergy: [],
    },
    
];
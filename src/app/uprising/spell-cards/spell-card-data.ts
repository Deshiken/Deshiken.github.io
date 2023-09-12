

export interface SpellCard {
  name: string,
  spellCost: number,
  description: string,
  effectTokens: null | Array<EffectTokenType>,
  regions: null | Array<Region>,
  prepared: boolean,
  destructive: boolean
}

export enum EffectTokenType {
  Strengthen = 'Strengthen',
  Weaken = 'Weaken',
  Entangle = 'Entangle',
  Slow = 'Slow',
  Haste = 'Haste',
  Bountiful = 'Bountiful',
  Plague = 'Plague',
  Stun = 'Stun',
  Confusion = 'Confusin',
  Poison = 'Poison',
  Damage = 'Damage'
}

export enum Region {
  Hills = 'Hills',
  Plains = 'Plains',
  Forest = 'Forest',
  Marsh = 'Marsh',
  Badlands = 'Badlands',
  Mountains = 'Mountains',
  Water = 'Water'
}

export const SpellCards: Array<SpellCard> = [
  { 
    name: 'Entangle',
    spellCost: 2,
    description: 'Select two regions an place a entangle token on each',
    effectTokens: [EffectTokenType.Entangle],
    regions: null,
    prepared: false,
    destructive: false 
  },
  { 
    name: 'Counter Spell',
    spellCost: 2,
    description: 'Cast after an opponent casts a spell card. Cancel the effect of that card.',
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false 
  },
  { 
    name: 'Wind Gust',
    spellCost: 2,
    description: 'Until the end of the round, all units of target player lose flying.',
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false 
  },
  { 
    name: 'Metamorphosis',
    spellCost: 3,
    description: 'Change up to two units you control into another unit. You can not change a unit inot a heavy unit',
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false 
  },
  { 
    name: 'Reverse Time',
    spellCost: 1,
    description: 'Cast after an opponent rolls their combat dice (attack or defense). They must re-roll all of the dice previously rolled.',
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false 
  },
  { 
    name: 'Flood',
    spellCost: 1,
    description: 'Place a water token on an unoccupied region. You may place a slow token on a unit adjacent to this region.',
    effectTokens: [EffectTokenType.Slow],
    regions: [Region.Water],
    prepared: false,
    destructive: false 
  },
  { 
    name: 'Levitation',
    spellCost: 2,
    description: 'Units you control have flying until the end of your turn. Perform a move action.',
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false 
  },
  { 
    name: 'Dark Bargin',
    spellCost: 1,
    description: 'Destroy one unit you control to destroy up to two target units an opponent controls of equal or lesser cost.',
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: true
  },
  { 
    name: 'Starfall',
    spellCost: 3,
    description: 'Roll a green die for each unit in target army. The owner of that army destroys one unit for each hit rolled.',
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: true
  },
  { 
    name: 'Fireball',
    spellCost: 4,
    description: 'Select an army. Roll four orange dice. The owner of the army destroys one unit for each hit rolled.',
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: true
  },
  { 
    name: 'Read Mind',
    spellCost: 1,
    description: "Look at each player's prepared spells. You may spend another mana to force a player to discard a prepared spell that costs 2 or less mana. You may add a mind contol token to an empty space on a player's action track.",
    effectTokens: [EffectTokenType.Confusion],
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Scry',
    spellCost: 1,
    description: 'Draw 5 spell cards. Keep up to your maximum hand size and discard the rest.',
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false,
  },
  { 
    name: 'Telaport',
    spellCost: 1,
    description: 'Move all units in the region of your capitol to a region of your choice up to 3 regions away.',
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Nether Swap',
    spellCost: 2,
    description: 'Exhange the position of two armies you control.',
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Far Sight',
    spellCost: 1,
    description: 'Select a basic unit type (archer, warrior, mage, etc.). Until the end of the round units you control of the chosen type gain +1 attack distance.',
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Magic Armor',
    spellCost: 2,
    description: 'Until the end of the round, you gain +2 defence each battle.',
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Shock Wave',
    spellCost: 4,
    description: 'Select four regions, adjacent to each other and in a straight line. Enemies must destroy 1 unit in each army they control in these regions.',
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: true
  },
  { 
    name: 'Lightning Storm',
    spellCost: 3,
    description: 'Select a region. Attack each army in and adjacent to that region with an orange die.',
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: true
  },
  { 
    name: 'Frost Lance',
    spellCost: 3,
    description: 'Attack an army with two orange dice. You may add a slow token on up to two units in the attacked army.',
    effectTokens: [EffectTokenType.Slow],
    regions: null,
    prepared: false,
    destructive: true
  },
  { 
    name: 'Resurection',
    spellCost: 2,
    description: 'Cast at the start of combat. Prevent up to two units you control from being destroyed in this combat.',
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Advanced Tactics',
    spellCost: 1,
    description: 'Perform any one action as a free action.',
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Copy Spell',
    spellCost: 3,
    description: "Cast after another spell is cast. You may copy that spell and cast it without paying it's mana cost. The copied version takes effect before the original spell that was cast.",
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Corpse Explosion',
    spellCost: 2,
    description: "Cast after a unit you control is destroyed in combat. Target opponent participating in the battle destroys units equal to that unit's defense die (white = 1, green = 2, etc).",
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: true,
  },
  { 
    name: 'Bless',
    spellCost: 2,
    description: "Add up to three haste tokens on up to three different warrior units. You may remove up to two player and/or effect tokens from any regions, units, and buildings.",
    effectTokens: [EffectTokenType.Haste],
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Sneak Attack',
    spellCost: 3,
    description: "Perform an attack action. The opponents army does not get to roll defense dice.",
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Lightning Reflexes',
    spellCost: 1,
    description: "Play at the start of a battle. You gain one 'hit' to your defense or attack dice.",
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Mind Control',
    spellCost: 3,
    description: "Move an opponent's army to an adjacent region. If this causes the army to move into the same region as an army you control, you may perform a free attack action with only armies in that region.",
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Terror',
    spellCost: 2,
    description: "Choose an opponent's army. The owner of that army must move it to a city or capitol they control.",
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Reinforcements',
    spellCost: 1,
    description: "Move an army you control to a region with a city or capitol you control. This may not exceed the maximum unit limit in that region.",
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Blood Lust',
    spellCost: 3,
    description: "Play at the start of a battle. Double the amount of hits from attack rolls.",
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Shield Wall',
    spellCost: 1,
    description: "Play at the start of a battle. Double the amount of hits from defense rolls.",
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Bountiful Harvest',
    spellCost: 2,
    description: "Place a bountiful token on up to two different building you control. Perform a harvest action.",
    effectTokens: [EffectTokenType.Bountiful],
    regions: null,
    prepared: false,
    destructive: false
  },
]
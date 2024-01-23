

export interface SpellCard {
  name: string,
  spellCost: number,
  description?: string,
  htmlDescription: string,
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

enum IconHtml {
  Entangle = "<img src='../../../assets/uprising_spell_icons/entangle.svg' name='entangle-icon' width='20px'>",
  Bountiful = "<img src='../../../assets/uprising_spell_icons/bountiful.svg' name='bountiful' width='20px'>",
  Damage = "<img src='../../../assets/uprising_spell_icons/damage.svg' name='damage-icon' width='20px'>",
  Mind = "<img src='../../../assets/uprising_spell_icons/mind.svg' name='mind-icon' width='22px'>",
  Shock = "<img src='../../../assets/uprising_spell_icons/shock.svg' name='shock-icon' width='20px'>",
  Poison = "<img src='../../../assets/uprising_spell_icons/poison.svg' name='poison-icon' width='20px'>",
  SlowHaste = "<img src='../../../assets/uprising_spell_icons/slow&haste.svg' name='slow-and-haste-icon' width='20px'>",
  StrengthenWeaken = "<img src='../../../assets/uprising_spell_icons/strengthen&weaken.svg' name='strengthen-and-weaken-icon' width='20px'>"
}

export const SpellCards: Array<SpellCard> = [
  { 
    name: 'Entangle',
    spellCost: 1,
    description: 'Select two regions an place a entangle token on each',
    htmlDescription: `<p>Select two regions and place an ${IconHtml.Entangle} token on each. You may add a -${IconHtml.SlowHaste} token to a unit in one
      of the selected regions if it is a Forest or Hills region.</p>`,
    effectTokens: [EffectTokenType.Entangle, EffectTokenType.Slow],
    regions: [Region.Forest],
    prepared: false,
    destructive: false 
  },
  { 
    name: 'Counter Spell',
    spellCost: 2,
    description: 'Cast after an opponent casts a spell card. Cancel the effect of that card.',
    htmlDescription: `<p>Cast after an opponent casts a spell card. Cancel the effect of that card.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false 
  },
  { 
    name: 'Wind Gust',
    spellCost: 2,
    description: 'Until the end of the round, all units of target player lose flying.',
    htmlDescription: `<p>Until the end of the round, all units of target player lose flying.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false 
  },
  { 
    name: 'Metamorphosis',
    spellCost: 3,
    htmlDescription: `<p>Change up to two units you control into another unit basic unit. You can not change a unit inot a heavy unit.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false 
  },
  { 
    name: 'Reverse Time',
    spellCost: 1,
    description: 'Cast after an opponent rolls their combat dice (attack or defense). They must re-roll all of the dice previously rolled.',
    htmlDescription: `<p>Cast after an opponent rolls their combat dice (attack or defense). They must re-roll all of the dice previously rolled.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false 
  },
  { 
    name: 'Flood',
    spellCost: 1,
    description: 'Place a water token on an unoccupied region. You may place a slow token on a unit adjacent to this region.',
    htmlDescription: `<p>Place a water token on an unoccupied region. You may place a -${IconHtml.SlowHaste} token on a unit adjacent to this region.</p>`,
    effectTokens: [EffectTokenType.Slow],
    regions: [Region.Water],
    prepared: false,
    destructive: false 
  },
  { 
    name: 'Levitation',
    spellCost: 2,
    description: 'Units you control have flying until the end of your turn. Perform a move action.',
    htmlDescription: `<p>Units you control have flying until the end of your turn. Perform a move action.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false 
  },
  { 
    name: 'Dark Bargin',
    spellCost: 1,
    description: 'Destroy one unit you control to destroy up to two target units an opponent controls of equal or lesser cost.',
    htmlDescription: `<p>Destroy one unit you control to destroy up to two target units an opponent controls of equal or lesser cost.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: true
  },
  { 
    name: 'Starfall',
    spellCost: 3,
    description: 'Roll a green die for each unit in target army. The owner of that army destroys one unit for each hit rolled.',
    htmlDescription: `<p>Roll a green die for each unit in target army. The owner of that army destroys one unit for each hit rolled.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: true
  },
  { 
    name: 'Fireball',
    spellCost: 4,
    description: 'Select an army. Roll four orange dice. The owner of the army destroys one unit for each hit rolled.',
    htmlDescription: `<p>Select an army. Roll four orange dice. The owner of the army destroys one unit for each hit rolled.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: true
  },
  { 
    name: 'Read Mind',
    spellCost: 1,
    description: "Look at each player's prepared spells. You may spend another mana to force a player to discard a prepared spell that costs 2 or less mana. You may add a mind contol token to an empty space on a player's action track.",
    htmlDescription: `<p>Look at each player's prepared spells. You may spend another mana to force a player to discard a prepared spell that costs 2 or less mana. You may add ${IconHtml.Mind} to an enemy unit.</p>`,
    effectTokens: [EffectTokenType.Confusion],
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Scry',
    spellCost: 1,
    description: 'Draw 5 spell cards. Keep up to your maximum hand size and discard the rest.',
    htmlDescription: `<p>Draw 5 spell cards. Keep up to your maximum hand size and discard the rest.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false,
  },
  { 
    name: 'Telaport',
    spellCost: 1,
    description: 'Move all units in the region of your capitol to a region of your choice up to 3 regions away.',
    htmlDescription: `<p>Move all units in the region of your capitol to a region of your choice up to 3 regions away.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Nether Swap',
    spellCost: 2,
    description: 'Exhange the position of two armies you control.',
    htmlDescription: `<p>Exhange the position of two armies you control.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Far Sight',
    spellCost: 1,
    description: 'Select a basic unit type (archer, warrior, mage, etc.). Until the end of the round units you control of the chosen type gain +1 attack distance.',
    htmlDescription: `<p>Select a basic unit type (archer, warrior, mage, etc.). Until the end of the round units you control of the chosen type gain +1 attack distance.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Magic Armor',
    spellCost: 2,
    description: 'Until the end of the round, you gain +2 defence each battle.',
    htmlDescription: `<p>Until the end of the round, you gain +2 defence each battle.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Shock Wave',
    spellCost: 4,
    description: 'Select four regions, adjacent to each other and in a straight line. Enemies must destroy 1 unit in each army they control in these regions.',
    htmlDescription: `<p>Select four regions, adjacent to each other and in a straight line. Enemies must destroy 1 unit in each army they control in these regions.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: true
  },
  { 
    name: 'Lightning Storm',
    spellCost: 3,
    description: 'Select a region. Attack each army in and adjacent to that region with an orange die.',
    htmlDescription: `<p>Select a region. Attack each army in and adjacent to that region with an orange die.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: true
  },
  { 
    name: 'Frost Lance',
    spellCost: 3,
    description: 'Attack an army with two orange dice. You may add a slow token on up to two units in the attacked army.',
    htmlDescription: `<p>Attack an army with two orange dice. You may add a -${IconHtml.SlowHaste} on up to two units in the attacked army.</p>`,
    effectTokens: [EffectTokenType.Slow],
    regions: null,
    prepared: false,
    destructive: true
  },
  { 
    name: 'Resurection',
    spellCost: 2,
    description: 'Cast at the start of combat. Prevent up to two units you control from being destroyed in this combat.',
    htmlDescription: `<p>Cast at the start of combat. Prevent up to two units you control from being destroyed in this combat.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Advanced Tactics',
    spellCost: 1,
    description: 'Perform any one action as a free action.',
    htmlDescription: `<p>Perform any one action as a free action.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Copy Spell',
    spellCost: 3,
    description: "Cast after another spell is cast. You may copy that spell and cast it without paying it's mana cost. The copied version takes effect before the original spell that was cast.",
    htmlDescription: `<p>Cast after another spell is cast. You may copy that spell and cast it without paying it's mana cost. The copied version takes effect before the original spell that was cast.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Corpse Explosion',
    spellCost: 2,
    description: "Cast after a unit you control is destroyed in combat. Target opponent participating in the battle destroys units equal to that unit's defense die (white = 1, green = 2, etc).",
    htmlDescription: `<p>Cast after a unit you control is destroyed in combat. Target opponent participating in the battle destroys units equal to that unit's defense die (white = 1, green = 2, etc).</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: true,
  },
  { 
    name: 'Bless',
    spellCost: 2,
    description: "Add up to three haste tokens on up to three different warrior units. You may remove up to two player and/or effect tokens from any regions, units, and buildings.",
    htmlDescription: `<p>Add a +${IconHtml.SlowHaste} token on up to three different warrior units. You may remove up to two player and/or effect tokens from any regions, units, and buildings.</p>`,
    effectTokens: [EffectTokenType.Haste],
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Sneak Attack',
    spellCost: 3,
    htmlDescription: `<p>Perform an attack action. The opponents army does not get to roll defense dice.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Lightning Reflexes',
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a battle. You gain one 'hit' to your defense or attack dice.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Mind Control',
    spellCost: 3,
    description: "Move an opponent's army to an adjacent region. If this causes the army to move into the same region as an army you control, you may perform a free attack action with only armies in that region.",
    htmlDescription: `<p>Move an opponent's army to an adjacent region. If this causes the army to move into the same region as an army you control, you may perform a free attack action with only armies in that region.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Terror',
    spellCost: 2,
    description: "Choose an opponent's army. The owner of that army must move it to a city or capitol they control.",
    htmlDescription: `<p>Choose an opponent's army. The owner of that army must move it to a city or capitol they control.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Reinforcements',
    spellCost: 1,
    description: "Move an army you control to a region with a city or capitol you control. This may not exceed the maximum unit limit in that region.",
    htmlDescription: `<p>Move an army you control to a region with a city or capitol you control. This may not exceed the maximum unit limit in that region.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Blood Lust',
    spellCost: 3,
    htmlDescription: `<p>Cast at the start of a battle. Double the amount of hits from attack rolls.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Shield Wall',
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a battle. Double the amount of hits from defense rolls.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Bountiful Harvest',
    spellCost: 2,
    htmlDescription: `<p>Place a ${IconHtml.Bountiful} token on up to two different building you control. Perform a harvest action.</p>`,
    effectTokens: [EffectTokenType.Bountiful],
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Swords to Plowshares',
    spellCost: 2,
    htmlDescription: `<p>Destroy up to two units in different armies you conrol. Build a farm in each region of these armies. Place a ${IconHtml.Bountiful} token on one of the newly created farms.</p>`,
    effectTokens: [EffectTokenType.Bountiful],
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Plowshares to Swords',
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a battle or at the start of your turn. Destroy a farm you control. Place two warriors and an archer in this region.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Devine Inspiration',
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of a battle. Your army gains inspiration 3.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Cleave Attack',
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of a battle. Apply the hits from this attack to an enemy army adjacent to the attacked army. This army may role defense dice.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Vortex',
    spellCost: 2,
    htmlDescription: `<p>Exchange the location of any two enemy armies. This may not target armies in or adjacent to cities and capitols.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Tidal Wave',
    spellCost: 1,
    htmlDescription: `<p>Select three adjacent regions. The armies in these regions must move to an adjacent region not effected by this spell.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Earthquake',
    spellCost: 2,
    htmlDescription: `<p>Enemy buildings have -1 defense until the end of the round. Add a -${IconHtml.StrengthenWeaken} token on up to three different buildings.</p>`,
    effectTokens: [EffectTokenType.Weaken],
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Channel Energy',
    spellCost: 1,
    htmlDescription: `<p>Gain 4 mana. Until the end of the round you have +4 to your max mana.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Quick Sand',
    spellCost: 2,
    htmlDescription: `<p>Enemy players add a -${IconHtml.SlowHaste} token to a unit in each army they control that is in a marsh region.</p>`,
    effectTokens: [EffectTokenType.Slow],
    regions: [Region.Marsh],
    prepared: false,
    destructive: false
  },
  { 
    name: 'Persuasion',
    spellCost: 3,
    htmlDescription: `<p>Gain control of target farm.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Price for Knowledge',
    spellCost: 3,
    htmlDescription: `<p>Cast after an army you control is destroyed. Perform two free research actions.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Syphon Soul',
    spellCost: 2,
    htmlDescription: `<p>Cast after any number of units you control are destroyed in a battle. Gain gold equal to the cost of up to three of the units.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Call to Arms',
    spellCost: 1,
    htmlDescription: `<p>Until the end of the round, your farms and cities attack and defend with an orange die.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Renewed Hope',
    spellCost: 1,
    htmlDescription: `<p>Cast after a tower or farm you control is destroyed. Build a tower or farm in another region you control.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Summon Elemental',
    spellCost: 3,
    htmlDescription: `<p>Attack an army adjacent to a mountain or water region with four yellow dice.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: true
  },
  { 
    name: 'Stifle Progress',
    spellCost: 1,
    htmlDescription: `<p>For the remainder of the round, enemy players may not perform research actions. Perform a free research action.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Locust Plague',
    spellCost: 1,
    htmlDescription: `<p>For the remainder of the round, enemy players receive half (rounded down) of the total gold thay would receive from gather actions. Place a -${IconHtml.Bountiful} token on a building.</p>`,
    effectTokens: [EffectTokenType.Plague],
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Sap Strength',
    spellCost: 2,
    htmlDescription: `<p>For the remainder of the round when performing an attack action, players must pay 1 gold for each unit in the attacking army. Or, Select two units and add a -${IconHtml.StrengthenWeaken} token to each.</p>`,
    effectTokens: [EffectTokenType.Weaken],
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Hidden Path',
    spellCost: 1,
    htmlDescription: `<p>Choose any combination of up to two mountain or water regions. Remove the mountain or water tokens from these regions.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Move Earth',
    spellCost: 2,
    htmlDescription: `<p>Choose up to two unoccupied regions. Remove any tokens from these regions and place a mountain token on each region.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Strength in Numbers',
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of a battle. You may move up to three units in adjacent armies into the attacked region.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Back to Basics',
    spellCost: 2,
    htmlDescription: `<p>Each player replaces 2 non-warrior units they control with warrior units.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Polymorph',
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of a battle. For the remainder of this battle, treat all units as warriors.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Egress',
    spellCost: 1,
    htmlDescription: `<p>Cast when you are attacked. Return the attacked army to your capitol.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Extinction',
    spellCost: 4,
    htmlDescription: `<p>Select a unit type. At the end of the round, each player destroys up to 4 units of that type.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'New Recruits',
    spellCost: 2,
    htmlDescription: `<p>Select a basic unit type. Units of this type lose all bonuses to attack and damage and lose any additional bonus given to them from a faction's player board.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: 'Lightning Bolt',
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of a battle or at the start of any player's turn. Destroy any 1 unit.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Fog',
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of an attack action. Attacking units have an attack distand of 0 for the remainder of this attack action.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: 'Treasury Heist',
    spellCost: 1,
    htmlDescription: `<p>You may pay any amount of mana to cast this spell. For each mana paid, you may take 2 gold from target player.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Nature's Balance",
    spellCost: 3,
    htmlDescription: `<p>Cast at the start of a battle. If the enemy player has more units in the region of the battle than you, destroy 2 units in the region of the battle. If this region is a forest region, destroy 3 units instead.</p>`,
    effectTokens: null,
    regions: [Region.Forest],
    prepared: true,
    destructive: false
  },
  { 
    name: "Anti-magic Shell",
    spellCost: 2,
    htmlDescription: `<p>Choose a region. You may remove any effect tokens on that region or on units/buildings in that region. You may remove any player tokens from that region.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Time Warp",
    spellCost: 4,
    htmlDescription: `<p>At the end of the round you gain an additional turn.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Blizzard",
    spellCost: 2,
    htmlDescription: `<p>Target player may only move one army durring each move action for the remainder of the round.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Treachery",
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a battle. Add a ${IconHtml.Mind} token to an enemy unit in this battle.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: "Confusion",
    spellCost: 3,
    htmlDescription: `<p>Cast after a player chooses an action to perform. That player instead perfoms no action. Add a 
      ${IconHtml.Mind} token to an enemy unit.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: "Flame Strike",
    spellCost: 1,
    htmlDescription: `<p>You may pay any amount of mana to cast this spell. Choose an enemy army. For each mana spent, attack that army with a yellow die.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: true
  },
  { 
    name: "Shock",
    spellCost: 1,
    htmlDescription: `<p>Select a region. Place a ${IconHtml.Shock} token on each enemy unit in that region.</p>`,
    effectTokens: [EffectTokenType.Stun],
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Tranquility",
    spellCost: 2,
    htmlDescription: `<p>Remove all player tokens and effect tokens from all regions, units, and buildings.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Summoning Circle",
    spellCost: 2,
    htmlDescription: `<p>Recruit one heavy unit to a city or capitol you control.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Mana Burn",
    spellCost: 1,
    htmlDescription: `<p>You may pay any amount of mana when casting this spell. For each mana paid, remove 1 mana from any player and add a ${IconHtml.Shock} to any unit.</p>`,
    effectTokens: [EffectTokenType.Stun],
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Poison Cloud",
    spellCost: 2,
    htmlDescription: `<p>Choose a region. You may add a ${IconHtml.Poison} token to a unit in that region. You may add a -${IconHtml.StrengthenWeaken} token to another unit in that region. You may add a -${IconHtml.Bountiful} token to a building in that region.</p>`,
    effectTokens: [EffectTokenType.Poison, EffectTokenType.Weaken, EffectTokenType.Plague],
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Acid Rain",
    spellCost: 2,
    htmlDescription: `<p>Attack a farm, tower or city with an orange die. You may add a ${IconHtml.Poison} token to a unit in the region of the attacked building if 
      the building is on a badlands or marsh region.</p>`,
    effectTokens: [EffectTokenType.Poison],
    regions: [Region.Marsh, Region.Badlands],
    prepared: false,
    destructive: true
  },
  { 
    name: "Raise Dead",
    spellCost: 2,
    htmlDescription: `<p>Cast when a unit or units you control are destroyed. Replace each destroyed unit with 1 warrior.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: "Chaos Warp",
    spellCost: 1,
    htmlDescription: `<p>Cast when an opponent casts a spell that costs 3 or less mana. Cancel the effect of that spell. The caster of that spell may reveal the top card of the spell deck and cast it without paying it's mana cost.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: "Arcane Spellbook",
    spellCost: 1,
    htmlDescription: `<p>Look at the spell cards in the hands of each player. You may pick one card in another player's hand and place that card in your hand. You may perform a free cast action.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Cataclysm",
    spellCost: 4,
    htmlDescription: `<p>Target player destroys two units they control, one building they control, loses one mana, discards one spell card, and loses 5 gold.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Living Walls",
    spellCost: 2,
    htmlDescription: `<p>Choose two buildings that are not capitols. You may move each chosen building to an adjacent region. You may add a +${IconHtml.StrengthenWeaken} or -${IconHtml.StrengthenWeaken} to each choosen building.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Poison Blades",
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of combat. The attacking army gain Assassinate 2. If no units are destroyed as a result of this combat, you may add a ${IconHtml.Poison} token to a unit in the defending army.</p>`,
    effectTokens: [EffectTokenType.Poison],
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: "Code of Honor",
    spellCost: 3,
    htmlDescription: `<p>For the remainder of this round, an army may only attack an army that contains the same number or more units than the attacking army.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Instant Transmission",
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a battle or at the start of any players turn. Mone one unit to any region on the map.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: "Illusion",
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a battle. You may force an enemy to reroll an attack die or defense die of your choice.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: "Hurricane",
    spellCost: 2,
    htmlDescription: `<p>Choose an enemy army. Roll three orange dice. Destroy one unit with flying in the chosen army for each hit rolled.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: "Powder Keg",
    spellCost: 2,
    htmlDescription: `<p>Cast immediately or at the start of a battle. Destroy a building you control. Attack an enemy army in the region of the destroyed building with two orange dice.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: "Ancestral Knowledge",
    spellCost: 2,
    htmlDescription: `<p>Search throguh the spell deck and place one spell card from the spell deck into your hand. Shuffle the spell deck afterward.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Balance of Power",
    spellCost: 3,
    htmlDescription: `<p>For the remainder of the round all units attack with one green die and defend with one white die. The attack and defense dice can not be modified by any means.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Nature's Wrath",
    spellCost: 2,
    htmlDescription: `<p>Attack an army with yellow dice equal to the number of forest regions the army is adjacent to, including the region the army is on.</p>`,
    effectTokens: null,
    regions: [Region.Forest],
    prepared: false,
    destructive: false
  },
  { 
    name: "Path of Bravery",
    spellCost: 2,
    htmlDescription: `<p>For the remainder of the round in each combat you may give up to two units you control +1 damage if attacking an army with a greater number of units and +1 defense if being attacked by and army with a greater number of units.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Corrupt Vegitation",
    spellCost: 1,
    htmlDescription: `<p>Add a ${IconHtml.Entangle} token on up to two hills or plains regiongs. You may add a ${IconHtml.Poison} token to a unit in a region with a ${IconHtml.Entangle} token on it.</p>`,
    effectTokens: [EffectTokenType.Entangle, EffectTokenType.Poison],
    regions: [Region.Hills, Region.Plains],
    prepared: false,
    destructive: false
  },
  { 
    name: "Thrill of the Hunt",
    spellCost: 1,
    htmlDescription: `<p>Move a single non-hero unit up to 4 regions. This unit must end it's movement in a region with an enemy army present. You may spend one additional mana to perform an attack with only this unit.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Reverse Energy",
    spellCost: 2,
    htmlDescription: `<p>Cast when anoter player performs a Special action. That player instead performs no action. You may perfom a free special action.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: "Empty the Reserves",
    spellCost: 1,
    htmlDescription: `<p>Perform a recruit action. You may recruit 1 additional unit to your capitol and to each city you control.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Wrath of God",
    spellCost: 5,
    htmlDescription: `<p>Each player looses all of their gold. Each player chooses one building that is not a capitol and one unit they control. Destroy all other units and non-capitol buildings that were not chosen.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Ambush",
    spellCost: 1,
    htmlDescription: `<p>Cast after an opponent has performend a move action. Add one warrior to a region units were moved to.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: "Zombify",
    spellCost: 2,
    htmlDescription: `<p>Cast when units in an enemy army are destroyed. Add up to two warrior units in the region of the destroyed units.</p>`,
    effectTokens: null,
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: "Magical Mastery",
    spellCost: 2,
    htmlDescription: `<p>Until the end of the round, after each cast action you perform, including the cast action to cast this spell, you may perform a free attack action using only mage units you control.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Magical Attunement",
    spellCost: 1,
    htmlDescription: `<p>Until the end of the round, warrior units you control attack with an additional purple die. Until the end of the round you have +2 to your maximum mana.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Endurance",
    spellCost: 1,
    htmlDescription: `<p>Choose two warrior units. Place a +${IconHtml.SlowHaste} token on each chosen unit.</p>`,
    effectTokens: [EffectTokenType.Haste],
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Haste",
    spellCost: 2,
    htmlDescription: `<p>Units you control have a movement value of 3 until the end of your turn. Perform a move action.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Sandstorm",
    spellCost: 3,
    htmlDescription: `<p>Enemy players roll an orange die for each badlands region they have units or buildings in. If a hit is rolled, 
      that player destroys 1 unit or building in that region.</p>`,
    effectTokens: null,
    regions: [Region.Badlands],
    prepared: false,
    destructive: true
  },
  { 
    name: "Unravel Mind",
    spellCost: 3,
    htmlDescription: `<p>Cast at the start of a battle. Add a ${IconHtml.Mind} token on up to two different enemy units in this battle.</p>`,
    effectTokens: [EffectTokenType.Confusion],
    regions: null,
    prepared: true,
    destructive: false
  },
  { 
    name: "Early Spring",
    spellCost: 1,
    htmlDescription: `<p>Choose a region adjacent to an army you control. You may build an farm there after paying the cost of the farm. 
      Add a +${IconHtml.Bountiful} token to a building.</p>`,
    effectTokens: [EffectTokenType.Bountiful],
    regions: null,
    prepared: false,
    destructive: false
  },
  { 
    name: "Arcane Overload",
    spellCost: 1,
    htmlDescription: `<p>Perform two free cast actions.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false
  },
  {
    name: "Chain Lightning",
    spellCost: 3,
    htmlDescription: `<p>Attack an army with 3 green dice. Attack another army with two green dice. Attack another army with one green die.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: true,
  },
  {
    name: "Command Stone",
    spellCost: 3,
    htmlDescription: `<p>Perform a build action. The building created through this build action may be added to any region on the map.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false,
  },
  {
    name: "Gravity Distortion",
    spellCost: 1,
    htmlDescription: `<p>Choose a region. You may move units (friendly and/or enemy) from adjacent regions into this region. You may not exceed the 
      maximum allowd unit limit.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false,
  },
  {
    name: "Mental Assault",
    spellCost: 1,
    htmlDescription: `<p>Add a ${IconHtml.Mind} token to an enemy building that is not a capitol. Perform a harvest or recruit action.</p>`,
    effectTokens: [EffectTokenType.Confusion],
    regions: null,
    prepared: false,
    destructive: false,
  },
  {
    name: "Dimensional Door",
    spellCost: 1,
    htmlDescription: `<p>Perform a move action. For this move action you may treat all portals as if they are the same color.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false,
  },
  {
    name: "Elemental Mastery",
    spellCost: 3,
    htmlDescription: `<p>You may add the following tokens to any unit, building, or regions that the token can normally be applied to. No unit or building may 
      have more than one token placed on it durring this spell.
      +${IconHtml.SlowHaste}, -${IconHtml.SlowHaste}, +${IconHtml.StrengthenWeaken}, -${IconHtml.StrengthenWeaken}, ${IconHtml.Poison}, ${IconHtml.Entangle}</p>`,
    effectTokens: [EffectTokenType.Slow, EffectTokenType.Haste, EffectTokenType.Strengthen, EffectTokenType.Weaken, EffectTokenType.Poison, EffectTokenType.Entangle],
    regions: null,
    prepared: false,
    destructive: false,
  },
  {
    name: "Poisoned Soil",
    spellCost: 3,
    htmlDescription: `<p>Cast when an opponent performs a harvest action. You may add a ${IconHtml.Poison} token to a unit for each farm that player controls.</p>`,
    effectTokens: [EffectTokenType.Poison],
    regions: null,
    prepared: true,
    destructive: false,
  },
  {
    name: "Blight",
    spellCost: 2,
    htmlDescription: `<p>Choose a region type (Mountains, Plains, Marsh, etc). For each region of the chosen type, you may add a -${IconHtml.StrengthenWeaken} token to 
      one enemy unit in that region or attack an enemy army with a yellow die in that region.</p>`,
    effectTokens: [EffectTokenType.Weaken],
    regions: null,
    prepared: false,
    destructive: false,
  },
  {
    name: "Gaia's Blessing",
    spellCost: 3,
    htmlDescription: `<p>Choose a region type (Mountains, Plains, Marsh, etc). For each region of the chosen type, you may add a +${IconHtml.StrengthenWeaken} to 
      one unit you control in that region. You may add up to four +${IconHtml.StrengthenWeaken} tokens when casting this spell.</p>`,
    effectTokens: [EffectTokenType.Strengthen],
    regions: null,
    prepared: false,
    destructive: false,
  },
  {
    name: "Well of Knowledge",
    spellCost: 4,
    htmlDescription: `<p>You may cast or prepare any spell card from the discard pile without paying it's mana cost.</p>`,
    effectTokens: null,
    regions: null,
    prepared: false,
    destructive: false,
  },


]
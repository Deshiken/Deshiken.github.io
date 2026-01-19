import { CastType, EffectTokenType, IconHtml, SpellCard, Region } from "./spell-card-data";

export const UprisingSpellCards: Array<SpellCard> = [
  { 
    name: 'Entangle',
    spellCost: 1,
    htmlDescription: `<p>Select two regions and place an ${IconHtml.Entangle} token on each. You may add a -${IconHtml.SlowHaste} token to a unit in one
      of the selected regions if it is a Forest or Hills region.</p>`,
    effectTokens: [EffectTokenType.Entangle, EffectTokenType.Slow],
    regions: [Region.Forest],
    castType: CastType.Normal,
    destructive: false 
  },
  { 
    name: 'Counter Spell',
    spellCost: 2,
    htmlDescription: `<p>Cast after an opponent casts a spell card. Cancel the effect of that spell.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false 
  },
  { 
    name: 'Wind Gust',
    spellCost: 2,
    htmlDescription: `<p>Until the end of the round, all units of target player lose flying <b>or</b> units you control in your faction's <i>favored region</i> gain flying. (Units that start a move action with flying retain flying until the end of the move action).</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false 
  },
  { 
    name: 'Metamorphosis',
    spellCost: 3,
    htmlDescription: `<p>Change up to two units you control into another basic unit. You can not change a unit into a heavy unit.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false 
  },
  { 
    name: 'Reverse Time',
    spellCost: 1,
    htmlDescription: `<p>Cast after an opponent rolls their combat dice (attack or defense). They must re-roll all of the dice previously rolled.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
    destructive: false 
  },
  { 
    name: 'Flood',
    spellCost: 1,
    htmlDescription: `<p>Place a water token on an unoccupied region. You may place a -${IconHtml.SlowHaste} token on a unit adjacent to this region.</p>`,
    effectTokens: [EffectTokenType.Slow],
    regions: [Region.Water],
    castType: CastType.Normal,
    destructive: false 
  },
  { 
    name: 'Levitation',
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a move action. Units the active player controls have flying until the end of the move action.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
    destructive: false 
  },
  { 
    name: 'Dark Bargin',
    spellCost: 1,
    htmlDescription: `<p>Destroy one unit you control. Target player destroys up to two units they control of equal or lesser gold cost.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: true
  },
  { 
    name: 'Starfall',
    spellCost: 3,
    description: 'Roll a green die for each unit in target army. The owner of that army destroys one unit for each hit rolled.',
    htmlDescription: `<p>Roll a green die for each unit in target army. The owner of that army destroys one unit for each hit rolled.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: true
  },
  { 
    name: 'Fireball',
    spellCost: 4,
    description: 'Select an army. Roll four orange dice. The owner of the army destroys one unit for each hit rolled.',
    htmlDescription: `<p>Select an army. Roll four orange dice. The owner of the army destroys one unit for each hit rolled.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: true
  },
  { 
    name: 'Power Surge',
    spellCost: 2,
    htmlDescription: `Choose three units you or an allie control. Add a +${IconHtml.StrengthenWeaken} and +${IconHtml.SlowHaste} token on each unit. Add a ${IconHtml.Poison} token to two of the chosen units.</p>`,
    effectTokens: [EffectTokenType.Strengthen, EffectTokenType.Haste, EffectTokenType.Poison],
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Scry',
    spellCost: 1,
    htmlDescription: `<p>Draw 5 spell cards. Keep up to your maximum hand size and discard the rest. Add a ${IconHtml.Mind} token to a unit.</p>`,
    effectTokens: [EffectTokenType.Confusion],
    regions: null,
    castType: CastType.Normal,
    destructive: false,
  },
  { 
    name: 'Telaport',
    spellCost: 1,
    htmlDescription: `<p>Move all units in the region of your capitol to a region of your choice up to 3 regions away.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Choking Vines',
    spellCost: 2,
    htmlDescription: `<p>Add a ${IconHtml.Entangle} token on up to two regions. Then, you may attack each army in a region with a ${IconHtml.Entangle} token with an yellow die.</p>`,
    effectTokens: [EffectTokenType.Entangle],
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Far Sight',
    spellCost: 1,
    htmlDescription: `<p>Select a basic unit type (archer, warrior, mage, etc.). Until the end of the round units you control of the chosen type gain +1 attack distance.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Magic Armor',
    spellCost: 2,
    htmlDescription: `<p>Until the end of the round, you gain +2 defence each battle.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Shock Wave',
    spellCost: 4,
    htmlDescription: `<p>Select four regions, adjacent to each other and in a straight line. Enemies must destroy 1 unit in each army they control in these regions.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: true
  },
  { 
    name: 'Lightning Storm',
    spellCost: 3,
    htmlDescription: `<p>Select a region. Attack each army in and adjacent to that region with an orange die.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: true
  },
  { 
    name: 'Frost Lance',
    spellCost: 3,
    htmlDescription: `<p>Attack an army with two orange dice. You may add a -${IconHtml.SlowHaste} on up to two units in the attacked army.</p>`,
    effectTokens: [EffectTokenType.Slow],
    regions: null,
    castType: CastType.Normal,
    destructive: true
  },
  { 
    name: 'Resurrection',
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of a battle. Prevent up to two units from being destroyed in this combat.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: 'Advanced Tactics',
    spellCost: 2,
    htmlDescription: `<p>Perform any one action as a free action.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Copy Spell',
    spellCost: 3,
    htmlDescription: `<p>Cast after another spell is cast. You may copy that spell and cast it without paying it's mana cost. The copied version takes effect before the original spell that was cast.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: 'Purge the Unclean',
    spellCost: 2,
    htmlDescription: `<p>Add a +${IconHtml.StrengthenWeaken} token to a unit. Then you may destroy up to two units that have effect or player tokens on them.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: true,
  },
  { 
    name: 'Bless',
    spellCost: 2,
    htmlDescription: `<p>Add a +${IconHtml.SlowHaste} token on up to two different units. You may remove up to two player and/or effect tokens from any regions, units, and buildings.</p>`,
    effectTokens: [EffectTokenType.Haste],
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Known Paths',
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a move action. Each unit in the active player faction's <i>favored region</i> gains +1 movement until the end of their turn.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
    destructive: false
  },
  { 
    name: 'Lightning Reflexes',
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a battle. Choose a player in this combat to gain one 'hit' to their defense or attack dice.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: 'Mind Control',
    spellCost: 3,
    htmlDescription: `<p>Move an opponent's army to an adjacent region. If this causes the army to move into the same region as an army you control, you may perform a free attack action with only armies in that region.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Terror',
    spellCost: 2,
    htmlDescription: `<p>Choose an opponent's army. The owner of that army must move it to a city or capitol they control.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Reinforcements',
    spellCost: 1,
    description: "Move an army you control to a region with a city or capitol you control. This may not exceed the maximum unit limit in that region.",
    htmlDescription: `<p>Move an army you control to a region with a city or capitol you control. This may not exceed the maximum unit limit in that region.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Blood Lust',
    spellCost: 3,
    htmlDescription: `<p>Cast at the start of a battle. Double the amount of hits from attack rolls.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: 'Shield Wall',
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a battle. Gain 2 Yellow defense dice.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
    destructive: false
  },
  { 
    name: 'Bountiful Harvest',
    spellCost: 2,
    htmlDescription: `<p>Place a +${IconHtml.Bountiful} token on up to three different buildings you control.</p>`,
    effectTokens: [EffectTokenType.Bountiful],
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Swords to Plowshares',
    spellCost: 2,
    htmlDescription: `<p>Destroy up to two units in different armies you conrol. Build a farm in each region of these armies. Place a ${IconHtml.Bountiful} token on one of the newly created farms.</p>`,
    effectTokens: [EffectTokenType.Bountiful],
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Plowshares to Swords',
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of any action. Destroy a farm you control. Place two warriors and an archer in this region.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: 'Devine Inspiration',
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a battle. You may give the attacking or defending army <i>Leadership 1</i>.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
    destructive: false
  },
  { 
    name: 'Cleave Attack',
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of a battle. Apply up to two <i>hits</i> from this attack to an enemy army adjacent to the attacked army.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: 'Vortex',
    spellCost: 2,
    htmlDescription: `<p>Exchange the location of any two enemy armies. This may not target armies in or adjacent to cities and capitols.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Tidal Wave',
    spellCost: 1,
    htmlDescription: `<p>Select three adjacent regions. The armies in these regions must move to an adjacent region not effected by this spell.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Earthquake',
    spellCost: 2,
    htmlDescription: `<p>Enemy buildings have -1 defense until the end of the round. Add a -${IconHtml.StrengthenWeaken} token on up to three different buildings.</p>`,
    effectTokens: [EffectTokenType.Weaken],
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Channel Energy',
    spellCost: 1,
    htmlDescription: `<p>Gain 4 mana. Until the end of the round you have +4 to your max mana.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Quick Sand',
    spellCost: 2,
    htmlDescription: `<p>Enemy players add a -${IconHtml.SlowHaste} token to a unit in each army they control that is in a marsh or badlands region.</p>`,
    effectTokens: [EffectTokenType.Slow],
    regions: [Region.Marsh, Region.Badlands],
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Flood Fields',
    spellCost: 3,
    htmlDescription: `<p>Destroy any one farm. Add a water token to the region of that farm.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Price for Knowledge',
    spellCost: 3,
    htmlDescription: `<p>Destroy a unit you control. You may perfom two free research actions.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Syphon Soul',
    spellCost: 2,
    htmlDescription: `<p>Cast after any number of units you control are destroyed in a battle. Gain gold equal to the cost of up to three of the units.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: 'Call to Arms',
    spellCost: 1,
    htmlDescription: `<p>Until the end of the round, your farms and cities attack and defend with an orange die.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Renewed Hope',
    spellCost: 2,
    htmlDescription: `<p>Cast after a city, tower, or farm you control is destroyed. Add a city, tower, or farm to a region you control. Add a +${IconHtml.StrengthenWeaken} or ${IconHtml.Bountiful} token to this building.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: 'Summon Elemental',
    spellCost: 3,
    htmlDescription: `<p>Attack an army adjacent to a mountain or water region with four yellow dice.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: true
  },
  { 
    name: 'Stifle Progress',
    spellCost: 1,
    htmlDescription: `<p>For the remainder of the round, enemy players may not perform research actions. Perform a free research action.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Locust Plague',
    spellCost: 2,
    htmlDescription: `<p>Add a -${IconHtml.Bountiful} token on up to two buildings. Then, you may add a -${IconHtml.StrengthenWeaken} token to a unit in each region a -${IconHtml.Bountiful} was added to.</p>`,
    effectTokens: [EffectTokenType.Plague, EffectTokenType.Weaken],
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Sap Strength',
    spellCost: 2,
    htmlDescription: `<p>For the remainder of the round when performing an attack action, players must pay 1 gold for each unit in the attacking army. Or, Select two units and add a -${IconHtml.StrengthenWeaken} token to each.</p>`,
    effectTokens: [EffectTokenType.Weaken],
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Hidden Path',
    spellCost: 1,
    htmlDescription: `<p>Choose any combination of up to two mountain or water regions. Remove the mountain or water tokens from these regions.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Move Earth',
    spellCost: 2,
    htmlDescription: `<p>Choose up to two unoccupied regions. Remove any tokens from these regions and place a mountain token on each region.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Strength in Numbers',
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of a battle. You may move up to three units in adjacent armies into the attacked region.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: 'Back to Basics',
    spellCost: 2,
    htmlDescription: `<p>Each player replaces 2 non-warrior units they control with warrior units.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Polymorph',
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of a battle. For the remainder of this battle, treat all units as warriors.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: 'Egress',
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a battle, when you or an ally are attacked. Return the attacked army to it's controllers capitol.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
    destructive: false
  },
  { 
    name: 'Extinction',
    spellCost: 4,
    htmlDescription: `<p>Select a unit type. At the end of the round, each player destroys up to 4 units of that type.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'New Recruits',
    spellCost: 2,
    htmlDescription: `<p>Select a basic unit type. Add a ${IconHtml.Shock} token on up to 4 units of this type. Enemy units of this type have -1 damage until the end of the round.</p>`,
    effectTokens: [EffectTokenType.Stun],
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: 'Lightning Bolt',
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of any action. Destroy any 1 unit.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: 'Jolt',
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of any action. Attack a unit with a yellow die or add a ${IconHtml.Shock} token to a unit.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
    destructive: false
  },
  { 
    name: 'Fog',
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of an attack action. Attacking units have an attack distand of 0 for the remainder of this attack action.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: 'Treasury Heist',
    spellCost: 1,
    htmlDescription: `<p>You may pay any amount of mana to cast this spell. For each mana paid, you may take 2 gold from target player.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Nature's Balance",
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of a battle. If the enemy player has more units in the region of the battle than you, destroy 1 unit in the region of the battle. If this region is a forest region, destroy 2 units instead.</p>`,
    effectTokens: null,
    regions: [Region.Forest],
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: "Anti-magic Shell",
    spellCost: 2,
    htmlDescription: `<p>Choose a region. You may remove any effect tokens on that region or on units/buildings in that region. You may remove any player tokens from that region.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Time Warp",
    spellCost: 4,
    htmlDescription: `<p>At the end of the round you gain an additional turn.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Blizzard",
    spellCost: 2,
    htmlDescription: `<p>Choose a player. For each army that player controls, add a -${IconHtml.SlowHaste} to a unit in that army. If the army is in a tundra region you may add a -${IconHtml.SlowHaste} on up to two different unit in that army instead.</p>`,
    effectTokens: null,
    regions: [Region.Tundra],
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Treachery",
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of a battle. Add a ${IconHtml.Mind} token to an enemy unit in this battle.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: "Confusion",
    spellCost: 3,
    htmlDescription: `<p>Cast after a player chooses an action to perform. That player instead perfoms no action. Add a 
      ${IconHtml.Mind} token to an enemy unit.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: "Flame Strike",
    spellCost: 1,
    htmlDescription: `<p>You may pay any amount of mana to cast this spell. Choose an enemy army. For each mana spent, attack that army with a yellow die.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: true
  },
  { 
    name: "Shock",
    spellCost: 1,
    htmlDescription: `<p>Select a region. Place a ${IconHtml.Shock} token on each enemy unit in that region.</p>`,
    effectTokens: [EffectTokenType.Stun],
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Tranquility",
    spellCost: 2,
    htmlDescription: `<p>Remove all player tokens and effect tokens from all regions, units, and buildings.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Summoning Circle",
    spellCost: 2,
    htmlDescription: `<p>Recruit one heavy unit to a city or capitol you control (after paying the cost of the unit).</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Mana Burn",
    spellCost: 1,
    htmlDescription: `<p>You may pay any amount of mana when casting this spell. For each mana paid, remove 1 mana from any player and add a ${IconHtml.Shock} to any unit.</p>`,
    effectTokens: [EffectTokenType.Stun],
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Poison Cloud",
    spellCost: 2,
    htmlDescription: `<p>Choose a region. You may add a ${IconHtml.Poison} token to a unit in that region. You may add a -${IconHtml.StrengthenWeaken} token to another unit in that region. You may add a -${IconHtml.Bountiful} token to a building in that region.</p>`,
    effectTokens: [EffectTokenType.Poison, EffectTokenType.Weaken, EffectTokenType.Plague],
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Acid Rain",
    spellCost: 2,
    htmlDescription: `<p>Attack a farm, tower or city with an orange die. You may add a ${IconHtml.Poison} token to a unit in the region of the attacked building if 
      the building is on a badlands or marsh region.</p>`,
    effectTokens: [EffectTokenType.Poison],
    regions: [Region.Marsh, Region.Badlands],
    castType: CastType.Normal,
    destructive: true
  },
  { 
    name: "Raise Dead",
    spellCost: 2,
    htmlDescription: `<p>Cast when a unit or units you control are destroyed. Replace each destroyed unit with 1 warrior.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: "Reflect Magic",
    spellCost: 1,
    htmlDescription: `<p>Cast when an opponent casts a spell. Cancel the effect of that spell. If this was a prepared spell return it to the prepared state. Otherwise return the spell card to the caster's hand. The caster regains any mana used to cast the spell.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
    destructive: false
  },
  { 
    name: "Arcane Spellbook",
    spellCost: 1,
    htmlDescription: `<p>Look at the spell cards in the hands of each player. You may pick one card in another player's hand and place that card in your hand. You may perform a free cast action.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Cataclysm",
    spellCost: 4,
    htmlDescription: `<p>Target player destroys two units they control, one building they control, loses one mana, discards one spell card, and loses 5 gold.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Living Walls",
    spellCost: 2,
    htmlDescription: `<p>Choose two buildings that are not capitols. You may move each chosen building to an adjacent region. You may add a +${IconHtml.StrengthenWeaken} or -${IconHtml.StrengthenWeaken} to each choosen building.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Poison Blades",
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of combat. The attacking army gain Assassinate 2. If no units are destroyed as a result of this combat, you may add a ${IconHtml.Poison} token to a unit in the defending army.</p>`,
    effectTokens: [EffectTokenType.Poison],
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: "Sleep",
    spellCost: 3,
    htmlDescription: `<p>Until the start of your next turn, players may not perform move, attack, or build actions.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Instant Transmission",
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of any action. Move one unit to any region on the map.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
    destructive: false
  },
  { 
    name: "Illusion",
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a battle. You may force an enemy to reroll an attack die or defense die of your choice.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
    destructive: false
  },
  { 
    name: "Hurricane",
    spellCost: 2,
    htmlDescription: `<p>Choose an enemy army. Roll three orange dice. Destroy one unit with flying in the chosen army for each hit rolled.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Powder Keg",
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of any action. Destroy a building you control. Attack an enemy army in the region of the destroyed building with two orange dice.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: "Ancestral Knowledge",
    spellCost: 1,
    htmlDescription: `<p>Search throguh the spell deck and place one spell card from the spell deck into your hand. Shuffle the spell deck afterward.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Balance of Power",
    spellCost: 3,
    htmlDescription: `<p>For the remainder of the round all units attack with one green die. The attack dice of units can not be modified by any means.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Nature's Wrath",
    spellCost: 2,
    htmlDescription: `<p>Attack an army with yellow dice equal to the number of forest and hills regions the army is adjacent to, including the region the army is on.</p>`,
    effectTokens: null,
    regions: [Region.Forest, Region.Hills],
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Path of Bravery",
    spellCost: 2,
    htmlDescription: `<p>For the remainder of the round in each combat you may give up to two units you control +1 damage if attacking an army with a greater number of units and +1 defense if being attacked by and army with a greater number of units.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Corrupt Vegitation",
    spellCost: 1,
    htmlDescription: `<p>Add a ${IconHtml.Entangle} token on up to two hills or plains regiongs. You may add a ${IconHtml.Poison} token to a unit in a region with a ${IconHtml.Entangle} token on it.</p>`,
    effectTokens: [EffectTokenType.Entangle, EffectTokenType.Poison],
    regions: [Region.Hills, Region.Plains],
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Thrill of the Hunt",
    spellCost: 2,
    htmlDescription: `<p>Move a single unit you control up to 4 regions. You may add a +${IconHtml.StrengthenWeaken} token to this unit. You may perform an attack with only this unit.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Volcanic Eruption",
    spellCost: 2,
    htmlDescription: `<p>Choose a mountain region. Attack each army on and adjacent to that region with a yellow die</p>`,
    effectTokens: null,
    regions: [Region.Mountains],
    castType: CastType.Normal,
    destructive: true
  },
  { 
    name: "Empty the Reserves",
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a recruit action. The Player performing the action may recruit 1 additional unit to their capitol and to each city they control.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
    destructive: false
  },
  { 
    name: "Wrath of God",
    spellCost: 5,
    htmlDescription: `<p>Each player looses all of their gold. Each player chooses one building that is not a capitol and one unit they control. Destroy all other units and non-capitol buildings that were not chosen.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Ambush",
    spellCost: 1,
    htmlDescription: `<p>Cast after an opponent has performend a move action. Add one warrior to a region units were moved to.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
    destructive: false
  },
  { 
    name: "Zombify",
    spellCost: 2,
    htmlDescription: `<p>Cast when units in an enemy army are destroyed. Add up to two warrior units in the region of the destroyed units.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: "Magical Mastery",
    spellCost: 2,
    htmlDescription: `<p>Until the end of the round, after each cast action you perform, including the cast action to cast this spell, you may perform a free attack action using only mage units you control.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Magical Attunement",
    spellCost: 1,
    htmlDescription: `<p>Until the end of the round, warrior units you control attack with an additional purple die. Until the end of the round you have +2 to your maximum mana.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false
  },
  { 
    name: "Endurance",
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of a move action. Place a +${IconHtml.SlowHaste} token on up to three different units.</p>`,
    effectTokens: [EffectTokenType.Haste],
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: "Haste",
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a move action. Up to two units the active player controls have +1 movement during this move action.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
    destructive: false
  },
  { 
    name: "Sandstorm",
    spellCost: 3,
    htmlDescription: `<p>Enemy players roll an orange die for each badlands region they have units or buildings in. If a hit is rolled, 
      that player destroys 1 unit or building in that region.</p>`,
    effectTokens: null,
    regions: [Region.Badlands],
    castType: CastType.Normal,
    destructive: true
  },
  { 
    name: "Unravel Mind",
    spellCost: 3,
    htmlDescription: `<p>Cast at the start of a battle. Add a ${IconHtml.Mind} token on up to two different enemy units in this battle.</p>`,
    effectTokens: [EffectTokenType.Confusion],
    regions: null,
    castType: CastType.Prepared,
    destructive: false
  },
  { 
    name: "Early Spring",
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a build action. The active player may add a ${IconHtml.Bountiful} token the building that is created.</p>`,
    effectTokens: [EffectTokenType.Bountiful],
    regions: null,
    castType: CastType.Instant,
    destructive: false
  },
  { 
    name: "Magic Arrow",
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a battle. The active player may give up to two archer unit +2 attack distance.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
    destructive: false
  },
  {
    name: "Chain Lightning",
    spellCost: 3,
    htmlDescription: `<p>Attack an army with 3 green dice. Attack another army with two green dice. Attack another army with one green die.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: true,
  },
  {
    name: "Command Stone",
    spellCost: 3,
    htmlDescription: `<p>Perform a free build action. The building created through this build action may be added to any region on the map.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false,
  },
  {
    name: "Gravity Distortion",
    spellCost: 1,
    htmlDescription: `<p>Choose a region. You may move units (friendly and/or enemy) from adjacent regions into this region. You may not exceed the 
      maximum allowd unit limit. You may not move units out of a region containing a Capitol.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false,
  },
  {
    name: "Mental Assault",
    spellCost: 2,
    htmlDescription: `<p>Cast at the start of a recruit or harvest action. Add a ${IconHtml.Mind} token to an enemy building that is not a capitol.</p>`,
    effectTokens: [EffectTokenType.Confusion],
    regions: null,
    castType: CastType.Prepared,
    destructive: false,
  },
  {
    name: "Dimensional Door",
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of a move action. The active player may treat all portals as if they are the same color.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
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
    castType: CastType.Normal,
    destructive: false,
  },
  {
    name: "Poisoned Soil",
    spellCost: 3,
    htmlDescription: `<p>Cast when an opponent performs a harvest action. That player adds a ${IconHtml.Poison} token to two different units they contol.</p>`,
    effectTokens: [EffectTokenType.Poison],
    regions: null,
    castType: CastType.Prepared,
    destructive: false,
  },
  {
    name: "Blight",
    spellCost: 2,
    htmlDescription: `<p>Choose a region type (Mountains, Plains, Marsh, etc). For each region of the chosen type, you may add a -${IconHtml.StrengthenWeaken} token to 
      one enemy unit in that region or attack an enemy army with a green die in that region.</p>`,
    effectTokens: [EffectTokenType.Weaken],
    regions: null,
    castType: CastType.Normal,
    destructive: false,
  },
  {
    name: "Gaia's Blessing",
    spellCost: 2,
    htmlDescription: `<p>You may add up to three +${IconHtml.StrengthenWeaken} tokens to different units on your faction's <i>favored region</i>.`,
    effectTokens: [EffectTokenType.Strengthen],
    regions: null,
    castType: CastType.Normal,
    destructive: false,
  },
  {
    name: "Well of Knowledge",
    spellCost: 4,
    htmlDescription: `<p>You may cast or prepare any spell card from the discard pile without paying it's mana cost.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false,
  },
  {
    name: "Ancestral Vision",
    spellCost: 1,
    htmlDescription: `<p>Cast at the start of an attack action. The active player gains +2 damage in each battle in their faction's <i>favored region</i>.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Instant,
    destructive: false,
  },
  {
    name: "Mana Draw",
    spellCost: 2,
    htmlDescription: `<p>Gain 1 mana and draw a spell card for each mage you control in your faction's <i>favored region</i>. Until the end of the round, mage units in your faction's <i>favored region</i> gain +1 attack distance.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: false,
  },
  {
    name: "Doppelganger",
    spellCost: 3,
    htmlDescription: `<p>Choose a unit. Destroy this unit and replace it with a unit from your supply of the same type under your control.</p>`,
    effectTokens: null,
    regions: null,
    castType: CastType.Normal,
    destructive: true,
  },

]
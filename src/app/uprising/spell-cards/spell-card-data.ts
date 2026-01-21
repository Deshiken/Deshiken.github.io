

export interface SpellCard {
  name: string,
  spellCost: number,
  description?: string,
  htmlDescription: string,
  effectTokens: null | Array<EffectTokenType>,
  regions: null | Array<Region>,
  castType: CastType,
  destructive: boolean,
  healing?: boolean
}

export interface SpellCardCost {
  manaCost: number,
  goldCost: number,
  researchCost: number
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
  Water = 'Water',
  Tundra = 'Tundra'
}

export enum CastType {
  Normal = 'Normal',
  Instant = 'Instant',
  Prepared = 'Prepared',
  Combat = 'Combat'
}

export enum IconHtml {
  Entangle = "<img src='../../../assets/uprising_spell_icons/entangle.svg' name='entangle-icon' width='20px'>",
  Bountiful = "<img src='../../../assets/uprising_spell_icons/bountiful.svg' name='bountiful' width='20px'>",
  Damage = "<img src='../../../assets/uprising_spell_icons/damage.svg' name='damage-icon' width='20px'>",
  Mind = "<img src='../../../assets/uprising_spell_icons/mind.svg' name='mind-icon' width='22px'>",
  Shock = "<img src='../../../assets/uprising_spell_icons/shock.svg' name='shock-icon' width='20px'>",
  Poison = "<img src='../../../assets/uprising_spell_icons/poison.svg' name='poison-icon' width='20px'>",
  SlowHaste = "<img src='../../../assets/uprising_spell_icons/slow&haste.svg' name='slow-and-haste-icon' width='20px'>",
  StrengthenWeaken = "<img src='../../../assets/uprising_spell_icons/strengthen&weaken.svg' name='strengthen-and-weaken-icon' width='20px'>",
  Attack = "<img src='../../../assets/uprising_spell_icons/attack.svg' name='attack-icon' width='20px'>"
}


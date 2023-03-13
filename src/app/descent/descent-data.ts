export enum ExpansionType {
  BoxExpansion = 1,
  CharacterAndMonsterPack = 2
}

export enum Archetype {
  Mage = 1,
  Scout = 2,
  Warrior = 3,
  Healer = 4
}

export enum ExpansionKey {
  LabyrinthOfRuin = 'labyrinthOfRuin',
  ShadowOfNerekhall = 'shadowOfNerekhall',
  LairOfTheWyrm = 'lairOfTheWyrm',
  TheTrollfens = 'theTrollfens',
  ManorOfRavens = 'manorOfRavens',
  MistsOfBilehall = 'mistsOfBilehall',
  TheChainsThatRust = 'theChainsThatRust',
  LostLegends = 'lostLegends',
  OathOfTheOutcast = 'oathOfTheOutcast',
  CrownOfDestiny = 'crownOfDestiny',
  CrusadeOfTheForgotten = 'crusadeOfTheForgotten',
  GuardiansOfDeephall = 'guardiansOfDeephall',
  VisionsOfDawn = 'visionsOfDawn',
  BondsOfTheWild = 'bondsOfTheWild',
  TreatyOfChampions = 'treatyOfChampions',
  StewardsOfTheSecret = 'stewardsOfTheSecret',
  ShardsOfEverdark = 'shardsOfEverdark'
}

export interface DescentExpansion {
  name: string;
  link: string;
  expansionType: ExpansionType;
  heroesAdded: Array<DescentHero>;
  classesAdded: Array<DescentClass>;
}

export interface DescentHero {
  name: string;
  archetype: Archetype;
}

export interface DescentClass {
  name: string;
  archetype: Archetype;
  hybridArchetype? : Archetype;
}
export const expansionMap: Map<ExpansionKey, DescentExpansion> = new Map([
  [ExpansionKey.LabyrinthOfRuin, {
    name: 'Labyrinth of Ruin',
    expansionType: ExpansionType.BoxExpansion,
    link: 'https://descent2e.fandom.com/wiki/Labyrinth_of_Ruin',
    classesAdded: [
      {name: 'Hexer', archetype: Archetype.Mage},
      {name: 'Treasure Hunter', archetype: Archetype.Scout},
      {name: 'Beastmaster', archetype: Archetype.Warrior},
      {name: 'Apothecary', archetype: Archetype.Healer},
    ],
    heroesAdded: [
      {name: 'Dezra the Vile', archetype: Archetype.Mage},
      {name: 'Logan Lashley', archetype: Archetype.Scout},
      {name: 'Pathfinder Durik', archetype: Archetype.Warrior},
      {name: 'Ulma Grimstone', archetype: Archetype.Healer},
    ],
  }],
  [ExpansionKey.LairOfTheWyrm, {
    name: 'Lair Of The Wyrm', 
    expansionType: ExpansionType.BoxExpansion,
    link: 'https://descent2e.fandom.com/wiki/Lair_of_the_Wyrm',
    classesAdded: [
      {name: 'Champion', archetype: Archetype.Warrior},
      {name: 'Geomancer', archetype: Archetype.Mage},
    ],
    heroesAdded: [
      {name: 'Reynhart the Worthy', archetype: Archetype.Warrior},
      {name: 'High Mage Quellen', archetype: Archetype.Mage},
    ],
  }],
  [ExpansionKey.ManorOfRavens, {
    name: 'Manor Of Ravens', 
    expansionType: ExpansionType.BoxExpansion,
    link: 'https://descent2e.fandom.com/wiki/Manor_of_Ravens',
    classesAdded: [
      {name: 'Marshal', archetype: Archetype.Warrior},
      {name: 'Bounty Hunter', archetype: Archetype.Scout},
    ],
    heroesAdded: [
      {name: 'Alys Raine', archetype: Archetype.Warrior},
      {name: 'Thaiden Mistpeak', archetype: Archetype.Scout},
    ],
  }],
  [ExpansionKey.ShadowOfNerekhall, {
    name: 'Shadow Of Nerekhall', 
    expansionType: ExpansionType.BoxExpansion,
    link: 'https://descent2e.fandom.com/wiki/Shadow_of_Nerekhall',
    classesAdded: [
      {name: 'Shadow Walker', archetype: Archetype.Scout},
      {name: 'Counjurer', archetype: Archetype.Mage},
      {name: 'Skirmisher', archetype: Archetype.Warrior},
      {name: 'Bard', archetype: Archetype.Healer},
    ],
    heroesAdded: [
      {name: 'Orkell the Swift', archetype: Archetype.Warrior},
      {name: 'Tinashi the Wanderer', archetype: Archetype.Scout},
      {name: 'Ravaella Lightfoot', archetype: Archetype.Mage},
      {name: 'Rendiel', archetype: Archetype.Healer},
    ],
  }],
  [ExpansionKey.TheTrollfens, {
    name: 'The Trollfens', 
    expansionType: ExpansionType.BoxExpansion,
    link: 'https://descent2e.fandom.com/wiki/The_Trollfens',
    classesAdded: [
      {name: 'Stalker', archetype: Archetype.Scout},
      {name: 'Prophet', archetype: Archetype.Healer},
    ],
    heroesAdded: [
      {name: 'Augur Grisom', archetype: Archetype.Healer},
      {name: 'Roganna the Shade', archetype: Archetype.Scout}
    ],
  }],
  [ExpansionKey.MistsOfBilehall, {
    name: 'Mists of Bilehalls', 
    expansionType: ExpansionType.BoxExpansion,
    link: 'https://descent2e.fandom.com/wiki/Mists_of_Bilehall',
    classesAdded: [],
    heroesAdded: [],
  }],
  [ExpansionKey.TheChainsThatRust, {
    name: 'The Chains That Rust', 
    expansionType: ExpansionType.BoxExpansion,
    link: 'https://descent2e.fandom.com/wiki/The_Chains_that_Rust',
    classesAdded: [
      {name: 'Monk', archetype: Archetype.Scout, hybridArchetype: Archetype.Healer},
      {name: 'Battlemage', archetype: Archetype.Mage, hybridArchetype: Archetype.Warrior},
      {name: 'Steelcaster', archetype: Archetype.Warrior, hybridArchetype: Archetype.Mage},
      {name: 'Watchman', archetype: Archetype.Healer, hybridArchetype: Archetype.Scout},
    ],
    heroesAdded: [],
  }],
  [ExpansionKey.LostLegends, {
    name: 'Lost Legends', 
    expansionType: ExpansionType.BoxExpansion,
    link: 'https://descent2e.fandom.com/wiki/Lost_Legends',
    classesAdded: [
      {name: 'Soul Reaper', archetype: Archetype.Healer},
      {name: 'Elementalist', archetype: Archetype.Mage},
      {name: 'Avenger', archetype: Archetype.Warrior, hybridArchetype: Archetype.Healer},
      {name: 'Raider', archetype: Archetype.Warrior, hybridArchetype: Archetype.Scout},
      {name: 'Truthseer', archetype: Archetype.Mage, hybridArchetype: Archetype.Scout},
      {name: 'Lorekeeper', archetype: Archetype.Mage, hybridArchetype: Archetype.Healer},
      {name: 'Trickster', archetype: Archetype.Scout, hybridArchetype: Archetype.Mage},
      {name: 'Ravager', archetype: Archetype.Scout, hybridArchetype: Archetype.Warrior},
      {name: 'Heretic', archetype: Archetype.Healer, hybridArchetype: Archetype.Mage},
      {name: 'Crusader', archetype: Archetype.Healer, hybridArchetype: Archetype.Warrior},
    ],
    heroesAdded: [],
  }],
  [ExpansionKey.OathOfTheOutcast, {
    name: 'Oath of the Outcast', 
    expansionType: ExpansionType.CharacterAndMonsterPack,
    link: 'https://descent2e.fandom.com/wiki/Oath_of_the_Outcast',
    classesAdded: [],
    heroesAdded: [
      {name: 'Trenloe the Strong', archetype: Archetype.Warrior},
      {name: 'Laurel of Bloodwood', archetype: Archetype.Scout},
      {name: 'Elder Mok', archetype: Archetype.Healer},
      {name: 'Shiver', archetype: Archetype.Mage},
    ],
  }],
  [ExpansionKey.CrownOfDestiny, {
    name: 'Crown Of Destiny', 
    expansionType: ExpansionType.CharacterAndMonsterPack,
    link: 'https://descent2e.fandom.com/wiki/Crown_of_Destiny',
    classesAdded: [],
    heroesAdded: [
      {name: 'Corbin', archetype: Archetype.Warrior},
      {name: 'Lindel', archetype: Archetype.Scout},
      {name: 'Brother Gherinn', archetype: Archetype.Healer},
      {name: 'Jaes the Exile', archetype: Archetype.Mage},
    ],
  }],
  [ExpansionKey.CrusadeOfTheForgotten, {
    name: 'Crusade Of The Forgotten', 
    expansionType: ExpansionType.CharacterAndMonsterPack,
    link: 'https://descent2e.fandom.com/wiki/Crusade_of_the_Forgotten',
    classesAdded: [],
    heroesAdded: [
      {name: 'Tahlia', archetype: Archetype.Warrior},
      {name: 'Tetherys', archetype: Archetype.Scout},
      {name: 'Andira Runehand', archetype: Archetype.Healer},
      {name: 'Astarra', archetype: Archetype.Mage},
    ],
  }],
  [ExpansionKey.GuardiansOfDeephall, {
    name: 'Guardians Of Deephall', 
    expansionType: ExpansionType.CharacterAndMonsterPack,
    link: 'https://descent2e.fandom.com/wiki/Guardians_of_Deephall',
    classesAdded: [],
    heroesAdded: [
      {name: 'Lord Hawthorne', archetype: Archetype.Warrior},
      {name: 'Mordrog', archetype: Archetype.Warrior},
      {name: 'Sahla', archetype: Archetype.Healer},
      {name: 'Silhouette', archetype: Archetype.Scout},
    ],
  }],
  [ExpansionKey.VisionsOfDawn, {
    name: 'Visions Of Dawn', 
    expansionType: ExpansionType.CharacterAndMonsterPack,
    link: 'https://descent2e.fandom.com/wiki/Visions_of_Dawn',
    classesAdded: [],
    heroesAdded: [
      {name: 'Ispher', archetype: Archetype.Healer},
      {name: 'Master Thorn', archetype: Archetype.Mage},
      {name: 'Nara the Fang', archetype: Archetype.Warrior},
      {name: 'Sir Valadir', archetype: Archetype.Warrior},
    ],
  }],
])

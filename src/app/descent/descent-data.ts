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
  OathOfTheOutcast = 'oathOfTheOutcast',
}

export interface DescentExpansion {
  name: string;
  image: string;
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
  hybrid? : boolean;
}
export const expansionMap: Map<ExpansionKey, DescentExpansion> = new Map([
  [ExpansionKey.LabyrinthOfRuin, {
    name: 'Labyrinth of Ruin',
    expansionType: ExpansionType.BoxExpansion,
    image: '../../assets/descent/LabyrinthBox.webp',
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
    image: 'https://www.w3schools.com/images/w3schools_green.jpg',
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
    image: 'https://static.wikia.nocookie.net/descent2e/images/f/f4/LabyrinthBox.png/revision/latest/scale-to-width-down/300?cb=20130206012036',
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
    image: 'https://static.wikia.nocookie.net/descent2e/images/f/f4/LabyrinthBox.png/revision/latest/scale-to-width-down/300?cb=20130206012036',
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
    image: 'https://static.wikia.nocookie.net/descent2e/images/f/f4/LabyrinthBox.png/revision/latest/scale-to-width-down/300?cb=20130206012036',
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
    image: 'https://static.wikia.nocookie.net/descent2e/images/f/f4/LabyrinthBox.png/revision/latest/scale-to-width-down/300?cb=20130206012036',
    classesAdded: [
      {name: 'Stalker', archetype: Archetype.Scout},
      {name: 'Prophet', archetype: Archetype.Healer},
    ],
    heroesAdded: [
      {name: 'Augur Grisom', archetype: Archetype.Healer},
      {name: 'Roganna the Shade', archetype: Archetype.Scout}
    ],
  }],
  [ExpansionKey.TheChainsThatRust, {
    name: 'The Chains That Rust', 
    expansionType: ExpansionType.BoxExpansion,
    image: 'https://static.wikia.nocookie.net/descent2e/images/f/f4/LabyrinthBox.png/revision/latest/scale-to-width-down/300?cb=20130206012036',
    classesAdded: [
      {name: 'Monk', archetype: Archetype.Scout, hybrid: true},
      {name: 'Battlemage', archetype: Archetype.Mage, hybrid: true},
      {name: 'Steelcaster', archetype: Archetype.Warrior, hybrid: true},
      {name: 'Watchman', archetype: Archetype.Healer, hybrid: true},
    ],
    heroesAdded: [],
  }],
  [ExpansionKey.OathOfTheOutcast, {
    name: 'Oath of the Outcast', 
    expansionType: ExpansionType.CharacterAndMonsterPack,
    image: 'https://static.wikia.nocookie.net/descent2e/images/f/f4/LabyrinthBox.png/revision/latest/scale-to-width-down/300?cb=20130206012036',
    classesAdded: [
    ],
    heroesAdded: [
      {name: 'Trenloe the Strong', archetype: Archetype.Warrior},
      {name: 'Laurel of Bloodwood', archetype: Archetype.Scout},
      {name: 'Elder Mok', archetype: Archetype.Healer},
      {name: 'Shiver', archetype: Archetype.Mage},
    ],
  }],
])

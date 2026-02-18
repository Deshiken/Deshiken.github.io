import { IconHtml } from '../uprising/spell-cards/spell-card-data';

export interface UprisingTacticsUnit {
  name: string;
  cost?: UnitCost;
  attack?: number;
  speed: number;
  attackDistance: number;
  isBuilding: boolean;
  health: number;
  specialAbilities?: Array<SpecialAbilities>;
  specialDescripton?: string;
}

interface UnitCost {
  mana?: number;
  gold?: number;
  technology?: number;
}

enum SpecialAbilities {
  FLYING = 'Flying',
  MAGIC_ATTACK = 'Magic Attack',
  RANGED_ATTACK = 'Ranged Attack',
  SEIGE_ATTACK = 'Siege Attack',
  ARMORED = 'Armored',
  CHARGE = 'Charge',
}

export interface VersionedUprisingTacticsUnits {
  version: string;
  units: Array<UprisingTacticsUnit>;
}

/* Exploration token ideas
- +3 gold
- +1 mana
- +1 technology
- Heal 2 to a unit or building
- Place an entangle token on a region
- Place a stun token on a unit
- Place a strengthen token on a unit or building
- Draw 2 spell cards
- Place a haste token on a unit
- Move an enemy unit to an adjacent region
- Deal 1 damage to an enemy unit or building
- Place a weaken token on an enemy unit or building
- Place a slow token on an enemy unit or building
*/


export const versionedUprisingTacticsUnits: Array<VersionedUprisingTacticsUnits> =
  [
    {
      version: '1.0.0',
      units: [
        {
          name: 'Warrior',
          cost: { gold: 8 },
          attack: 3,
          speed: 2,
          health: 3,
          attackDistance: 1,
          isBuilding: false,
          specialAbilities: [SpecialAbilities.ARMORED],
        },
        {
          name: 'Archer',
          cost: { gold: 10 },
          attack: 3,
          speed: 3,
          health: 3,
          attackDistance: 2,
          isBuilding: false,
          specialAbilities: [SpecialAbilities.RANGED_ATTACK],
          specialDescripton: `-1 ${IconHtml.Attack} when <i>engaged</i>.`,
        },
        {
          name: 'Air',
          cost: { gold: 8, mana: 1 },
          attack: 3,
          speed: 3,
          health: 3,
          attackDistance: 2,
          isBuilding: false,
          specialAbilities: [SpecialAbilities.FLYING],
        },
        {
          name: 'Mage',
          cost: { gold: 8, mana: 2 },
          attack: 5,
          speed: 2,
          health: 2,
          attackDistance: 1,
          isBuilding: false,
          specialAbilities: [SpecialAbilities.MAGIC_ATTACK],
        },
        {
          name: 'Cavalry',
          cost: { gold: 8, technology: 1 },
          attack: 4,
          speed: 4,
          health: 4,
          attackDistance: 1,
          isBuilding: false,
          specialAbilities: [],
        },
        {
          name: 'Siege Engine',
          cost: { gold: 8, technology: 2 },
          attack: 3,
          speed: 1,
          health: 3,
          attackDistance: 3,
          isBuilding: false,
          specialAbilities: [SpecialAbilities.SEIGE_ATTACK],
          specialDescripton: `-2 ${IconHtml.Attack} when <i>engaged</i>.`,
        },
        {
          name: 'Tower',
          cost: { gold: 8 },
          attack: 3,
          speed: 0,
          health: 3,
          attackDistance: 2,
          isBuilding: true,
          specialAbilities: [],
        },
        {
          name: 'Farm',
          cost: { gold: 3 },
          attack: 3,
          speed: 0,
          health: 3,
          attackDistance: 2,
          isBuilding: true,
          specialAbilities: [],
        },
        {
          name: 'City',
          cost: { gold: 3 },
          attack: 3,
          speed: 0,
          health: 3,
          attackDistance: 2,
          isBuilding: true,
          specialAbilities: [],
        },
        {
          name: 'Capitol',
          attack: 5,
          speed: 0,
          health: 3,
          attackDistance: 2,
          isBuilding: true,
          specialAbilities: [],
        },
      ],
    },
    {
      version: '1.1.0',
      units: [
        {
          name: 'Warrior',
          cost: { gold: 8 },
          attack: 3,
          speed: 2,
          health: 3,
          attackDistance: 1,
          isBuilding: false,
          specialAbilities: [SpecialAbilities.ARMORED],
        },
        {
          name: 'Archer',
          cost: { gold: 10 },
          attack: 3,
          speed: 3,
          health: 4,
          attackDistance: 2,
          isBuilding: false,
          specialAbilities: [SpecialAbilities.RANGED_ATTACK],
          specialDescripton: `-1 ${IconHtml.Attack} when <i>engaged</i>.`,
        },
        {
          name: 'Air',
          cost: { gold: 8, mana: 1 },
          attack: 4,
          speed: 2,
          health: 4,
          attackDistance: 1,
          isBuilding: false,
          specialAbilities: [SpecialAbilities.FLYING],
        },
        {
          name: 'Mage',
          cost: { gold: 6, mana: 2 },
          attack: 6,
          speed: 2,
          health: 3,
          attackDistance: 1,
          isBuilding: false,
          specialAbilities: [SpecialAbilities.MAGIC_ATTACK, SpecialAbilities.RANGED_ATTACK],
        },
        {
          name: 'Cavalry',
          cost: { gold: 8, technology: 1 },
          attack: 4,
          speed: 4,
          health: 5,
          attackDistance: 1,
          isBuilding: false,
          specialAbilities: [SpecialAbilities.CHARGE],
        },
        {
          name: 'Siege Engine',
          cost: { gold: 4, technology: 2 },
          attack: 5,
          speed: 1,
          health: 3,
          attackDistance: 3,
          isBuilding: false,
          specialAbilities: [SpecialAbilities.SEIGE_ATTACK],
          specialDescripton: `-2 ${IconHtml.Attack} when <i>engaged</i>.`,
        },
        {
          name: 'Tower',
          cost: { gold: 8 },
          attack: 3,
          speed: 0,
          health: 4,
          attackDistance: 2,
          isBuilding: true,
          specialAbilities: [SpecialAbilities.ARMORED],
        },
        {
          name: 'Farm',
          cost: { gold: 3 },
          attack: 1,
          speed: 0,
          health: 3,
          attackDistance: 1,
          isBuilding: true,
          specialAbilities: [SpecialAbilities.ARMORED],
        },
        {
          name: 'City',
          cost: { gold: 3 },
          attack: 2,
          speed: 0,
          health: 4,
          attackDistance: 1,
          isBuilding: true,
          specialAbilities: [SpecialAbilities.ARMORED],
        },
        {
          name: 'Capitol',
          attack: 5,
          speed: 0,
          health: 10,
          attackDistance: 2,
          isBuilding: true,
          specialAbilities: [SpecialAbilities.ARMORED],
        },
      ],
    },
  ];

import {ExpansionKey} from './descent-party-builder.service';
import {DescentExpansion} from './descent-party-builder.service';

export const expansionMap: Map<ExpansionKey, DescentExpansion> = new Map([
  [ExpansionKey.LabyrinthOfRuin, {
    name: 'Labyrinth of Ruin', 
    classesAdded: [],
    heroesAdded: [],
  }],
  [ExpansionKey.LairOfTheWyrm, {
    name: 'Lair Of The Wyrm', 
    classesAdded: [],
    heroesAdded: [],
  }],
  [ExpansionKey.ManorOfRavens, {
    name: 'Manor Of Ravens', 
    classesAdded: [],
    heroesAdded: [],
  }],
  [ExpansionKey.ShadowOfNerekhall, {
    name: 'Shadow Of Nerekhall', 
    classesAdded: [],
    heroesAdded: [],
  }],
  [ExpansionKey.TheTrollfens, {
    name: 'The Trollfens', 
    classesAdded: [],
    heroesAdded: [],
  }],
])

enum ExpansionType {
  BoxExpansion = 1,
  CharacterAndMonsterPack = 2
}
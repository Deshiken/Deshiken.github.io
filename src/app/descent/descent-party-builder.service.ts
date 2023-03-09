import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescentPartyBuilderService {
  public descentPartyBuilderOptions: DescentPartyBuilderOptions = this.setPartyBuilderData();

  constructor() { }

  public setPartyBuilderData(): DescentPartyBuilderOptions {
    const localStorageOption = localStorage.getItem('descentPartyBuilderOptions');
    console.log('partyBuilderOptions from localStorage', localStorageOption);
   
    if (typeof localStorageOption === 'string') {
      return JSON.parse(localStorageOption) as DescentPartyBuilderOptions
    } else {
      return this.useDefaultOptions();
    }
  }

  private useDefaultOptions() {
    let partyBuilderOptions: DescentPartyBuilderOptions = {
      numberOfPartyMembers: 4,
      preventRepeatClasses: true,
      expansionMap: new Map([
        [ExpansionKey.LabyrinthOfRuin, {name: 'Labyrinth of Ruin', owned: false}],
        [ExpansionKey.ShadowOfNerekhall, {name: 'Shadow of Nerekhall', owned: false}],
        [ExpansionKey.LairOfTheWyrm, {name: 'Lair Of The Wyrm', owned: false}]
      ])
    };
    
    return partyBuilderOptions;
  }

  public saveToLocalStorage() {
    localStorage.setItem('descentPartyBuilderOptions', JSON.stringify(this.descentPartyBuilderOptions));
  }
}

interface DescentPartyBuilderOptions {
  numberOfPartyMembers: number; 
  preventRepeatClasses: boolean;
  expansionMap: Map<ExpansionKey, DescentExpansionOption>
  // expansions: {
  //   labyrinthOfRuin: boolean;
  //   shadowOfNerekhall: boolean;
  //   lairOfTheWyrm: boolean;
  //   theTrollfens: boolean;
  //   manorOfRavens: boolean;
  //   mistsOfBilehall: boolean;
  //   theChainsThatRust: boolean;
  //   lostLegends: boolean;
  // }
  // heroAndMonsterPacks: {
  //   oathOfTheOutcast: boolean;
  //   crownOfDestiny: boolean;
  //   crusadeOfTheForgotten: boolean;
  //   guardiansOfDeephall: boolean;
  //   bondsOfTheWild: boolean;
  //   treatyOfChampions: boolean;
  //   stewardsOfTheSecret: boolean;
  //   visionsOfDawn: boolean;
  //   shardsOfEverdark: boolean;
  // }
}

enum ExpansionKey {
  LabyrinthOfRuin = 'labyrinthOfRuin',
  ShadowOfNerekhall = 'shadowOfNerekhall',
  LairOfTheWyrm = 'lairOfTheWyrm',
  TheTrollfens = 'theTrollfens',
  ManorOfRavens = 'manorOfRavens',
}

const DescentExpansions: Map<string, DescentExpansion> = new Map()

interface DescentExpansionOption {
  name: string;
  owned: boolean;
}

interface DescentExpansion extends DescentExpansionOption {
  heroesAdded: Array<DescentHero>;
  classesAdded: Array<DescentClass>;
}

interface DescentHero {
  name: string;
  archetype: string;
}

interface DescentClass {
  name: string;
  archetype: string;
}
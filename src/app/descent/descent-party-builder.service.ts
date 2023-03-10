import { Injectable } from '@angular/core';
import { RandomService } from '../shared/services/random.service';

@Injectable({
  providedIn: 'root'
})
export class DescentPartyBuilderService {
  public descentPartyBuilderOptions: any = this.setPartyBuilderData();
  public expansionMap: Map<ExpansionKey, DescentExpansion> = new Map([
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

  constructor(
    private utilities: RandomService
  ) { }

  public setPartyBuilderData(): DescentPartyBuilderOptions {
    const localStorageOptions = localStorage.getItem('descentPartyBuilderOptions');
    
    if (typeof localStorageOptions === 'string') {
      // If options are found in local storage, merge them with the default options, overlaying the defaults with the options from local storage.
      return this.utilities.mergeRecursive(this.useDefaultOptions(), JSON.parse(localStorageOptions) as DescentPartyBuilderOptions)
    } else {
      return this.useDefaultOptions();
    }
  }

  private useDefaultOptions() {
    let partyBuilderOptions: any = {
      numberOfPartyMembers: 4,
      preventRepeatClasses: true
    };

    // Add each enum of ExpansionKey as a property with a value of false.
    Object.values(ExpansionKey).map((value) => partyBuilderOptions[value] = false);

    return partyBuilderOptions;
  }

  public saveToLocalStorage() {
    console.log('saving: ', this.descentPartyBuilderOptions)
    localStorage.setItem('descentPartyBuilderOptions', JSON.stringify(this.descentPartyBuilderOptions));
  }
}

interface DescentPartyBuilderOptions {
  numberOfPartyMembers: number; 
  preventRepeatClasses: boolean;
  expansionOptionMap: Map<ExpansionKey, boolean>
}

export enum ExpansionKey {
  LabyrinthOfRuin = 'labyrinthOfRuin',
  ShadowOfNerekhall = 'shadowOfNerekhall',
  LairOfTheWyrm = 'lairOfTheWyrm',
  TheTrollfens = 'theTrollfens',
  ManorOfRavens = 'manorOfRavens',
}

export interface DescentExpansion {
  name: string;
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
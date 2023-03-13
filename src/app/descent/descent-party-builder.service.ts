import { Injectable } from '@angular/core';
import { RandomService } from '../shared/services/random.service';
import { ExpansionKey, DescentExpansion, ExpansionType } from './descent-data'

@Injectable({
  providedIn: 'root'
})
export class DescentPartyBuilderService {
  public descentPartyBuilderOptions: any = this.setPartyBuilderData();
  
  public expansionMap: Map<ExpansionKey, DescentExpansion> = new Map([
    [ExpansionKey.LabyrinthOfRuin, {
      name: 'Labyrinth of Ruin',
      expansionType: ExpansionType.BoxExpansion,
      image: 'https://static.wikia.nocookie.net/descent2e/images/f/f4/LabyrinthBox.png/revision/latest/scale-to-width-down/300?cb=20130206012036', 
      classesAdded: [],
      heroesAdded: [],
    }],
    [ExpansionKey.LairOfTheWyrm, {
      name: 'Lair Of The Wyrm', 
      expansionType: ExpansionType.BoxExpansion,
      image: 'https://static.wikia.nocookie.net/descent2e/images/f/f4/LabyrinthBox.png/revision/latest/scale-to-width-down/300?cb=20130206012036',
      classesAdded: [],
      heroesAdded: [],
    }],
    [ExpansionKey.ManorOfRavens, {
      name: 'Manor Of Ravens', 
      expansionType: ExpansionType.BoxExpansion,
      image: 'https://static.wikia.nocookie.net/descent2e/images/f/f4/LabyrinthBox.png/revision/latest/scale-to-width-down/300?cb=20130206012036',
      classesAdded: [],
      heroesAdded: [],
    }],
    [ExpansionKey.ShadowOfNerekhall, {
      name: 'Shadow Of Nerekhall', 
      expansionType: ExpansionType.BoxExpansion,
      image: 'https://static.wikia.nocookie.net/descent2e/images/f/f4/LabyrinthBox.png/revision/latest/scale-to-width-down/300?cb=20130206012036',
      classesAdded: [],
      heroesAdded: [],
    }],
    [ExpansionKey.TheTrollfens, {
      name: 'The Trollfens',
      expansionType: ExpansionType.BoxExpansion,
      image: 'https://static.wikia.nocookie.net/descent2e/images/f/f4/LabyrinthBox.png/revision/latest/scale-to-width-down/300?cb=20130206012036', 
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
}

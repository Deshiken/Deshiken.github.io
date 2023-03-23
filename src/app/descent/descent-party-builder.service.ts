import { Injectable } from '@angular/core';
import { RandomService } from '../shared/services/random.service';
import { ExpansionKey, DescentHero } from './descent-data'

@Injectable({
  providedIn: 'root'
})

export class DescentPartyBuilderService {
  public descentPartyBuilderOptions: any = this.setPartyBuilderData();
  public selectedParty: Array<DescentHero> = new Array<DescentHero>();
  

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
      preventRepeatClasses: true,
      includeHybridClass: true,
      selectHybridSubclass: true
    };

    // Add each enum of ExpansionKey as a property with a value of false.
    Object.values(ExpansionKey).map((value) => partyBuilderOptions[value] = false);
    
    // Set the Base game property to true, since the base game is required.
    partyBuilderOptions.descentBaseGame = true;

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

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
      buildBalancedParty: true
    };
    return partyBuilderOptions;
  }

  public saveToLocalStorage() {
    localStorage.setItem('descentPartyBuilderOptions', JSON.stringify(this.descentPartyBuilderOptions));
  }
}

interface DescentPartyBuilderOptions {
  numberOfPartyMembers: number; 
  buildBalancedParty: boolean;
}
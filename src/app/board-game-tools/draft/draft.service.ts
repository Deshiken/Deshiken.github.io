import { Injectable } from '@angular/core';
import { testDraftOptions } from './draft.data';

@Injectable({
  providedIn: 'root'
})

export class DraftService {
  public savedDraftLists = testDraftOptions;
  public selectedDraft: DraftOptions = testDraftOptions[0];
  public players: Map<number,Player> = new Map<number,Player>()
  public draftSteps: Array<number> = new Array<number>();

  constructor() {
    let localStorageString = localStorage.getItem('savedDraftList');
    if (typeof localStorageString === 'string') {
      // If options are found in local storage, merge them with the default options, overlaying the defaults with the options from local storage.
      this.savedDraftLists = JSON.parse(localStorageString) as Array<DraftOptions>;
    }
  }

  private defaultDraftOptions(): DraftOptions {
    return {
      draftName: '',
      numberOfPlayers: 4,
      picksPerPlayer: 1,
      snakeDraft: true,
      balancedDraft: false,
      teamDraft: true,
      randomDraftItems: false,
      randomDraftOrder: false,
      useItemCategories: false,
      draftItemCategories: new Array<string>(),
      draftItems: new Array<DraftItem>(),
    }
  }
}

export interface Player {
  playerNumber: number;
  team?: number;
  draftPicks?: Array<DraftItem>;
}

export interface DraftItem {
  itemName: string,
  itemCategory?: string,
}

export interface DraftOptions {
  draftName: string;
  numberOfPlayers: number,
  picksPerPlayer: number,
  snakeDraft: boolean,
  balancedDraft: boolean,
  teamDraft: boolean,
  randomDraftItems: boolean,
  randomDraftOrder: boolean,
  useItemCategories: boolean,
  draftItemCategories: Array<string>,
  draftItems: Array<DraftItem>,
}

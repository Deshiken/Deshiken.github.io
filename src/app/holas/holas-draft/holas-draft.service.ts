import { Injectable } from '@angular/core';
import { DraftStep } from './models/draft-step';
import { Player } from './models/player';

@Injectable({
  providedIn: 'root',
})
export class HolasDraftService {

  public numberOfPlayers: number = 4;
  public randomBuilding: boolean = true;
  public teamDraft: boolean = true;

  /* Icons selected by the players to represent them */
  public selectedIcons: Array<string> = new Array<string>();

  /* Array of all available factions user seleced through the options page*/
  public availableFactions: Array<HolasFaction> = Object.values(HolasFaction);
  /* Array of the randomly selected factions from the list of all available factions */
  public selectedFactions: Array<SelectedFaction> = new Array<SelectedFaction>();

  /* Array of all available mercs user seleced through the options page*/
  public availableMercs: Array<Mercenary> = Object.values(Mercenary);
  // public availableMercs: Array<Mercenary> = Array<Mercenary>();
  /* Array of the randomly selected mercs from the list of all available mercs */
  public selectedMercs: Array<string> = new Array<string>();


  /* Map of players including the draft choices they have made */
  public playerMap: Map<number, Player> = new Map<number, Player>();
  /* Array of steps to complete in order to complete the draft */
  public draftSteps: Array<DraftStep> = new Array<DraftStep>();
  /* Current draft step */
  public currentDraftStep: number = 0;

  constructor() { }

}

export enum Mercenary {
  Doppelganger = 'Doppelganger',
  Harvester = 'Harvester',
  Warlord = 'Warlord',
  Druid = 'Druid',
  Treant = 'Treant',
  DemonLord = 'Demon Lord',
  HillGiant = 'Hill Giant',
  Gorgon = 'Gorgon',
  Cultist = 'Cultist',
  DragonscaleYacht = 'Dragonscale Yacht',
  Minotaur = 'Minotaur',
  Guardian = 'Guardian'
}

export enum HolasFaction {
  Orcs = 'Orcs',
  Elves = 'Elves',
  Dwarves = 'Dwarves',
  Humans = 'Humans',
  Lizardfolk = 'Lizardfolk',
  Lionkin = 'Lionkin',
  Goblins = 'Goblins',
  Undead = 'Undead',
  Birdfolk = 'Birdfolk',
  Merfolk = 'Merfolk'
}

export interface SelectedFaction {
  faction: HolasFaction;
  building: string;
}

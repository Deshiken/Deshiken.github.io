import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomService } from 'src/app/shared/random/random.service';
import { HolasDraftService, HolasFaction, Mercenary, SelectedFaction } from '../holas-draft.service';

@Component({
  selector: 'app-draft-start',
  templateUrl: './draft-start.component.html',
  styleUrls: ['./draft-start.component.scss']
})
export class DraftStartComponent implements OnInit {

  /* Make Enums available to template */
  public HolasFaction = HolasFaction;
  public Mercenary = Mercenary;
  

  public errorFree: boolean = true;
  public errors = {
    teamDraftWithOddPlayers : false,
    tooFewFactionsSelected : false,
    tooFewMercenariesSelected : false,
  }

  public buildings: Array<string> = ['Barracks', 'Mage Tower', 'Assassin Guild', 'Shipyard', 'Aviary']

  constructor(
    public draftService: HolasDraftService,
    public randomService: RandomService,
    public router: Router
  ) { }

  public factionChange(event: any, faction: HolasFaction) {
    if (event?.target?.checked) {
      this.draftService.availableFactions.push(faction);
    } else {
      this.randomService.deleteFromArray(this.draftService.availableFactions, faction);
    }
  }

  public mercenaryChange(event: any, mercenary: Mercenary) {
    if (event?.target?.checked) {
      this.draftService.availableMercs.push(mercenary);
    } else {
      this.randomService.deleteFromArray(this.draftService.availableMercs, mercenary);
    }
  }

  public next() {
    this.checkForErrors();
    if (this.errorFree) {
      this.generateFactions();
      this.generateMercs();
      for (let faction of this.draftService.selectedFactions) {
        console.log('Selected Faction:', faction);
      }
      for (let merc of this.draftService.selectedMercs) {
        console.log('Selected Mercinary:', merc);
      }
      this.router.navigate(['/holas/player-select'])
    }
  }

  public checkForErrors() {
    //reset error flag
    this.errorFree = true;
    
    // The number of available Factions and Mercenaries must be equal to or greater than the number of players.
    if (this.draftService.availableFactions.length < this.draftService.numberOfPlayers) {
      this.errorFree = false;
      this.errors.tooFewFactionsSelected = true;
    }
    
    // Team play is only possible with even numbers of players
    if (this.draftService.teamDraft && (this.draftService.numberOfPlayers == 3 || this.draftService.numberOfPlayers == 5 || this.draftService.numberOfPlayers == 7)) {
      this.errorFree = false;
      this.errors.teamDraftWithOddPlayers = true;
    }
  }

  /* Build the array of randomly selected factions from the list of available factions. One per player. */
  public generateFactions() {
    for (let i = 0; i < this.draftService.numberOfPlayers; i++) {
      const faction: HolasFaction = this.randomService.getRandomEntryFromArray(this.draftService.availableFactions);
      
      const selectedFaction: SelectedFaction = {
        faction: faction, 
        building: this.draftService.randomBuilding ? this.randomService.getRandomEntryFromArray(this.buildings) : '' 
      };

      this.draftService.selectedFactions.push(selectedFaction)
      
      this.randomService.deleteFromArray(this.draftService.availableFactions, faction);
    };
  }

  /* Build the array of randomly selected mercenaries from the list of available factions. One per player. */
  public generateMercs() {
    for (let i = 0; i < this.draftService.numberOfPlayers; i++) {
      let merc: Mercenary = this.randomService.getRandomEntryFromArray(this.draftService.availableMercs);
      this.draftService.selectedMercs.push(merc);
      this.randomService.deleteFromArray(this.draftService.availableMercs, merc);
    }
  }

  ngOnInit(): void {
  }

}

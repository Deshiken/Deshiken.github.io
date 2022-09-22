import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomService } from 'src/app/shared/random/random.service';
import { IconSize } from '../draft-icon/draft-icon.component';
import { DraftStartComponent } from '../draft-start/draft-start.component';
import { HolasDraftService, Mercenary, SelectedFaction } from '../holas-draft.service';
import { DraftStep } from '../models/draft-step';
import { Player } from '../models/player';

@Component({
  selector: 'app-draft-pick',
  templateUrl: './draft-pick.component.html',
  styleUrls: ['./draft-pick.component.scss']
})
export class DraftPickComponent implements OnInit {

  public IconSize = IconSize;

  public currentPlayer: Player = this.draftService.draftSteps[this.draftService.currentDraftStep].player;
  public currentStep: DraftStep = this.draftService.draftSteps[this.draftService.currentDraftStep];
  
  public factionChoice: SelectedFaction;
  public mercenaryChoice: string;
  public choiceType: string;

  constructor(
    public draftService: HolasDraftService,
    public randomService: RandomService,
    public router: Router
  ) { }

  ngOnInit(): void {
    console.log('draft-pick init');
    console.log('currentPlayer: ', this.currentPlayer);
  }

  public chooseFaction(faction: SelectedFaction) {
    console.log(faction, ' chosen')
    // this.currentPlayer.factionPick = faction;
    this.choiceType = 'faction';
    this.factionChoice = faction;
  }
  
  public chooseMercenary(mercenary: string) {
    console.log(mercenary, ' chosen');
    // this.currentPlayer.mercenaryPick = mercenary;
    this.choiceType = 'mercenary';
    this.mercenaryChoice = mercenary;
  }

  public undo() {
    // this.factionChoice = null;
    this.choiceType = '';
  }

  public next() {
    if (this.choiceType) {
      this.savePickToPlayer();
      this.removeChoiceFromAvailableList();
      this.clearCurrentStepVariables();
      this.draftService.currentDraftStep ++;

      if (this.draftService.currentDraftStep === this.draftService.draftSteps.length) {
        this.router.navigate(['/holas/draft-summary']);
      } else {
        this.currentPlayer = this.draftService.draftSteps[this.draftService.currentDraftStep].player;
        this.currentStep = this.draftService.draftSteps[this.draftService.currentDraftStep];
      }

    }
  }

  public savePickToPlayer() {
    if (this.choiceType === 'faction') {
      this.currentPlayer.factionPick = this.factionChoice;
    }
    if (this.choiceType === 'mercenary') {
      this.currentPlayer.mercenaryPick = this.mercenaryChoice;
    }
  }

  public clearCurrentStepVariables() {
    this.choiceType = '';
  }

  public removeChoiceFromAvailableList() {
    if (this.choiceType === 'faction') {
      this.randomService.deleteFromArray(this.draftService.selectedFactions, this.currentPlayer.factionPick)
    }
    if (this.choiceType === 'mercenary') {
      this.randomService.deleteFromArray(this.draftService.selectedMercs, this.currentPlayer.mercenaryPick)
    }
  }


}

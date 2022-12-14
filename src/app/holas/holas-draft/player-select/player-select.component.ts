import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomService } from 'src/app/shared/services/random.service';
import { IconSize } from '../draft-icon/draft-icon.component';
import { HolasDraftService } from '../holas-draft.service';
import { DraftStep } from '../models/draft-step';
import { Player } from '../models/player';
import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { FadeInOutAnimation } from 'src/app/shared/animations/fadeInOutAnimation';

@Component({
  selector: 'app-player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.scss'],
  animations: [
    FadeInOutAnimation
  ]
})
export class PlayerSelectComponent implements OnInit {
  public showStar: boolean = true;
  public IconSize = IconSize;
  public players: Array<any> = new Array<any>();
  public removeTest: boolean = false;
  public iconChange: boolean = false;

  public errors = {
    tooFewIconsSelected: false
  }

  constructor(
    public router: Router,
    public draftService: HolasDraftService,
    public randomService: RandomService
  ) { }

  ngOnInit(): void {
    console.log('available mercenaries', this.draftService.availableMercs);
    console.log('selected mercenaries', this.draftService.selectedMercs);
  }

  public undo() {
    this.draftService.selectedIcons.pop();
  }
  
  public selectIcon(selectedIcon: string) {
    // this.iconChange = true
    if (this.draftService.selectedIcons.length < this.draftService.numberOfPlayers) {
      this.draftService.selectedIcons.push(selectedIcon);
    }
    // this.iconChange = false;
  }

  public next() {
    if (this.draftService.selectedIcons.length < this.draftService.numberOfPlayers) {
      this.errors.tooFewIconsSelected = true;
    } else {
      this.buildRandomPlayerOrder();
      this.buildDraftSteps();
      this.router.navigate(['/holas/draft-pick']);
    }
  }

  public buildRandomPlayerOrder() {
    //build the array of players, assigning each player number a random icon.
    let teamCounter = 1;
    for (let i = 0; i < this.draftService.numberOfPlayers; i++) {

      const playerNumber: number = i + 1;
      const icon = this.randomService.getRandomEntryFromArray(this.draftService.selectedIcons);
      const team = teamCounter;

      this.draftService.playerMap.set(playerNumber, new Player(playerNumber, icon, team));

      //swap the team counter from 1 to 2 or from 2 to 1
      teamCounter === 1 ? teamCounter ++ : teamCounter --;

      //delete the icon that was used from the available icons
      this.randomService.deleteFromArray(this.draftService.selectedIcons, icon);

      console.log(`Player ${this.draftService.playerMap.get(playerNumber)?.playerNumber} 
        icon is ${this.draftService.playerMap.get(playerNumber)?.icon} 
        and team is ${this.draftService.playerMap.get(playerNumber)?.team}` )
    }
  }

  public buildDraftSteps() {
    console.log('buildDraftSteps()');
    console.log('  Team Draft:', this.draftService.teamDraft);
    console.log('  Number of player:', this.draftService.numberOfPlayers);
    console.log('  Mercs:', this.draftService.selectedMercs.length);
    switch(true) {
      //6 player, teams, with mercs
      case (this.draftService.teamDraft && this.draftService.numberOfPlayers === 6 && this.draftService.selectedMercs.length > 0): {
        console.log("6 player, teams, with mercs");
        this.draftService.draftSteps.push(new DraftStep(this.draftService.playerMap.get(1)))
        this.draftService.draftSteps = [
          new DraftStep(this.draftService.playerMap.get(1)), 
          new DraftStep(this.draftService.playerMap.get(2)), 
          new DraftStep(this.draftService.playerMap.get(3)), 
          new DraftStep(this.draftService.playerMap.get(4)), 
          new DraftStep(this.draftService.playerMap.get(5)), 
          new DraftStep(this.draftService.playerMap.get(6)), 
          new DraftStep(this.draftService.playerMap.get(6)), 
          new DraftStep(this.draftService.playerMap.get(5)), 
          new DraftStep(this.draftService.playerMap.get(4)), 
          new DraftStep(this.draftService.playerMap.get(3)), 
          new DraftStep(this.draftService.playerMap.get(2)), 
          new DraftStep(this.draftService.playerMap.get(1))
        ];
        break;
      }
      //6 player, teams, no mercs
      case (this.draftService.teamDraft && this.draftService.numberOfPlayers === 6 && this.draftService.selectedMercs.length === 0): {
        console.log("6 player, teams, no mercs");
        this.draftService.draftSteps = [ 
          new DraftStep(this.draftService.playerMap.get(1)),
          new DraftStep(this.draftService.playerMap.get(2)),
          new DraftStep(this.draftService.playerMap.get(4)),
          new DraftStep(this.draftService.playerMap.get(3)),
          new DraftStep(this.draftService.playerMap.get(5)),
          new DraftStep(this.draftService.playerMap.get(6))
        ]
        break;
      }
      //4 player, teams, with mercs
      case (this.draftService.teamDraft && this.draftService.numberOfPlayers === 4 && this.draftService.selectedMercs.length > 0): {
        console.log("4 player, teams, with mercs");
        this.draftService.draftSteps = [ 
          new DraftStep(this.draftService.playerMap.get(1)),
          new DraftStep(this.draftService.playerMap.get(2)),
          new DraftStep(this.draftService.playerMap.get(3)),
          new DraftStep(this.draftService.playerMap.get(4)),
          new DraftStep(this.draftService.playerMap.get(4)),
          new DraftStep(this.draftService.playerMap.get(3)),
          new DraftStep(this.draftService.playerMap.get(2)),
          new DraftStep(this.draftService.playerMap.get(1))
        ]
        break;
      }
      //4 player, teams, no mercs
      case (this.draftService.teamDraft && this.draftService.numberOfPlayers === 4 && this.draftService.selectedMercs.length === 0): {
        console.log("4 player, teams, no mercs");
        this.draftService.draftSteps = [ 
          new DraftStep(this.draftService.playerMap.get(1)),
          new DraftStep(this.draftService.playerMap.get(2)),
          new DraftStep(this.draftService.playerMap.get(4)),
          new DraftStep(this.draftService.playerMap.get(3))
        ]
        break;
      }
      //free for all, no mercs
      case (!this.draftService.teamDraft && this.draftService.selectedMercs.length === 0): {
        this.draftService.draftSteps = this.randomDraftOrder();
        break;
      }
      //free for all, with mercs
      case (!this.draftService.teamDraft && this.draftService.selectedMercs.length > 0): {
        console.log('free for all with mercs');
        let firstHalf = this.randomDraftOrder();
        let secondHalf = [...firstHalf];
        this.draftService.draftSteps = this.draftService.draftSteps.concat(firstHalf,secondHalf.reverse());
        break;
      }
    }

    console.log('Ending draft steps: ', this.draftService.draftSteps);
  }

  public randomDraftOrder() :Array<DraftStep> {
    let availablePlayers: Array<number> = new Array<number>();
    let draftSteps: Array<DraftStep> = new Array<DraftStep>();

    // build an array of available players to chose from
    for (let i = 0; i < this.draftService.numberOfPlayers; i++ ) {
      availablePlayers.push(i + 1)
    };
    console.log('array of players: ', availablePlayers)

    //For each player, select a random entry from the available players, add it to the draft steps, then delete that player number from the available players
    for (let i = 0; i < this.draftService.numberOfPlayers; i++ ) {
      const playerNumber = this.randomService.getRandomEntryFromArray(availablePlayers);
      draftSteps.push(new DraftStep(this.draftService.playerMap.get(playerNumber)));
      console.log('adding player ', this.draftService.playerMap.get(playerNumber), 'to draftStep array')
      this.randomService.deleteFromArray(availablePlayers, playerNumber);
    };

    return draftSteps;
  }


}

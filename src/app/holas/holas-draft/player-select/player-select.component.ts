import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomService } from 'src/app/shared/random/random.service';
import { IconSize } from '../draft-icon/draft-icon.component';
import { HolasDraftService } from '../holas-draft.service';
import { DraftStep } from '../models/draft-step';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.scss']
})
export class PlayerSelectComponent implements OnInit {
  public showStar: boolean = true;
  public IconSize = IconSize;
  public players: Array<any> = new Array<any>();


  public errors = {
    tooFewIconsSelected: false
  }

  constructor(
    public router: Router,
    public draftService: HolasDraftService,
    public randomService: RandomService
  ) { }

  ngOnInit(): void {
  }

  public undo() {
    this.draftService.selectedIcons.pop();
  }
  
  public selectIcon(selectedIcon: string) {
    if (this.draftService.selectedIcons.length < this.draftService.numberOfPlayers) {
      this.draftService.selectedIcons.push(selectedIcon);
    }
    console.log("selected icons: ", this.draftService.selectedIcons);
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
      case (this.draftService.teamDraft && this.draftService.numberOfPlayers === 4 && this.draftService.selectedMercs.length): {
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
      // case (!this.draftService.teamDraft && !this.draftService.selectedMercs.length): {
      //   this.draftService.draftSteps = this.randomDraftOrder(this.draftService.numberOfPlayers);
      //   break;
      // }
      //free for all, with mercs
      // case (!this.draftService.teamDraft && !this.draftService.selectedMercs.length): {
      //   const firstHalf = this.randomDraftOrder(this.draftService.numberOfPlayers)
      //   this.draftService.draftSteps = firstHalf;
      //   this.draftService.draftSteps.concat(firstHalf.reverse());
      //   break;
      // }
    }

    console.log('Ending draft steps: ', this.draftService.draftSteps);
  }

  public randomDraftOrder(numberOfPlayers: number) :Array<number> {
    return [1,2,4]
  }

}

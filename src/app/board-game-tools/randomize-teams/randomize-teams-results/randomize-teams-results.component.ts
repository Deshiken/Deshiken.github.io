import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconSize } from 'src/app/shared/components/player-icon/player-icon.component';
import { PlayerSelectService } from 'src/app/shared/components/player-select/player-select.service';
import { RandomService } from 'src/app/shared/services/random.service';
import { RandomizeTeamsService } from '../randomize-teams.service';

@Component({
  selector: 'app-randomize-teams-results',
  templateUrl: './randomize-teams-results.component.html',
  styleUrls: ['./randomize-teams-results.component.scss']
})
export class RandomizeTeamsResultsComponent implements OnInit {

  playerMap: Map<number, Player> = new Map<number, Player>();
  IconSize = IconSize;

  constructor(
    public router: Router,
    public randomizeTeamsService: RandomizeTeamsService,
    public playerSelectService: PlayerSelectService,
    public randomService: RandomService
  ) { }

  ngOnInit(): void {
    if (this.randomizeTeamsService.selectedTeamOption == this.randomizeTeamsService.freeForAll) {
      this.setFreeForAllPlayerOrder();
    } else {
      this.setTeamsAndTeamOrder();
    }
  }

  private setFreeForAllPlayerOrder() {
    for (let i = 0; i < this.randomizeTeamsService.numberOfPlayers; i++) {
      // Randomly select an icon for this player number.
      const icon = this.randomService.getRandomEntryFromArray(this.playerSelectService.selectedIcons);
      
      // Add the new player to the player map
      this.playerMap.set(i + 1,new Player(i + 1, icon, 0));
      
      // Delete the icon that was used from the available icons
      this.randomService.deleteFromArray(this.playerSelectService.selectedIcons, icon);
    }
  }

  private setTeamsAndTeamOrder() {
    let currentTeamNumber = 1
    for (let i = 0; i < this.randomizeTeamsService.numberOfPlayers; i++) {
      // Randomly select an icon for this player number.
      const icon = this.randomService.getRandomEntryFromArray(this.playerSelectService.selectedIcons);
      
      // Add the new player to the player map
      this.playerMap.set(i + 1, new Player(i + 1, icon, currentTeamNumber));
      
      // Delete the icon that was used from the available icons
      this.randomService.deleteFromArray(this.playerSelectService.selectedIcons, icon);

      // Increment the team number so the next player is assigned to the next team;
      currentTeamNumber ++;

      if (currentTeamNumber > this.randomizeTeamsService.selectedTeamOption.numberOfTeams) {
        currentTeamNumber = 1 ;
      }
    }
  }

}

export class Player {
  constructor (playerNumber: number, icon: string, teamNumber: number ) {
    this.playerNumber = playerNumber,
    this.icon = icon,
    this.teamNumber = teamNumber
  }
  playerNumber: number;
  teamNumber: number;
  icon: string;
}

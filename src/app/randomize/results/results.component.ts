import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconSize } from 'src/app/shared/components/player-icon/player-icon.component';
import { PlayerSelectService } from 'src/app/shared/components/player-select/player-select.service';
import { RandomService } from 'src/app/shared/services/random.service';
import { RandomizeService } from '../randomize.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  playerMap: Map<number, Player> = new Map<number, Player>();
  IconSize = IconSize;

  constructor(
    public router: Router,
    public randomizeService: RandomizeService,
    public playerSelectService: PlayerSelectService,
    public randomService: RandomService
  ) { }

  ngOnInit(): void {
    if (this.randomizeService.selectedTeamOption == this.randomizeService.freeForAll) {
      this.setFreeForAllPlayerOrder();
    } else {
      this.setTeamsAndTeamOrder();
    }
  }

  private setFreeForAllPlayerOrder() {
    for (let i = 0; i < this.randomizeService.numberOfPlayers; i++) {
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
    for (let i = 0; i < this.randomizeService.numberOfPlayers; i++) {
      // Randomly select an icon for this player number.
      const icon = this.randomService.getRandomEntryFromArray(this.playerSelectService.selectedIcons);
      
      // Add the new player to the player map
      this.playerMap.set(i + 1, new Player(i + 1, icon, currentTeamNumber));
      
      // Delete the icon that was used from the available icons
      this.randomService.deleteFromArray(this.playerSelectService.selectedIcons, icon);

      // Increment the team number so the next player is assigned to the next team;
      currentTeamNumber ++;

      if (currentTeamNumber > this.randomizeService.selectedTeamOption.numberOfTeams) {
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

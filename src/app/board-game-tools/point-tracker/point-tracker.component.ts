import { Component, OnInit } from '@angular/core';
import { PlayerIcons } from 'src/app/shared/components/player-icon/player-icon.component';
import { RandomService } from 'src/app/shared/services/random.service';

@Component({
  selector: 'app-point-tracker',
  templateUrl: './point-tracker.component.html',
  styleUrls: ['./point-tracker.component.scss']
})
export class PointTrackerComponent implements OnInit {
  PlayerIcons = PlayerIcons; // Make PlayerIcons available to template
  players: Array<Player> = new Array<Player>(
    {name: "Player/Team 1", icon: "hammer", points: 0, color: "#457274" },
    {name: "Player/Team 2", icon: "tree", points: 0, color: "#457274" },
  )
  playerToEdit: Player = this.players[0];
  iconValuesArray: Array<String> = Object.values(PlayerIcons) as Array<String>;

  constructor(private randomService: RandomService) {

  }

  ngOnInit(): void {
    this.players.forEach(player => {
      player.icon = this.randomService.getRandomEntryFromArray(this.iconValuesArray);
    });
  }

  public addNewPlayer() {
    this.players.push({
      name: `Player/Team ${(this.players.length + 1).toString()}`,
      icon: this.randomService.getRandomEntryFromArray(this.iconValuesArray),
      points: 0,
      color: "#457274"
    })
  }

  public resetAllPoints() {
    this.players.forEach(player => {
      player.points = 0;
    })
  }

  public adjustPlayerPoints(player: Player, amount: number) {
    player.points = player.points + amount;
  }

  public displayPlayers() {
    console.log("Players: ", this.players);
  }
}

interface Player {
  name: string;
  icon: string;
  points: number;
  color: string;
}
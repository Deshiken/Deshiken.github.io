import { Component } from '@angular/core';

@Component({
  selector: 'app-point-tracker',
  templateUrl: './point-tracker.component.html',
  styleUrls: ['./point-tracker.component.scss']
})
export class PointTrackerComponent {
  players: Array<Player> = new Array<Player>(
    {name: "Player/Team 1", icon: "hammer", points: 0},
    {name: "Player/Team 2", icon: "tree", points: 0},
  )

  public addNewPlayer() {
    this.players.push({
      name: `Player/Team ${(this.players.length + 1).toString()}`,
      icon: "hammer",
      points: 0
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

}

interface Player {
  name: string;
  icon: string;
  points: number;
}
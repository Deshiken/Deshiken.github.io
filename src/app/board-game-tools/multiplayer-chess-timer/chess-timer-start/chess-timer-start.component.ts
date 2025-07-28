import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerIcons } from 'src/app/shared/components/player-icon/player-icon.component';
import { RandomService } from 'src/app/shared/services/random.service';
import { ChessTimerService, PlayerTimer } from '../chess-timer.service';

@Component({
  selector: 'app-chess-timer-start',
  templateUrl: './chess-timer-start.component.html',
  styleUrls: ['./chess-timer-start.component.scss']
})
export class ChessTimerStartComponent {
  iconValuesArray: Array<String> = Object.values(PlayerIcons) as Array<String>;

  constructor(
    public chessTimerService: ChessTimerService,
    public randomService: RandomService,
    public router: Router,
  ){}

  next() {
    //Remove any old player timers
    this.chessTimerService.playerTimers = new Array<PlayerTimer>();
    
    //Initialize the array of player timers.
    for (let i = 0; i < this.chessTimerService.numberOfPlayers; i++) {
      console.log('Creating player: ', i);
      this.chessTimerService.playerTimers.push(
        {
          name: `Player ${i+1}`,
          color: this.getRandomDarkColor(),
          timeRemaining: this.chessTimerService.minutesPerPlayer * 60,
          icon: this.randomService.getRandomEntryFromArray(this.iconValuesArray),
          numberOfTurnsTaken: 0,
        }
      )
      console.log('Ending player timers: ', this.chessTimerService.playerTimers);
      this.router.navigate(['/tools/chess-clock'])
    }
  }

  public getRandomDarkColor() {
    const r = Math.floor(Math.random() * 151); // 0-150
    const g = Math.floor(Math.random() * 151); // 0-150
    const b = Math.floor(Math.random() * 151); // 0-150
  
    // Convert to hex and pad with leading zeros if necessary
    const toHex = (c: number) => {
      const hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
  
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

}

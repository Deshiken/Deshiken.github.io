import { Component, OnInit } from '@angular/core';
import {CdkDrag, CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { HeadingWithBackComponent } from 'src/app/shared/components/heading-with-back/heading-with-back.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChessTimerService, PlayerTimer } from '../chess-timer.service';
import { CommonModule } from '@angular/common';
import { PlayerIcons } from 'src/app/shared/components/player-icon/player-icon.component';
import { RandomService } from 'src/app/shared/services/random.service';

@Component({
  selector: 'app-multiplayer-chess-timer',
  templateUrl: './multiplayer-chess-timer.component.html',
  styleUrls: ['./multiplayer-chess-timer.component.scss'],
  // standalone: true,
  // imports: [CdkDrag, SharedModule, CommonModule]
})
export class MultiplayerChessTimerComponent {
  currentPlayerIndex: number = 0;
  interval: number = 0;   
  playerTimerToEdit: PlayerTimer = this.chessTimerService.playerTimers[0];
  PlayerIcons = PlayerIcons; // Make PlayerIcons available to template

  initialSetup = true;
  roundEnd = false;
  timerIsPaused = false;

  constructor(
    public chessTimerService: ChessTimerService,
    public randomService: RandomService,  
  ) { }


  drop(event: CdkDragDrop<string[], string, any>) {
    console.log(event);
    moveItemInArray(this.chessTimerService.playerTimers, event.previousIndex, event.currentIndex);
  }

  start() {
    this.roundEnd = false;

    //Initial setup is complete.
    this.initialSetup = false;

    //Start with the first player of the player array.
    this.currentPlayerIndex = 0;    
    this.timerStart(this.chessTimerService.playerTimers[0]);
  }

  next() {
    this.timerIsPaused = false;
    // If stopping for additional round setup and all players have played a turn.
    if (this.chessTimerService.playerOrderChange 
        && this.currentPlayerIndex + 1 == this.chessTimerService.playerTimers.length
        && this.chessTimerService.playerTimers[this.currentPlayerIndex].numberOfTurnsTaken == this.chessTimerService.numberOfTurnsPerRound) {
      this.pause();
      this.roundEnd = true;
    } else { // If not stopping between rounds always go to the next player.
      this.startNextPlayer();
    }
  }

  startNextPlayer() {
    // If we have not gone through all the players, go to the next player
    if (this.currentPlayerIndex + 1 < this.chessTimerService.playerTimers.length) {
      this.currentPlayerIndex ++;
      this.chessTimerService.playerTimers[this.currentPlayerIndex].numberOfTurnsTaken ++;
      this.timerStart(this.chessTimerService.playerTimers[this.currentPlayerIndex])
    } else { //Else start back at player 1
      this.currentPlayerIndex = 0;
      this.timerStart(this.chessTimerService.playerTimers[this.currentPlayerIndex])
    }
  }

  pause() {
    this.timerIsPaused = true;

    //Stop the current interval (timer);
    window.clearInterval(this.interval);
  }

  resume() {
    this.timerIsPaused = false;
    this.timerStart(this.chessTimerService.playerTimers[this.currentPlayerIndex])
  }

  timerStart(playerTimer: PlayerTimer) {
    console.log('start timer for player: ', playerTimer);

    // end any existing timers from continuing to count down
    window.clearInterval(this.interval);

    // Start an interval that updates every 1/10th a second
    this.interval = window.setInterval(() => {
      playerTimer.timeRemaining --;
    }, 100);
  }
}

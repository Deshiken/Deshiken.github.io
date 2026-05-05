import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { PlayerIcons } from 'src/app/shared/components/player-icon/player-icon.component';
import { RandomService } from 'src/app/shared/services/random.service';
import { ChessTimerService, PlayerAudioSource, PlayerTimer } from '../chess-timer.service';

@Component({
  selector: 'app-multiplayer-chess-timer',
  templateUrl: './multiplayer-chess-timer.component.html',
  styleUrls: ['./multiplayer-chess-timer.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ height: 0, opacity: 0, overflow: 'hidden' }),
        animate('300ms ease-out', style({ height: '*', opacity: 1, overflow: 'hidden' }))
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        animate('300ms ease-in', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class MultiplayerChessTimerComponent {
  public chessTimerService = inject(ChessTimerService);
  public randomService = inject(RandomService);

  currentPlayerIndex: number = 0;
  interval: number = 0;
  playerTimerToEdit: PlayerTimer = this.chessTimerService.playerTimers[0];
  PlayerIcons = PlayerIcons; // Make PlayerIcons available to template
  PlayerAudioSource = PlayerAudioSource; // Make PlayerAudioSource available to template
  audio = new Audio();

  initialSetup = true;
  roundEnd = false;
  timerIsPaused = false;

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

    const isLastPlayer = this.currentPlayerIndex === this.chessTimerService.playerTimers.length - 1;
    const currentPlayer = this.chessTimerService.playerTimers[this.currentPlayerIndex];
    const completedRound = currentPlayer.numberOfTurnsTaken === this.chessTimerService.numberOfTurnsPerRound;
    const needsRoundEndActions = this.chessTimerService.resetPlayerTimeEachRound || this.chessTimerService.playerOrderChange;

    if (isLastPlayer && completedRound && needsRoundEndActions) {
      this.handleRoundEnd();
      return;
    }
    
    this.startNextPlayer();
  }

  private handleRoundEnd() {
    if (this.chessTimerService.resetPlayerTimeEachRound) {
      this.resetPlayersForNewRound();

      // Start the next player unless the timers will be paused for round end setup
      if (!this.chessTimerService.playerOrderChange) {
        this.startNextPlayer();
      }

    }

    if (this.chessTimerService.playerOrderChange) {
      this.resetTurnsTaken();
      this.pause();
      this.roundEnd = true;
    }
  }

  private resetPlayersForNewRound() {
    this.chessTimerService.playerTimers.forEach(playerTimer => {
      playerTimer.timeRemaining = this.chessTimerService.minutesPerPlayer * 600;
      playerTimer.numberOfTurnsTaken = 0;
    });
  }

  private resetTurnsTaken() {
    this.chessTimerService.playerTimers.forEach(playerTimer => {
      playerTimer.numberOfTurnsTaken = 0;
    });
  }

  startNextPlayer() {
    // If we have not gone through all the players, go to the next player
    if (this.currentPlayerIndex + 1 < this.chessTimerService.playerTimers.length) {
      this.currentPlayerIndex ++;
      this.chessTimerService.playerTimers[this.currentPlayerIndex].numberOfTurnsTaken ++;
      this.timerStart(this.chessTimerService.playerTimers[this.currentPlayerIndex])
    } else { // Else start back at player 1
      this.currentPlayerIndex = 0;
      this.timerStart(this.chessTimerService.playerTimers[this.currentPlayerIndex])
    }
  }

  pause() {
    this.timerIsPaused = true;

    // Stop the current interval (timer);
    window.clearInterval(this.interval);
  }

  resume() {
    this.timerIsPaused = false;
    this.timerStart(this.chessTimerService.playerTimers[this.currentPlayerIndex])
  }

  timerStart(playerTimer: PlayerTimer) {
    console.log('start timer for player: ', playerTimer);

    // End any existing timers from continuing to count down
    window.clearInterval(this.interval);

    // If the player has any time left, Start an interval that updates every 1/10th a second
    this.interval = window.setInterval(() => {
      if (playerTimer.timeRemaining > 0) {
        playerTimer.timeRemaining --;
      }
    }, 100);

    if (playerTimer.enableBackgroundMusic) {
      this.audio.src = playerTimer.chosenBackgroundMusic;
      this.audio.loop = true;
      this.audio.load();
      this.audio.play();
    }
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChessTimerService {
  public numberOfPlayers = 4;
  public minutesPerPlayer = 10;
  public allowPause = true;
  public playerOrderChange = false;
  public numberOfTurnsPerRound = 2;

  public playerTimers: Array<PlayerTimer> = new Array<PlayerTimer>();

  constructor() { }
}

export interface PlayerTimer {
  name: string;
  icon: string;
  timeRemaining: number;
  color: string;
  numberOfTurnsTaken: 0
}
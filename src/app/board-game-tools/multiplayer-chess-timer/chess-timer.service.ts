import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChessTimerService {
  public numberOfPlayers = 4;
  public minutesPerPlayer = 2;
  public allowPause = true;
  public playerOrderChange = false;
  public numberOfTurnsPerRound = 2;
  public resetPlayerTimeEachRound = false;

  public playerTimers: Array<PlayerTimer> = new Array<PlayerTimer>();

  constructor() { }
}

export interface PlayerTimer {
  name: string;
  icon: string;
  timeRemaining: number;
  color: string;
  numberOfTurnsTaken: number;
  enableBackgroundMusic: boolean;
  chosenBackgroundMusic: PlayerAudioSource;
}

export enum PlayerAudioSource {
  ClassicAlarm = '../../assets/audio/classic-alarm.wav',
  BattleshipAlarm = '../../assets/audio/battleship-alarm.wav',
  DigitalRingAlarm = '../../assets/audio/alarm-tone.wav',
  DigitalClockAlarm = '../../assets/audio/digital-clock-alarm.wav',
}
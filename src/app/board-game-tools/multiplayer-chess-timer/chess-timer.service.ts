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
  public enableBackgroundMusicForAllPlayers = false;

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
  BloodyTears = '.../../assets/audio/turn_background_music/Bloody-Tears.mp3',
  BossFight = '../../assets/audio/turn_background_music/Boss-Fight.mp3',
  DanceOfFlame = '../../assets/audio/turn_background_music/Dance-of-Flame.mp3',
  EnemyAdvance = '../../assets/audio/turn_background_music/Enemy-Advance.mp3',
  Guile = '../../assets/audio/turn_background_music/Guile.mp3',
  Ken = '../../assets/audio/turn_background_music/Ken.mp3',
  Ryu = '../../assets/audio/turn_background_music/Ryu.mp3',
  MysticCave = '../../assets/audio/turn_background_music/Mystic-Cave.mp3',
  RavagedVillage = '../../assets/audio/turn_background_music/Ravaged-Village.mp3',
  TurtleVillage = '../../assets/audio/turn_background_music/Turtle-Village.mp3',
  Warsong = '../../assets/audio/turn_background_music/Warsong.mp3',
}
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-timer',
  templateUrl: './action-timer.component.html',
  styleUrls: ['./action-timer.component.scss']
})
export class ActionTimerComponent implements OnInit, OnDestroy {

  AudioSource = AudioSource;

  turnActionTime: number = 45;      
  combatSpellTime: number = 30;      
  combatTacticTime: number = 60;
  
  currentTimer: number = 0
  initialTimer: number = 0
  interval: number = 0;   
  
  audio = new Audio();
  sampleAudioPlayer = new Audio();
  sampleAudioTimeout: number = 0;

  showAudioOptions = false;
  showTimeNameOptions = false;
  showTimeOptions = false;

  timer1Name:string = 'Timer One';
  timer2Name:string = 'Timer Two';
  timer3Name:string = 'Timer Three';

  constructor() { }

  ngOnInit(): void {
    this.audio.src = AudioSource.ClassicAlarm;
    this.audio.loop = true;
    this.audio.load();
  }

  ngOnDestroy(): void {
    //Remove any audio timers on destruction
    this.audio.pause();
    window.clearInterval(this.interval);
  }

  setAudioSource(audioSource: AudioSource) {
    this.audio.src = audioSource;
    this.audio.loop = true;
    this.audio.load();
  }

  playSample(audioSource: AudioSource) {
    // pause any playing sampleAudio and remove any currently running sampleAudioTimeouts
    this.sampleAudioPlayer.pause();
    clearTimeout(this.sampleAudioTimeout);

    // set the sampleAudioPlayer data
    this.sampleAudioPlayer.src = audioSource;
    this.sampleAudioPlayer.loop = true;
    this.sampleAudioPlayer.load();
    this.sampleAudioPlayer.play();
    
    // pause the sampleAudioPlayer after 2 seconds of playing
    this.sampleAudioTimeout = window.setTimeout(() => {
      this.sampleAudioPlayer.pause();
    }, 2000)
  }

  startTimer(timerType: number) {
    // stop any currently playing audio
    this.audio.pause();
    
    // end any existing timers from continuing to count down
    window.clearInterval(this.interval);

    this.currentTimer = timerType
    this.initialTimer = timerType
    
    this.interval = window.setInterval(() => {this.currentTimer > 0 ? this.currentTimer -- : this.timesUp()} , 1000);
  }

  timesUp() {
    window.clearInterval(this.interval);
    this.playAudio();
  }

  playAudio() {
    this.audio.play();

    //play alarm sound for 5 seconds and pause.
    window.setTimeout(() => {
      this.audio.pause();
    }, 5000);
  }

  getProgressPercentage(): number {
    if (this.initialTimer === 0) return 100;
    return (this.currentTimer / this.initialTimer) * 100;
  }
}

export enum AudioSource {
  ClassicAlarm = '../../assets/audio/classic-alarm.wav',
  BattleshipAlarm = '../../assets/audio/battleship-alarm.wav',
  DigitalRingAlarm = '../../assets/audio/alarm-tone.wav',
  DigitalClockAlarm = '../../assets/audio/digital-clock-alarm.wav',
}


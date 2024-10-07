import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import DiceBox from '@3d-dice/dice-box'

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {

  // @ViewChild('diceContainer', { static: true }) diceContainer!: ElementRef;

  ngOnInit(): void {
    const diceBox = new DiceBox({
      assetPath: '/assets/dice-box/',
      scale: 7,
      container: '#dice-container',
    });

    diceBox.init().then(() => {
      console.log('dice box init')
      // let element: HTMLCanvasElement = document.getElementsByClassName('dice-box-canvas')[0] as HTMLCanvasElement;
      // element.classList.add('dice-box-canvas-size');
      // element.style.height = '100%'
      
      diceBox.roll('2d20')
    })


  }
}

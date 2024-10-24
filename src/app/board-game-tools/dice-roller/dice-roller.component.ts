import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import DiceBox from '@3d-dice/dice-box'

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {
  diceBox: any;
  DiceType = DiceType;
  diceToRoll: Array<DiceGroup> = [
    {numberOfDice: 0, diceType: DiceType.D4},
    {numberOfDice: 2, diceType: DiceType.D6},
    {numberOfDice: 0, diceType: DiceType.D8},
    {numberOfDice: 0, diceType: DiceType.D10},
    {numberOfDice: 2, diceType: DiceType.D12},
    {numberOfDice: 1, diceType: DiceType.D20}
  ]
  
  ngOnInit(): void {
    this.diceBox = new DiceBox({
      assetPath: '/assets/dice-box/',
      scale: 5,
      container: '#dice-container',
    });

    this.diceBox.init()
  }

  rollDice(): void {
    this.diceBox.roll(this.diceGroupToStringArray()).then((results: any) => {
      console.log('roll results:', results);
    });
  }

  diceGroupToStringArray(): Array<string> {
    let diceToRollArray = new Array<string>();
    this.diceToRoll.forEach((diceGroup: DiceGroup) => {
      if (diceGroup.numberOfDice > 0) {
        diceToRollArray.push(diceGroup.numberOfDice.toString() + DiceType[diceGroup.diceType as keyof typeof DiceType].toLowerCase() )
      }
    })
    console.log('ending dice to roll array: ', diceToRollArray);
    return diceToRollArray;
  }

  increaseDiceGroupeCount(diceGroup: DiceGroup) {
    diceGroup.numberOfDice ++;
  }
  
  decreaseDiceGroupeCount(diceGroup: DiceGroup) {
    if (diceGroup.numberOfDice > 0) {
      diceGroup.numberOfDice --;
    }
  }

  resetDiceGroups() {
    this.diceToRoll.forEach((diceGroup: DiceGroup)  => {
      diceGroup.numberOfDice = 0;
    });
  }

}

interface DiceGroup {
  numberOfDice: number,
  diceType: DiceType
}

enum DiceType {
  D4 = 'D4',
  D6 = 'D6',
  D8 = 'D8',
  D10 = 'D10',
  D12 = 'D12',
  D20 = 'D20', 
}

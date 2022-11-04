import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators'
import { FadeInOutAnimation } from 'src/app/shared/animations/fadeInOutAnimation';
import { RandomService } from 'src/app/shared/services/random.service';

@Component({
  selector: 'app-mercenary-picker',
  templateUrl: './mercenary-picker.component.html',
  styleUrls: ['./mercenary-picker.component.scss'],
  animations: [
    FadeInOutAnimation
  ]
})

export class MercenaryPickerComponent implements OnInit {

  numberOfPlayers: number = 4;
  
  useMercPack1: boolean = true;
  useMercPack2: boolean = false;

  packOneMercenaries: Array<string> = ['Druid','Barbarian','Burrowing Wurm','Thief','Guardian',
    'Cannon Tower','Balista','Harpy','Archmage','Merfolk','Air Ship', 'Necromancer', 'Wind Elemental'];
  packTwoMercenaries: Array<string> = ['tes1', 'tes2', 'tes3', 'tes4', 'tes5', 'tes6'];
  generatedMercenaries: Array<string> = new Array<string>();
  
  constructor(private randomService: RandomService) { }

  ngOnInit(): void {
  }

  generateMercenaries() {
    // Reset the list of selected mercenaries
    this.generatedMercenaries = new Array<string>();

    // Build the list of mercenaries to randomly pick from;
    let availableMercenaries = this.buildAvailableMercenaries();
    
    //Create an objservable that emits initially and every 300ms. Take the number of emits equal to the number of players.
    const pickNumber = timer(0,300)
      .pipe(
        take(this.numberOfPlayers)
      )

    // Subscribe to the observable,
    pickNumber.subscribe(() => {
      let randomMerc = this.randomService.getRandomEntryFromArray(availableMercenaries);
      console.log('adding ', randomMerc);
      this.generatedMercenaries.push(randomMerc);
      this.randomService.deleteFromArray(availableMercenaries,randomMerc);
    });
  }

  buildAvailableMercenaries(): Array<string> {
    let availableMercs = new Array<string>();
    if (this.useMercPack1) {
      availableMercs = availableMercs.concat(...this.packOneMercenaries);
    }
    if (this.useMercPack2) {
      availableMercs = availableMercs.concat(...this.packTwoMercenaries);
    }
    return availableMercs;
  }

}

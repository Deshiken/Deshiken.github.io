import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RandomService } from 'src/app/shared/services/random.service';
import { TanaresHero, TanaresHeroClass, tanaresHeroes, tanaresHeroicActions, TanaresRelic, TanaresRelicArray, tanaresRelics } from '../../tanares-data';
import { TanaresDraftService } from '../tanares-draft-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tanares-draft-start',
  standalone: true,
  imports: [CommonModule, SharedModule, FormsModule],
  templateUrl: './tanares-draft-start.component.html',
  styleUrls: ['./tanares-draft-start.component.scss']
})

export class TanaresDraftStartComponent {

  constructor(
    public utils: RandomService, 
    public tanaresDraftService: TanaresDraftService,
    private router: Router,
  ) { 
    // Reset draft service variables
    this.tanaresDraftService.chosenTanaresHeroes = new Array<TanaresHero>();
    this.tanaresDraftService.chosenTanaresRelics = new Array<TanaresRelic>();
    this.tanaresDraftService.chosenTanaresHeroicActions = new Array<string>();
  }

  numberOfHeroesPerTeam = 4;
  numberOfHeroesOfEachClass = 1;
  numberOfHeroicActions = 4;
  draftRelics = true;
  draftHeroicActions = true;

  availableTanaresHeroes: Map<TanaresHeroClass, Array<TanaresHero>> = new Map(tanaresHeroes);
  // availableTanaresRelics: TanaresRelicArray = {...tanaresRelics}
  availableTanaresRelics: TanaresRelicArray = JSON.parse(JSON.stringify(tanaresRelics));
  availableTanaresHeroicActions: Array<string> = [...tanaresHeroicActions]

  public next() {
    console.log('available heroes:', this.availableTanaresHeroes);
    console.log('available relics:', this.availableTanaresRelics);
    console.log('available heroic actions:', this.availableTanaresHeroicActions);


    this.getRandomHeroes();
    if (this.draftRelics) {
      this.getRandomRelics()
    }
    if (this.draftHeroicActions) {
      this.getRandomHeroicActions()
    }

    this.router.navigate(['/tanares/draft-results'])
  }

  getRandomHeroes() {
    for (let i = 0; i < this.numberOfHeroesOfEachClass; i++) {

      for (const [key, value] of this.availableTanaresHeroes) {
        let randomHero: TanaresHero = this.utils.getRandomEntryFromArray(value);
        this.tanaresDraftService.chosenTanaresHeroes.push(randomHero);
        this.utils.deleteFromArray(value, randomHero);
      }
    }

    console.log('chosen tanares heroes: ', this.tanaresDraftService.chosenTanaresHeroes);
  }

  getRandomRelics() {
    // Draft 2 items of each level
    for (let i = 0; i < 2; i++) {
      let randomRelic: TanaresRelic = this.utils.getRandomEntryFromArray(this.availableTanaresRelics.level1);
      this.tanaresDraftService.chosenTanaresRelics.push(randomRelic);
      this.utils.deleteFromArray(this.availableTanaresRelics.level1, randomRelic);
      
      randomRelic = this.utils.getRandomEntryFromArray(this.availableTanaresRelics.level2);
      this.tanaresDraftService.chosenTanaresRelics.push(randomRelic);
      this.utils.deleteFromArray(this.availableTanaresRelics.level2, randomRelic);
      
      randomRelic = this.utils.getRandomEntryFromArray(this.availableTanaresRelics.level3);
      this.tanaresDraftService.chosenTanaresRelics.push(randomRelic);
      this.utils.deleteFromArray(this.availableTanaresRelics.level3, randomRelic);
    }

    console.log("ending choses tanares relics: ", this.tanaresDraftService.chosenTanaresRelics);
  }

  getRandomHeroicActions() {
    // Draft 4 heroic actions
    for (let i = 0; i < this.numberOfHeroicActions; i++) {
      let randomHeroicAction: string = this.utils.getRandomEntryFromArray(this.availableTanaresHeroicActions);
      this.tanaresDraftService.chosenTanaresHeroicActions.push(randomHeroicAction);
      this.utils.deleteFromArray(this.availableTanaresHeroicActions, randomHeroicAction);
    }
    console.log("ending choses tanares heroic actions: ", this.tanaresDraftService.chosenTanaresHeroicActions);
  }

}

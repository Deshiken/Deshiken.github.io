import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TinyEpicDungeonsItemSet, itemSets } from './tiny-epic-dungeons-data';
import { RandomService } from 'src/app/shared/services/random.service';

@Component({
  selector: 'app-tiny-epic-dungeons-home',
  imports: [SharedModule,FormsModule,],
  templateUrl: './tiny-epic-dungeons-home.component.html',
  styleUrl: './tiny-epic-dungeons-home.component.scss',
})
export class TinyEpicDungeonsHomeComponent {
  randomService = inject(RandomService);

  showChooseItemSetsOptions: boolean = false;
  showChooseHeroesOptions: boolean = false;
  itemSetNumber: number = 3;
  notEnoughItemSets: boolean = false;

  setsToInclude = {
    baseGame: true,
    stories: true,
    potions: true,
    echoesOfAughmoore: true,
    phantomVoyage: true,
  };

  chosenItemSets: Array<TinyEpicDungeonsItemSet> = [];

  chooseItemSets() {
    let availableItemSets: Array<TinyEpicDungeonsItemSet> = [...itemSets];
    console.log("Available Item Sets: ", availableItemSets);
    this.chosenItemSets = [];

    if (!this.setsToInclude.baseGame) {
      availableItemSets = availableItemSets.filter((set) => set.set !== "Base");
    }
    if (!this.setsToInclude.stories) {
      availableItemSets = availableItemSets.filter((set) => set.set !== "Stories");
    }
    if (!this.setsToInclude.potions) {
      availableItemSets = availableItemSets.filter((set) => set.set !== "Potions and Perils");
    }
    if (!this.setsToInclude.echoesOfAughmoore) {
      availableItemSets = availableItemSets.filter((set) => set.set !== "Echoes of Aughmoore");
    }
    if (!this.setsToInclude.phantomVoyage) {
      availableItemSets = availableItemSets.filter((set) => set.set !== "Phantom Voyage");
    } 

    this.notEnoughItemSets = availableItemSets.length < this.itemSetNumber;

    if (!this.notEnoughItemSets) {
      for (let i = this.itemSetNumber; i > 0; i--) {
        const randomItemSet = this.randomService.getRandomEntryFromArray(availableItemSets);
        console.log("Random Item Set: ", randomItemSet);
        this.chosenItemSets.push(randomItemSet);
        this.randomService.deleteFromArray(availableItemSets, randomItemSet);
      }
    }
  }
  
}

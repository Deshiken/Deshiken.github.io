import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { FadeInOutAnimation } from 'src/app/shared/animations/fadeInOutAnimation';
import { RandomService } from 'src/app/shared/services/random.service';

@Component({
  selector: 'app-tile-randomizer',
  templateUrl: './tile-randomizer.component.html',
  styleUrls: ['./tile-randomizer.component.scss'],
  animations: [
    FadeInOutAnimation
  ]
})
export class TileRandomizerComponent implements OnInit {
  useExpansionTiles: boolean = false;
  
  generatedTiles: Array<string> = new Array<string>();

  standardTiles: Array<string> = new Array<string>('A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12');
  expansionTiles: Array<string> = new Array<string>('E1','E2','E3','E4');

  constructor(
    public randomService: RandomService
  ) { }

  ngOnInit(): void {
  }

  generateMapTiles() {
    this.generatedTiles = new Array<string>();
    let availableTiles: Array<string> = new Array<string>(...this.standardTiles);
    
    if (this.useExpansionTiles) {
      availableTiles = availableTiles.concat(...this.expansionTiles)
    }

    //Create an objservable that emits initially and every 300ms. Take the number of emits equal to the number of players.
    const pickNumber = timer(0,200)
    .pipe(
      take(12)
    )

    // Subscribe to the observable,
    pickNumber.subscribe(() => {
      let randomTile = this.randomService.getRandomEntryFromArray(availableTiles);
      console.log('adding ', randomTile);
      this.generatedTiles.push(randomTile);
      this.randomService.deleteFromArray(availableTiles,randomTile);
    });

  }

}

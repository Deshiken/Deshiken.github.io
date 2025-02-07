import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { FadeInOutAnimation } from 'src/app/shared/animations/fadeInOutAnimation';
import { RandomService } from 'src/app/shared/services/random.service';

@Component({
  selector: 'app-upgrade-tiles',
  templateUrl: './upgrade-tiles.component.html',
  styleUrls: ['./upgrade-tiles.component.scss'],
  animations: [
    FadeInOutAnimation
  ]
})
export class UpgradeTilesComponent implements OnInit {
  tooFewTileSetsSelected = false;
  numberOfPlayers: number = 4;
  numberOfTileSets: number = 3;
  KemetTile = KemetTile;
  availableTiles: Array<KemetTile> = new Array<KemetTile>(KemetTile.Diamond,KemetTile.Ruby,KemetTile.Saphire,KemetTile.Onyx,KemetTile.Amber,KemetTile.Amethyst);
  generatedTiles: Array<KemetTile> = new Array<KemetTile>();

  constructor(
    public randomService: RandomService
  ) { }

  ngOnInit(): void {
  }

  public tileChange(event: any, tile: KemetTile) {
    if (event?.target?.checked) {
      this.availableTiles.push(tile);
    } else {
      this.randomService.deleteFromArray(this.availableTiles, tile);
    }
  }

  submit() {
    this.numberOfTileSets = this.getNumberOfTileSets()

    // The number of selected tile sets must be the same or more than numberOfTileSets
    if (this.availableTiles.length < this.numberOfTileSets) {
      this.tooFewTileSetsSelected = true;
    } else {
      this.generateRandomTileSelection(this.numberOfTileSets);
    }
  }
  
  generateRandomTileSelection(numberOfTileSets: number) {
    // Copy the available tiles so to an array that is safe to delete from.
    let availableTilesCopy: Array<KemetTile> = new Array<KemetTile>(...this.availableTiles);
  
    // Reset the list of selected tiles
    this.generatedTiles = new Array<KemetTile>();
  
    //Create an objservable that emits initially and every 300ms. Take the number of emits equal to the number of players.
    const pickNumber = timer(0,300)
      .pipe(
        take(numberOfTileSets)
      )
  
    // Subscribe to the observable,
    pickNumber.subscribe(() => {
      let randomTile = this.randomService.getRandomEntryFromArray(availableTilesCopy);
      this.generatedTiles.push(randomTile);
      this.randomService.deleteFromArray(availableTilesCopy,randomTile);
    });

  }

  getNumberOfTileSets():number {
    switch (this.numberOfPlayers) {
      case 2:
        return 2;
      case 3:
        return 3;
      case 4:
        return 3;
      case 5:
        return 4;
      default:
        return 3;
    }
  }
}

export enum KemetTile {
  Diamond = 'Diamond (White)',
  Saphire = 'Saphire (Blue)',
  Emerald = 'Emerald (Green)',
  Ruby = 'Ruby (Red)',
  Onyx = 'Onyx (Black)',
  Amber = 'Amber (Gold)',
  Amethyst = 'Amethyst (Purple)'
}

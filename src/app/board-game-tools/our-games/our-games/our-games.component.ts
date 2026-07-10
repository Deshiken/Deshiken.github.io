import { Component, OnInit } from '@angular/core';
import { Game, gameData } from './our-games-data';

@Component({
  selector: 'app-our-games',
  templateUrl: './our-games.component.html',
  styleUrls: ['./our-games.component.scss']
})

export class OurGamesComponent implements OnInit {
  gameData = gameData;
  sortOptions = SortOption;
  sortOption: SortOption = SortOption.Alphabetical;

  ngOnInit() {
    this.sortGameList(this.sortOption);
  }


  sortOptionChangeEvent(event: any) {
    console.log('Sort option changed to: ', event.target.value);
    this.sortGameList(event.target.value);
    this.sortOption = event.target.value;
  }

  sortGameList(sortOption: SortOption) {
    switch (sortOption) {
      case SortOption.Alphabetical:
        return this.gameData.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return this.gameData;
      // Add more cases for other sort options
    }   
  }
  
  removeGame(game: Game) {
    this.gameData = this.gameData.filter(g => g !== game);
  }
}

enum SortOption {
  Alphabetical = "Alphabetical",
  SpellCostHighest = "Spell Cost Highest",
  SpellCostLowest = "Spell Cost Lowest",
  PreparedSpells = "Prepared Spells",
  InstantSpells = "Instant Spells",
  CombatSpells = "Combat Spells",
}

import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { SharedModule } from "src/app/shared/shared.module";
import { Game, gameData, GameLength, GameType } from '../our-games/our-games/our-games-data';
import { RandomService } from 'src/app/shared/services/random.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { KeyValuePipe } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-random-game-picker',
  standalone: true,
  imports: [SharedModule, KeyValuePipe, FormsModule],
  templateUrl: './random-game-picker.component.html',
  styleUrl: './random-game-picker.component.scss'
})
export class RandomGamePickerComponent {
  public randomService = inject(RandomService);
  public modalService = inject(NgbModal);

  @ViewChild('randomGameModal') randomGameModal!: ElementRef;
  gameList: Array<Game> = gameData;
  GameLength = GameLength; // Expose the Enum to the template
  GameType = GameType; // Expose the Enum to the template
  randomGame: Game | undefined = undefined;

  filterOptions: {
    gameLength?: GameLength;
    gameType: GameType[];
    numberOfPlayers: {
      minimumNumberOfPlayers: number;
      maximumNumberOfPlayers: number;
    };
  } = {
    gameLength: undefined,
    gameType: [],
    numberOfPlayers: {
      minimumNumberOfPlayers: 1,
      maximumNumberOfPlayers: 10
    }
  }

  pickRandomGame() {
    if (this.gameList.length > 0) {
      this.randomGame = this.randomService.getRandomEntryFromArray(this.gameList);
    }
    console.log("Random game picked:", this.randomGame);
    // this.modalService.open('randomGameModal');
    this.modalService.open(this.randomGameModal, { centered: true });
  }

  filterByGameLength(event: any) {
    if (event.target.value) {
      console.log("Selected game length filter:", event.target.value);
      this.filterOptions.gameLength = event.target.value;

      this.applyAllFilters();
      // this.gameList = this.gameList.filter(game => {
      //   console.log("Filtering game:", game.name, "with length:", game.length);
      //   return game.length === event.target.value;
      // });
    }
  }

  addGameTypeFilter(event: any) {
    if (event.target.value) {
      this.filterOptions.gameType.push(event.target.value);
    }
    this.applyAllFilters();
    console.log("Selected game type filter:", event.target.value);
  }

  removeGameTypeFilter(gameTypeToRemove: GameType) {
    this.filterOptions.gameType = this.filterOptions.gameType.filter(type => type !== gameTypeToRemove);
    this.applyAllFilters();
    console.log("Removed game type filter:", gameTypeToRemove);
  }

  applyAllFilters() {
    // Reset the game list to the original data before applying filters
    this.gameList = gameData;

    console.log("Applying all filters:", this.filterOptions);
    this.gameList = gameData.filter(game => {
      console.log("Filtering game:", game.name, "with length:", game.length, "and styles:", game.gameStyles, "and player count:", game.playerCount);
      const matchesLength = this.filterOptions.gameLength ? game.length === this.filterOptions.gameLength : true;
      const matchesType = this.filterOptions.gameType.length > 0 ? this.filterOptions.gameType.some(type => game.gameStyles.includes(type)) : true;
      const matchesPlayerCount = game.playerCount.minimumNumberOfPlayers >= this.filterOptions.numberOfPlayers.minimumNumberOfPlayers && game.playerCount.maximumNumberOfPlayers <= this.filterOptions.numberOfPlayers.maximumNumberOfPlayers;
      return matchesLength && matchesType && matchesPlayerCount;
    });
  }
}

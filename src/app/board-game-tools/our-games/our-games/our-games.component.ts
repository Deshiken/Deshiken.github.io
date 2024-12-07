import { Component } from '@angular/core';
import { gameData } from './our-games-data';

@Component({
  selector: 'app-our-games',
  templateUrl: './our-games.component.html',
  styleUrls: ['./our-games.component.scss']
})
export class OurGamesComponent {
  gameData = gameData;
}

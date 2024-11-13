import { Component, OnInit } from '@angular/core';
import { UprisingMapName, UprisingMaps } from './map-data';

@Component({
  selector: 'app-maps-and-play-instructions',
  templateUrl: './maps-and-play-instructions.component.html',
  styleUrls: ['./maps-and-play-instructions.component.scss']
})
export class MapsAndPlayInstructionsComponent {
  public UprisingMapName = UprisingMapName;
  showTwoPlayerMaps: boolean = false;
  showThreePlayerMaps: boolean = false;
  showFourPlayerMaps: boolean = false;
  showFivePlayerMaps: boolean = false;

  twoPlayerMaps = Array.from(UprisingMaps.values()).filter(map => map.numberOfPlayers === 2)
  threePlayerMaps = Array.from(UprisingMaps.values()).filter(map => map.numberOfPlayers === 3)
  fourPlayerMaps = Array.from(UprisingMaps.values()).filter(map => map.numberOfPlayers === 4)
  fivePlayerMaps = Array.from(UprisingMaps.values()).filter(map => map.numberOfPlayers === 5)

  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { UprisingMapName } from './map-data';

@Component({
  selector: 'app-maps-and-play-instructions',
  templateUrl: './maps-and-play-instructions.component.html',
  styleUrls: ['./maps-and-play-instructions.component.scss']
})
export class MapsAndPlayInstructionsComponent implements OnInit {
  public UprisingMapName = UprisingMapName;
  showTwoPlayerMaps: boolean = false;
  showThreePlayerMaps: boolean = false;
  showFourPlayerMaps: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }
}

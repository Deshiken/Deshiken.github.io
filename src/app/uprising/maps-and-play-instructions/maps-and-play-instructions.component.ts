import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps-and-play-instructions',
  templateUrl: './maps-and-play-instructions.component.html',
  styleUrls: ['./maps-and-play-instructions.component.scss']
})
export class MapsAndPlayInstructionsComponent implements OnInit {

  showTwoPlayerMaps: boolean = false;
  showThreePlayerMaps: boolean = false;
  showFourPlayerMaps: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}

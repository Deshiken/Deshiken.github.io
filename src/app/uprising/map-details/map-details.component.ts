import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapData, UprisingMapName, UprisingMaps } from '../maps-and-play-instructions/map-data';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.scss']
})

export class MapDetailsComponent implements OnInit {
  id: string | null = '';
  uprisingMap: MapData | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.uprisingMap = UprisingMaps.get(this.id as UprisingMapName)
    } else {
      this.uprisingMap = UprisingMaps.get(UprisingMapName.TwoPlayerStandard)
    };
    console.log('map name', this.id);
    console.log('map', this.uprisingMap);
  }

}

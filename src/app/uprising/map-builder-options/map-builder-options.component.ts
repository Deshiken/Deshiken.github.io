import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapBuilderService, UprisingMapSize, UprisingMap } from '../map-builder.service';

@Component({
  selector: 'app-map-builder-options',
  templateUrl: './map-builder-options.component.html',
  styleUrls: ['./map-builder-options.component.scss']
})
export class MapBuilderOptionsComponent {
  public UprisingMapSize = UprisingMapSize;
  public selectedMap: UprisingMap | null = null;

  public newMapName: string = '';
  public newMapSize = UprisingMapSize.Medium;

  mapSizeOptions: Map<UprisingMapSize, string> = new Map([
    [UprisingMapSize.Small, 'Up to 2 tiles high by 3 tiles wide'],
    [UprisingMapSize.Medium, 'Up to 3 tiles high by 4 tiles wide'],
    [UprisingMapSize.Large, 'Up to 4 tiles high by 5 tiles wide'],
    [UprisingMapSize.Huge, 'Up to 5 tiles high by 6 tiles wide'],
  ])

  constructor(
    public mapBuilderService: MapBuilderService,
    private router: Router
  ){}
  
  startNewMap() {
    if (this.newMapName && this.newMapSize) {
      console.log('adding map to uprising maps', this.newMap());
      this.mapBuilderService.uprisingMaps.set(this.newMapName, this.newMap());
      this.router.navigate(['/uprising/map-builder', {'selected-map': this.newMapName}]);  
    }
  }

  private newMap():UprisingMap {
    return {mapName: this.newMapName, mapSize:this.newMapSize, mapHTML: new Array<string>(), description:''}
  }
  
  continueBuilding() {
    this.router.navigate(['/uprising/map-builder', {'selected-map': this.selectedMap?.mapName}]);
  }

}

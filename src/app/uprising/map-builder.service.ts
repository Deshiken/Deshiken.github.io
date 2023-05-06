import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapBuilderService {
  public uprisingMaps = new Map<string, UprisingMap>();
  public selectedMap: UprisingMap = {mapName: '', description: '', mapHTML: new Array<string>(), mapSize: UprisingMapSize.Medium}

  constructor() { 
    let uprisingMaps = window.localStorage.getItem('uprisingMaps');
    if (uprisingMaps) {
      this.uprisingMaps = new Map(JSON.parse(uprisingMaps));
    }
  }
}

export interface UprisingMap {
  mapName: string,
  mapHTML: Array<string>,
  description: string,
  mapSize: UprisingMapSize
}

export enum UprisingMapSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  Huge = 'Huge'
}


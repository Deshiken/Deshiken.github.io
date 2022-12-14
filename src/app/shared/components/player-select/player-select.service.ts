import { Injectable, Input } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlayerSelectService {
  /* Icons selected by the players to represent them */
  public selectedIcons: Array<string> = new Array<string>();


  constructor() { }
}

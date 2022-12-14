import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-icon',
  templateUrl: './player-icon.component.html',
  styleUrls: ['./player-icon.component.scss']
})
export class PlayerIconComponent implements OnInit {
  @Input() icon: string = '';
  @Input() size: IconSize = IconSize.Medium;
  @Input() style: string = 'medium';

  isFadeOut: boolean = false;
  
  public fadeOut() {
    this.isFadeOut = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

export enum IconSize {
  Smallest = 'smallest',
  Small    = 'small',
  Medium   = 'medium',
  Large    = 'large',
}

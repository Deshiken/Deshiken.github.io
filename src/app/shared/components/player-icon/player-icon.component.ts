import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-icon',
  templateUrl: './player-icon.component.html',
  styleUrls: ['./player-icon.component.scss']
})
export class PlayerIconComponent {
  @Input() icon: string = '';
  @Input() size: IconSize = IconSize.Medium;
  @Input() style: string = 'medium';

  isFadeOut: boolean = false;
  
  public fadeOut() {
    this.isFadeOut = true;
  }
  
}

export enum IconSize {
  Smallest = 'smallest',
  Small    = 'small',
  Medium   = 'medium',
  Large    = 'large',
}

export enum PlayerIcons {
  Tree = "bi-tree-fill",
  Fire = "bi-fire",
  Shield = "bi-shield-fill",
  Hammer = "bi-hammer",
  Bug = "bi-bug",
  Dice = "bi-dice-4-fill",
  Moon = "bi-moon-stars-fill",
  Cloud = "bi-cloud-lightning-rain-fill",
  Droplet = "bi-droplet-fill",
  Feather = "bi-feather"
}

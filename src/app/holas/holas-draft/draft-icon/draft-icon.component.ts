import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft-icon',
  templateUrl: './draft-icon.component.html',
  styleUrls: ['./draft-icon.component.scss'],
})
export class DraftIconComponent {

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

import { Component, Input, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HolasDraftService } from '../holas-draft.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-draft-icon',
  templateUrl: './draft-icon.component.html',
  styleUrls: ['./draft-icon.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('* => void')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class DraftIconComponent implements OnInit {

  @Input() icon: string = '';
  @Input() size: IconSize = IconSize.Medium;
  @Input() style: string = 'medium';

  isFadeOut: boolean = false;
  
  public fadeOut() {
    this.isFadeOut = true;
  }

  constructor(
  ) { }

  ngOnInit(): void {
  }

}

export enum IconSize {
  Smallest = 'smallest',
  Small    = 'small',
  Medium   = 'medium',
  Large    = 'large',
}

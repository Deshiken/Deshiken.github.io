import { animate, state, style, transition, trigger } from '@angular/animations';

export const FadeInOutAnimation =
  // the fade-in/fade-out animation.
  trigger('simpleFadeAnimation', [

    // the "in" style determines the "resting" state of the element when it is visible.
    state('in', style({opacity: 1})),

    // fade in when created. this could also be written as transition('void => *')
    transition(':enter', [
      style({opacity: 0}),
      animate(400 )
    ]),

    // fade out when destroyed. this could also be written as transition('* => void')
    transition(':leave',
      animate(400, style({opacity: 0})))
  ])
import { trigger, style, transition, animate } from '@angular/animations';

export const growHeightAnimation = trigger('growHeight', [
  transition(':enter', [
    style({ height: '0px', overflow: 'hidden' }),
    animate('300ms ease-in-out', style({ height: '*', overflow: 'visible' }))
  ]),
  transition(':leave', [
    animate('300ms ease-in-out', style({ height: '0px', overflow: 'hidden' }))
  ])
]);
import { trigger, transition, style, query, animateChild, group, animate } from "@angular/animations";

export const SlideInOutAnimation =
  trigger('slideInOutAnimation', [
    // Transition between any two states
    transition('* <=> *', [
      // Events to apply
      // Defined style and animation function to apply
      // Config object with optional set to true to handle when element not yet added to the DOM
      query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
      // group block executes in parallel
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.3s ease-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.3s ease-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true })
      ])
    ])
  ])






  /* Attempt 3 */
  //   transition(':enter', [
  //     style({transform: 'translateX(-100%)'}),
  //     animate('600ms ease-in', style({transform: 'translateX(0%)'}))
  //   ]),
  //   transition(':leave', [
  //     animate('400ms ease-in', style({transform: 'translateX(-100%)'}))
  //   ])
  
  
  
  /* Attempt 2 */
  // transition('home => holas', [
  // transition('* => isRight', [
  //   style({ position: 'relative' }),
  //   query(':enter, :leave', [
  //     style({
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%'
  //     })
  //   ]),
  //   query(':enter', [
  //     style({ left: '-100%' })
  //   ]),
  //   query(':leave', animateChild()),
  //   group([
  //     query(':leave', [
  //       animate('300ms ease-out', style({ left: '100%' }))
  //     ]),
  //     query(':enter', [
  //       animate('300ms ease-out', style({ left: '0%' }))
  //     ]),
  //   ]),
  // ]),
  // transition('* <=> *', [
  //   style({ position: 'relative' }),
  //   query(':enter, :leave', [
  //     style({
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%'
  //     })
  //   ]),
  //   query(':enter', [
  //     style({ left: '-100%' })
  //   ]),
  //   query(':leave', animateChild()),
  //   group([
  //     query(':leave', [
  //       animate('200ms ease-out', style({ left: '100%', opacity: 0 }))
  //     ]),
  //     query(':enter', [
  //       animate('300ms ease-out', style({ left: '0%' }))
  //     ]),
  //     query('@*', animateChild())
  //   ]),
  // ])




  /*          Attempt 1                  */
  // trigger('slideInOutAnimation', [
  //   transition('* => isLeft', slideTo('left') ),
  //   transition('* => isRight', slideTo('right') ),
  //   transition('isRight => *', slideTo('left') ),
  //   transition('isLeft => *', slideTo('right') )
  // ]);

  // function slideTo(direction: string) {
  //   const optional = { optional: true };
  //   return [
  //     query(':enter, :leave', [
  //       style({
  //         position: 'absolute',
  //         // top: 0,
  //         top: 56,
  //         [direction]: 0,
  //         width: '100%'
  //       })
  //     ], optional),
  //     query(':enter', [
  //       style({ [direction]: '-100%'})
  //     ], optional),
  //     group([
  //       query(':leave', [
  //         animate('600ms ease', style({ [direction]: '100%'}))
  //       ], optional),
  //       query(':enter', [
  //         animate('600ms ease', style({ [direction]: '0%'}))
  //       ], optional)
  //     ]),
      // Normalize the page style... Might not be necessary
  
      // Required only if you have child animations on the page
      // query(':leave', animateChild()),
      // query(':enter', animateChild()),
    // ];
  // }
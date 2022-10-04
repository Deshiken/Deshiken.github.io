import { Component } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, Router } from '@angular/router';
import { SlideInOutAnimation } from './shared/animations/slideInOutAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    SlideInOutAnimation
  ]
})
export class AppComponent {
  title = 'board-game-helper';
  
  constructor (
    public router: Router,
    private route: ActivatedRoute,
    private contexts: ChildrenOutletContexts
  ) { }

  /* Returns the animation property's value set in the data from a routing.module
      Ex: data{ animation: 'slideInOutAnimation'} */
  getRouteAnimationData() {
    const animation =  this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    return animation;
  }

}

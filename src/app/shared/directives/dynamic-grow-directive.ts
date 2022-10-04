import { Directive, Input, SimpleChanges, ElementRef, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appDynamicGrow]'
})
/**
 * Used to help animate elements that grow dynamically, ie if you have a list and add items directly to it. 
 * Once the animation has completed, the height of the element will be removed from the inline styling.
 * */
export class DynamicGrowDirective implements OnInit, OnChanges {

  /**
   * The primary animation input, on prevents any animation and off initiates the animation. 
   *  - Note turn on to load data, when data has been loaded successfully, turn off to initiate the animation.
   */
  // @Input('lockHeight') lockHeight: boolean = false;
  @Input('lockHeight') lockHeight: any;

  /**
   * Input to determine the length of the animation
   * @default animateTime To 200ms.
   */
  @Input('animateTime') animateTime: number = 200;

  /**Allows for the inital tick to draw elements if needed. */
  private initialTick: number = 10;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.overflow = 'auto';
    this.el.nativeElement.style.transition = `height ${this.animateTime}ms ease 0s`;
  }

  /**Opens the container if show is true, otherwise closes it */
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      const prevHeight = this.el.nativeElement.style.height;
      this.el.nativeElement.style.height = 'auto';
      const newHeight = this.el.nativeElement.scrollHeight + 'px';
      this.el.nativeElement.style.height = prevHeight;

      setTimeout(() => {
        this.el.nativeElement.style.height = newHeight;
      }, 50);
    }, 500);

  }
}

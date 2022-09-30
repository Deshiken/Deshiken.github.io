import {ElementRef, HostBinding, Component, Input, OnChanges} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'smooth-height',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: block;
      overflow: hidden;
    }
  `],
  animations: [
    trigger('grow', [
      transition('void <=> *', []),
      transition('* <=> *', [
        style({height: '{{startHeight}}px', opacity: 0}),
        animate('.5s ease'),
      ], {params: {startHeight: 0}})
    ])
  ]
})
export class SmoothHeightComponent implements OnChanges {
  @Input()
  trigger: any;

  startHeight: number;

  @HostBinding('@grow') grow: any;

  constructor(private element: ElementRef) {}  
              
  ngOnChanges(){
    console.log('smooth-height change')
    this.startHeight = this.element.nativeElement.clientHeight;

    this.grow = {
      value: this.trigger,
      params: {startHeight: this.startHeight}
    };
  }
}
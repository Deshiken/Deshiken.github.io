import { Component, OnInit } from '@angular/core';
// import * as interact from 'interactjs'
// import * as interact from '@interactjs/types/index';
import interact from 'interactjs';

@Component({
  selector: 'app-map-builder',
  templateUrl: './map-builder.component.html',
  styleUrls: ['./map-builder.component.scss']
})
export class MapBuilderComponent implements OnInit {

  public mapTiles = Array(1).fill(1); // [1,1]
  public mapTilesReverse = new Array<any>();
  public mapFlags: Array<string> = new Array<string>();
  public mapPorts: Array<string> = new Array<string>();
  public mapCapitols = new Array<any>();
  public mapMountains = new Array<any>();
  public mapWaterRegions = new Array<any>();

  ngOnInit(){
    interact('.draggable').draggable({
      // enable inertial throwing
      inertia: true,
      // keep the element within the area of it's parent
      // modifiers: [
      //   interact.modifiers.restrictRect({
      //     restriction: 'parent',
      //     endOnly: true
      //   })
      // ],
      // enable autoScroll
      autoScroll: true,

      listeners: {
        start (event) { 
          console.log(event.type, event.target)
        },
        move (event) {
          var target = event.target
          // keep the dragged position in the data-x/data-y attributes
          var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
          var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

          // translate the element
          target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

          // update the posiion attributes
          target.setAttribute('data-x', x)
          target.setAttribute('data-y', y)
        },
      }
    })
  }

}

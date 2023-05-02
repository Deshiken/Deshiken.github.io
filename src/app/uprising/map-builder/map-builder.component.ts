import { Component, OnInit } from '@angular/core';
// import * as interact from 'interactjs'
// import * as interact from '@interactjs/types/index';
import interact from 'interactjs';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-map-builder',
  templateUrl: './map-builder.component.html',
  styleUrls: ['./map-builder.component.scss']
})
export class MapBuilderComponent implements OnInit {

  public mapTiles = Array(1).fill(1); // [1,1]
  public mapTilesReverse = new Array<any>();
  public mapFlags: Array<string> = new Array<string>();
  public mapPortals: Array<string> = new Array<string>();
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

  public saveAsImage(){
    // html2canvas(document.getElementById("image-group")).then(function (canvas) {
      // document.body.appendChild(canvas)
      // var imgData = canvas.getContext("2d").getImageData(bounds.left, bounds.top, bounds.width, bounds.height);
      // ctx.putImageData(imgData, 0, 0);
    // })



    let imageGroup = document.getElementById('image-group');
    console.log('imageGroup', imageGroup)
    console.log('document body', document.body)
    
    // html2canvas(imageGroup).then(canvas => {
    //   document.body.appendChild(canvas);
    // });

    //@ts-expect-error
    html2canvas(imageGroup).then(canvas => {
      this.saveAs(canvas.toDataURL(), 'map.png');
    });
  }

  saveAs(uri: any, filename: any) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }
}

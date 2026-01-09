import { Component, OnInit } from '@angular/core';
import interact from 'interactjs';
import * as htmlToImage from 'html-to-image';
import { MapBuilderService, UprisingMap, UprisingMapSize } from '../map-builder.service';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-map-builder',
  templateUrl: './map-builder.component.html',
  styleUrls: ['./map-builder.component.scss']
})

export class MapBuilderComponent implements OnInit {

  public selectedMap: UprisingMap = {mapSize: UprisingMapSize.Medium, mapHTML: new Array<string>(), mapName: '', description: ''};
  public UprisingMapSize = UprisingMapSize;

  // Map Elements
  public mapTiles = new Array<any>(); // [1,1]
  public mapFlagsGreen: Array<any> = new Array<any>();
  public mapFlagsYellow: Array<any> = new Array<any>();
  public mapFlagsOrange: Array<any> = new Array<any>();
  public mapFlagsRed: Array<any> = new Array<any>();
  public mapPortalsBlue: Array<any> = new Array<any>();
  public mapPortalsPurple: Array<any> = new Array<any>();
  public mapPortalsTeal: Array<any> = new Array<any>();
  public mapCapitols = new Array<any>();
  public mapMountains = new Array<any>();
  public mapWaterRegions = new Array<any>();

  constructor(
    public mapBuilderService: MapBuilderService,
    private route: ActivatedRoute,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    this.loadMap();

    // enable draggables to be dropped into this
    interact('.dropzone').dropzone({
      // Require a .01% element overlap for a drop to be possible
      overlap: 0.01,

      // listen for drop related events:

      ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active')
      },
      ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
      },
      ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
      },
      ondrop: function (event) {
        // remove the dragged element from the dom
        event.relatedTarget.remove();
      },
      ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
      }
    })

    interact('.drag-drop').draggable({
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
    let imageGroup = document.getElementById('image-group');

    htmlToImage.toJpeg(imageGroup as HTMLElement)
      .then(function(dataUrl) {
        console.log('dataUrl', dataUrl)
        let link = document.createElement('a');
        link.download = 'map.png';
        link.href = dataUrl;
        link.click();
      })
  }

  /** Add each map piece to the dom by injecting the html into a div inside the map builder area */
  private setMapHTML(selectedMap: UprisingMap){
    let mapElements = document.getElementById('inner-div');
    if (selectedMap?.mapHTML.length > 0 && mapElements) {
      for (let mapHTML of selectedMap.mapHTML) {
        mapElements.innerHTML += mapHTML;
      }
    }
  }

  public saveToLocalStorage() {
    // All map pieces have a name of 'map-element'. Get all of them in the form of a NodeList
    let mapElements = document.getElementsByName('map-element');
    
    // Array to store the html of each map piece
    let htmlArray = new Array<string>();

    // Add the html of each element to the array of html
    mapElements.forEach(element => {
      htmlArray.push(element.outerHTML);
    })

    if (mapElements) {
      this.selectedMap.mapHTML = htmlArray;

      // Add the current map with all map pieces html to the builderService
      this.mapBuilderService.uprisingMaps.set(this.selectedMap.mapName, this.selectedMap)

      // We can't directly convert a map to a json string, so we need to convert it first
      localStorage.setItem('uprisingMaps', JSON.stringify(Array.from(this.mapBuilderService.uprisingMaps.entries())));

      // Trigger the display of the successful save toast
      this.toastService.toastSubject.next();
    }
  }

  /** Load the map from the selected-map url parameter */
  loadMap(){
    let mapName = this.route.snapshot.paramMap.get('selected-map');
    if (mapName) {
      this.selectedMap = this.mapBuilderService.uprisingMaps.get(mapName) as UprisingMap;
      this.setMapHTML(this.selectedMap);
    }
  }

}

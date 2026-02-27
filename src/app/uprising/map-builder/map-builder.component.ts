import { Component, OnInit, inject, HostListener } from '@angular/core';
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
  private mapBuilderService = inject(MapBuilderService);
  private route = inject(ActivatedRoute);
  private toastService = inject(ToastService);

  public selectedMap: UprisingMap = {mapSize: UprisingMapSize.Medium, mapHTML: new Array<string>(), mapName: '', description: ''};
  public UprisingMapSize = UprisingMapSize;
  lastClickedElement: HTMLElement | null = null;

  // Map Elements
  public mapTilesStandard = new Array<number>(); 
  public mapTilesLine = new Array<number>(); 
  public mapTilesFour = new Array<number>(); 
  public mapFlagsGreen = new Array<number>();
  public mapFlagsYellow = new Array<number>();
  public mapFlagsOrange = new Array<number>();
  public mapFlagsRed = new Array<number>();
  public mapPortalsBlue = new Array<number>();
  public mapPortalsPurple = new Array<number>();
  public mapPortalsTeal = new Array<number>();
  public mapCapitols = new Array<number>();
  public mapMountains = new Array<number>();
  public mapWaterRegions = new Array<number>();

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
          var currentRotation = (parseFloat(target.getAttribute('data-rotation')) || 0) 

          // translate the element
          target.style.transform = `translate(${x}px, ${y}px) rotate(${currentRotation}deg)`;

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

  trackClick(event: Event): void {
    // event.preventDefault();
    // Remove the 'selected' class from the previously clicked element, if it exists
    if (event.target && this.lastClickedElement) {
      this.lastClickedElement.classList.remove('selected');
      this.lastClickedElement = null;
    }

    const clickedElement = event.target as HTMLElement;

    // Dont allow rotation of the container element
    if (clickedElement.id !== 'image-group') {
      this.lastClickedElement = clickedElement;
      clickedElement.classList.add('selected');
    }
  }

  /**
   * Listen for keyboard events on the window so that we can remove the currently
   * selected map piece when the user hits the delete or backspace key. 
   */
  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Delete' || event.key === 'Backspace') {
      if (this.lastClickedElement) {
        this.lastClickedElement.remove();
        this.lastClickedElement = null;
      }
    }
  }

  /**
   * Rotate the currently selected map piece 60 degrees clockwise.
   */
  public rotateClockwise() {
    if (this.lastClickedElement) {
      console.log('Rotating element: ', this.lastClickedElement);
      // grab the current translation stored on the element (draggable sets these)
      const x = parseFloat(this.lastClickedElement.getAttribute('data-x') || '0');
      const y = parseFloat(this.lastClickedElement.getAttribute('data-y') || '0');

      const currentRotation = parseFloat(this.lastClickedElement.getAttribute('data-rotation') || '0');
      let newRotation = 0;
      if (currentRotation === 300) {
        // Do nothing and allow the rotation to reset to 0
      } else {
        newRotation = currentRotation + 60;
      }

      // apply the new transform with both translation and rotation
      this.lastClickedElement.style.transform =
        `translate(${x}px, ${y}px) rotate(${newRotation}deg)`;

      // update the rotation attribute if you want to track it separately
      this.lastClickedElement.setAttribute('data-rotation', newRotation.toString());
    }
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
    if (mapName && this.mapBuilderService.uprisingMaps.has(mapName)) {
      this.selectedMap = this.mapBuilderService.uprisingMaps.get(mapName) as UprisingMap;
      this.setMapHTML(this.selectedMap);
    }
  }

}

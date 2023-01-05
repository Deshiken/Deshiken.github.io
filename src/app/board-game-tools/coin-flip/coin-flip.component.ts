import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RandomService } from 'src/app/shared/services/random.service';

@Component({
  selector: 'app-coin-flip',
  templateUrl: './coin-flip.component.html',
  styleUrls: ['./coin-flip.component.scss']
})
export class CoinFlipComponent implements OnInit {
  
  @ViewChild('coin') coin!: ElementRef;

  //                               green          blue             green          blue             green          blue             green         blue
  spinArray: Array<string> = ['animation900','animation1080','animation1260','animation1440','animation1620','animation1800','animation1980','animation2160'];

  constructor( private randomService: RandomService) { }

  ngOnInit(): void {
  }

  flipCoin() {
    // Remove any existing classes from the spinArray class list
    this.coin.nativeElement.classList.remove(...this.spinArray);

    // Get a random entry from spinArray and add that class to the coin element
    let spinClass = this.randomService.getRandomEntryFromArray(this.spinArray);
    this.coin.nativeElement.classList.add(spinClass);
  }

}

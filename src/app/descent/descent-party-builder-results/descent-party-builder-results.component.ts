import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescentPartyBuilderService } from '../descent-party-builder.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { DescentHero } from '../descent-data';
import { take } from 'rxjs/operators';
import { timer } from 'rxjs';
import { FadeInOutAnimation } from 'src/app/shared/animations/fadeInOutAnimation';

@Component({
  selector: 'app-descent-party-builder-results',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './descent-party-builder-results.component.html',
  styleUrls: ['./descent-party-builder-results.component.scss'],
  animations: [
    FadeInOutAnimation
  ]
})
export class DescentPartyBuilderResultsComponent implements OnInit {

  public selectedPartyCopy: Array<DescentHero> = new Array<DescentHero>(); 
  public copyIndex = 0;

  constructor(
    public partyBuilderService: DescentPartyBuilderService
  ) { }

  ngOnInit(): void {
    //Create an objservable that emits initially and every 300ms. Take the number of emits equal to the number of players.
    const pickNumber = timer(300,600)
      .pipe(
        take(this.partyBuilderService.selectedParty.length)
      )
 
     // Subscribe to the observable
     pickNumber.subscribe(() => {
       this.selectedPartyCopy.push(this.partyBuilderService.selectedParty[this.copyIndex]);
       this.copyIndex ++;
     });
     
  }

}

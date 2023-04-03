import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomService } from 'src/app/shared/services/random.service';
import { DraftItem, DraftService, Player } from '../draft.service';

@Component({
  selector: 'app-draft-pick',
  templateUrl: './draft-pick.component.html',
  styleUrls: ['./draft-pick.component.scss']
})
export class DraftPickComponent implements OnInit {
  public player: Player = {playerNumber: 1}; 
  public selectedItem: DraftItem | null = null;
  public draftStep: number = 1;
  public errors: Map<string,boolean> = new Map([
    ['noItemSelected', false],
    ['itemWithThisCategoryAlreadyPicked', false],
  ]);
  public selectedItemCategory = '';
  @ViewChild('container') container: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public draftService: DraftService,
    private utils: RandomService,
    public renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.draftStep = Number(this.route.snapshot.paramMap.get('draft-step'));
    this.player = this.draftService.players.get(this.draftService.draftSteps[this.draftStep]) as Player
    console.log('draft service players', this.draftService.players)
    console.log('draftStep', this.draftStep)
    console.log('player for draft step', this.player);
  }

  public next() {
    this.checkForErrors()

    // Check if any errors present
    if ([...this.errors].filter(([key,value]) => value === true).length === 0) {
      this.renderer.addClass(this.container.nativeElement, 'fade-in');
      this.player.draftPicks?.push(this.selectedItem as DraftItem);
      this.utils.deleteFromArray(this.draftService.selectedDraft.draftItems, this.selectedItem);
      
      this.draftStep ++;
      this.player = this.draftService.players.get(this.draftService.draftSteps[this.draftStep]) as Player

      if (this.draftStep === this.draftService.selectedDraft.numberOfPlayers * this.draftService.selectedDraft.picksPerPlayer) {
        this.router.navigate(['/tools/draft-results']);
      } else {
        this.router.navigate(['/tools/draft-pick', {draftStep: this.draftStep}])
      }
      
      window.setTimeout(() => {
        this.renderer.removeClass(this.container.nativeElement, 'fade-in');    
      },400)
    }
  }

  private checkForErrors() {
    // Reset all errors
    this.errors.forEach((value, key) => { this.errors.set(key, false)});

    if (!this.selectedItem) {
      this.errors.set('noItemSelected', true);
    }

    if (this.selectedItem && this.player.draftPicks) {
      for (let draftItem of this.player.draftPicks) {
        if (this.selectedItem?.itemCategory && (draftItem.itemCategory === this.selectedItem?.itemCategory)) {
          this.selectedItemCategory = this.selectedItem?.itemCategory;
          this.errors.set('itemWithThisCategoryAlreadyPicked', true);
          break;
        }
      }
    }
  }

}

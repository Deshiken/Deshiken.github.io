import { Component, OnInit } from '@angular/core';
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
  public selectedItem: DraftItem = {itemName: ''};
  public draftStep: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public draftService: DraftService,
    private utils: RandomService
  ) { }

  ngOnInit(): void {
    this.draftStep = Number(this.route.snapshot.paramMap.get('draft-step'));
    console.log('draft service players', this.draftService.players)
    console.log('draftStep', this.draftStep)
    this.player = this.draftService.players.get(this.draftStep) as Player
    console.log('player for draft step', this.player);
  }

  public next() {
    if (this.selectedItem) {
      this.player.draftPicks?.push(this.selectedItem);
      this.utils.deleteFromArray(this.draftService.selectedDraft.draftItems, this.selectedItem);
      
      this.draftStep ++;
      this.player = this.draftService.players.get(this.draftStep) as Player;

      if (this.draftStep === this.draftService.players.size) {
        this.router.navigate(['/tools/draft-results']);
      } else {
        this.router.navigate(['/tools/draft-pick', {draftStep: this.draftStep}])
      }
    }
  }

}

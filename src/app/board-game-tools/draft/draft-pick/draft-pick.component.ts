import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomService } from 'src/app/shared/services/random.service';
import { DraftService, Player } from '../draft.service';

@Component({
  selector: 'app-draft-pick',
  templateUrl: './draft-pick.component.html',
  styleUrls: ['./draft-pick.component.scss']
})
export class DraftPickComponent implements OnInit {
  public player: Player; 
  public draftStep: number = 0;
  public selectedItem: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public draftService: DraftService,
    private utils: RandomService
  ) { }

  ngOnInit(): void {
    this.draftStep = Number(this.route.snapshot.paramMap.get('draft-step'));
    this.player = this.draftService.players[this.draftStep]
    console.log('player for draft step', this.player);
  }

  public next() {
    if (this.selectedItem) {
      this.player.pick = this.selectedItem;
      this.utils.deleteFromArray(this.draftService.selectedDraft.choiceList, this.selectedItem);
      
      this.draftStep ++;
      this.player = this.draftService.players[this.draftStep];

      if (this.draftStep === this.draftService.players.length) {
        this.router.navigate(['/tools/draft-results']);
      } else {
        this.router.navigate(['/tools/draft-pick', {draftStep: this.draftStep}])
      }
    }
  }

}

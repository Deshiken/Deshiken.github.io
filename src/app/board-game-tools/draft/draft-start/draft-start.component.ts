import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { RandomService } from 'src/app/shared/services/random.service';
import { DraftItem, DraftOptions, DraftService } from '../draft.service';
import { testDraftOptions } from '../draft.data';

@Component({
  selector: 'app-draft-start',
  templateUrl: './draft-start.component.html',
  styleUrls: ['./draft-start.component.scss']
})
export class DraftStartComponent implements OnInit {

  public newDraftChoice: string = '';
  public draftToDelete: DraftOptions = testDraftOptions[0];
  public errors: Map<string,boolean> = new Map([
    ['snakeDraftNotAllowed', false],
    ['oddPlayerCountForTeamDraft', false],
    ['balancedDraftNotAllowed', false]
  ]);

  constructor(
    public draftService: DraftService,
    public utils: RandomService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  public deleteDraftFromStorage() {
    this.utils.deleteFromArray(this.draftService.savedDraftLists, this.draftToDelete);
    localStorage.setItem('savedDraftList',JSON.stringify(this.draftService.savedDraftLists))
  }

  public startDraft() {
    // Build our map of errors
    this.checkForErrors();

    // We can't use filter on a map :( so we convert it to an array of key value pairs and then check for entries that have errors
    if ([...this.errors].filter(([key,value]) => value === true).length === 0) {
      this.buildPlayersMap()
      this.router.navigate(['/tools/draft-items'])
    }
  }

  private checkForErrors() {
    //Reset all errors
    this.errors.forEach((value,key) => { this.errors.set(key,false) });

    // Snake draft is only possible with team play or multiple picks per player
    if (this.draftService.selectedDraft.snakeDraft && this.draftService.selectedDraft.picksPerPlayer === 1) {
      this.errors.set('snakeDraftNotAllowed', true);
      // Scroll to bottom
      window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
    }

    if (this.draftService.selectedDraft.balancedDraft) {
      if (this.draftService.selectedDraft.picksPerPlayer > 1 || !this.draftService.selectedDraft.teamDraft) {
        this.errors.set('balancedDraftNotAllowed', true);
        // Scroll to bottom
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
      }
    }

    if ((this.draftService.selectedDraft.numberOfPlayers % 2 != 0) && this.draftService.selectedDraft.teamDraft) {
      this.errors.set('oddPlayerCountForTeamDraft', true);
    }
  }

  private buildPlayersMap() {
    let teamTracker = 1;
    for (let i = 0; i < this.draftService.selectedDraft.numberOfPlayers; i++) {
      this.draftService.players.set(
        i + 1,
        {
          playerNumber: i + 1,
          draftPicks: new Array<DraftItem>(),
          team: teamTracker
        }
      )
      // Swap the team tracker between 1 and 2 each loop.
      teamTracker = teamTracker === 1 ? 2 : 1;
    }
    console.log('ending player map', this.draftService.players);
  }

}

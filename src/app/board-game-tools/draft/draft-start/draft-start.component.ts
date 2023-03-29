import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RandomService } from 'src/app/shared/services/random.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { DraftItem, DraftOptions, DraftService } from '../draft.service';

@Component({
  selector: 'app-draft-start',
  templateUrl: './draft-start.component.html',
  styleUrls: ['./draft-start.component.scss']
})
export class DraftStartComponent implements OnInit {

  @ViewChild('savedOptionsToast') savedOptionsToast!: ElementRef;
  public newDraftChoice: string = '';
  public draftToDelete: DraftOptions = this.draftService.testDraftOptions[0];
  public errors: Map<string,boolean> = new Map([
    ['tooFewItems', false]
  ]);

  constructor( 
    public draftService: DraftService,
    public utils: RandomService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit(): void { }
  
  public deleteDraftFromStorage() {
    this.utils.deleteFromArray(this.draftService.savedDraftLists, this.draftToDelete);
    localStorage.setItem('savedDraftList',JSON.stringify(this.draftService.savedDraftLists))
  }

  // public addDraftChoice() {
  //   if(this.newDraftChoice) {
  //     this.draftService.selectedDraft.choiceList.push(this.newDraftChoice);
  //     this.newDraftChoice = '';
  //   }
  // }


  // public saveDraft() {
  //   let draftToSave = this.draftService.selectedDraft
  //   console.log('draft to save: ', draftToSave);
    
  //   if(draftToSave.draftName && draftToSave.choiceList.length > 0) {
  //     //if name exists on saved drafts list remove it
  //     if(this.draftService.savedDraftLists.find(draft => draft.draftName === draftToSave.draftName)) {
  //       this.utils.deleteFromArray(this.draftService.savedDraftLists, draftToSave);
  //     }
      
  //     //add the draft to the list of drafts
  //     this.draftService.savedDraftLists.push(draftToSave);
  
  //     //save the list of drafts to local storage
  //     localStorage.setItem('savedDraftList',JSON.stringify(this.draftService.savedDraftLists))

  //     // Briefly display toast message
  //     this.toastService.toastSubject.next();
  //   }
  // }

  public startDraft() {
  //   console.log('selected draft ', this.draftService.selectedDraft)
  //   // Build our map of errors
    this.checkForErrors();
    
    // We can't use filter on a map :( so we convert it to an array of key value pairs and then chek for entries that have errors
    if ([...this.errors].filter(([key,value]) => value === true).length === 0) {
      this.buildPlayersMap()
      // this.router.navigate(['/tools/draft-pick', {draftStep: 0}])
      this.router.navigate(['/tools/draft-items'])
    } 
  }

  private checkForErrors() {
  //   //Reset all errors
  //   this.errors.forEach((value,key) => { this.errors.set(key,false) });

  //   if (this.draftService.selectedDraft.numberOfPlayers * this.draftService.selectedDraft.picksPerPlayer > this.draftService.selectedDraft.choiceList.length) {
  //     this.errors.set('tooFewItems',true);
  //     // Scroll to bottom
  //     window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
  //   }
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
    }
    // Swap the team tracker between 1 and 2 each loop.
    teamTracker = teamTracker === 1 ? 2 : 1;
    console.log('ending player map', this.draftService.players);
  }

}

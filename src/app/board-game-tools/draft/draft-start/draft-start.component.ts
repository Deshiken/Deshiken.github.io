import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RandomService } from 'src/app/shared/services/random.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { DraftOptions, DraftService } from '../draft.service';

@Component({
  selector: 'app-draft-start',
  templateUrl: './draft-start.component.html',
  styleUrls: ['./draft-start.component.scss']
})
export class DraftStartComponent implements OnInit {

  @ViewChild('savedOptionsToast') savedOptionsToast!: ElementRef;
  public newDraftChoice: string = '';
  public draftToDelete: DraftOptions = this.draftService.testDraftOptions[0];

  constructor( 
    public draftService: DraftService,
    public utils: RandomService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void { }

  public addDraftChoice() {
    if(this.newDraftChoice) {
      console.log('adding draft choice: ', this.newDraftChoice);
      this.draftService.selectedDraft.choiceList.push(this.newDraftChoice);
      this.newDraftChoice = '';
    }
  }

  public deleteDraftFromStorage() {
    console.log('deleting draft: ', this.draftToDelete);
    this.utils.deleteFromArray(this.draftService.savedDraftLists, this.draftToDelete);
    localStorage.setItem('savedDraftList',JSON.stringify(this.draftService.savedDraftLists))
  }

  public saveDraft() {
    let draftToSave = this.draftService.selectedDraft
    console.log('draft to save: ', draftToSave);
    
    if(draftToSave.draftName && draftToSave.choiceList.length > 0) {
      //if name exists on saved drafts list remove it
      if(this.draftService.savedDraftLists.find(draft => draft.draftName === draftToSave.draftName)) {
        this.utils.deleteFromArray(this.draftService.savedDraftLists, draftToSave);
      }
      
      //add the draft to the list of drafts
      this.draftService.savedDraftLists.push(draftToSave);
  
      //save the list of drafts to local storage
      localStorage.setItem('savedDraftList',JSON.stringify(this.draftService.savedDraftLists))


      // Briefly display toast message
      this.toastService.toastSubject.next();
    }
  }

}

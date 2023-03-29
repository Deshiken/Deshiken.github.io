import { Component, OnInit } from '@angular/core';
import { RandomService } from 'src/app/shared/services/random.service';
import { DraftItem, DraftService } from '../draft.service';

@Component({
  selector: 'app-draft-items',
  templateUrl: './draft-items.component.html',
  styleUrls: ['./draft-items.component.scss']
})
export class DraftItemsComponent implements OnInit {
  public newItemName = '';
  public newItemCategory = '';
  public newCategoryName = '';
  public errors: Map<string,boolean> = new Map([
    ['categoryNameMissing', false],
    ['itemNameMissing', false],
    ['itemCategoryMissing', false],
    ['tooFewItems', false],
    ['tooFewCategories', false],
    ['tooFewItemsPerCategory', false],
  ]);

  constructor(
    public draftService: DraftService,
    public utils: RandomService
  ) { }

  ngOnInit(): void {
  }

  public addNewItemCategory() {
    // Reset category name missing error
    this.errors.set('categoryNameMissing', false);

    if (!this.newCategoryName) {
      this.errors.set('categoryNameMissing', true);
    } else {
      this.draftService.selectedDraft.draftItemCategories.push(this.newCategoryName);
      this.newCategoryName = '';
    }
  }

  public deleteDraftCategory(categoryToDelte: string) {
    // Delete the item category
    this.utils.deleteFromArray(this.draftService.selectedDraft.draftItemCategories, categoryToDelte);

    // Delete all items that have that category set
    this.draftService.selectedDraft.draftItems.forEach(item => {
      if (item.itemCategory === categoryToDelte) {
        this.utils.deleteFromArray(this.draftService.selectedDraft.draftItems, item);
      }
    })
  }

  public deleteDraftItem(itemToDelete: DraftItem) {
    this.utils.deleteFromArray(this.draftService.selectedDraft.draftItems, itemToDelete);
  }

  public addDraftItem() {
    //Reset all errors
    this.errors.forEach((value,key) => { this.errors.set(key,false) });

    this.checkForItemAddError();

    // We can't use filter on a map :( so we convert it to an array of key value pairs and then chek for entries that have errors
    if ([...this.errors].filter(([key,value]) => value === true).length === 0) {
      this.draftService.selectedDraft.draftItems.push({itemName: this.newItemName, itemCategory: this.newItemCategory});
    }

    this.newItemCategory = '';
    this.newItemName = '';
  }

  private checkForItemAddError() {
    if (!this.newItemName) {
      console.log('item name missing', this.newItemName);
      this.errors.set('itemNameMissing', true)
    }
    if (this.draftService.selectedDraft.useItemCategories && !this.newItemCategory) {
      console.log('item category missing', this.newItemCategory);
      this.errors.set('itemCategoryMissing', true)
    }
  }

  public startDraft() {
    this.checkForErrors();

    if (this.errors.get('tooFewItems') === false && this.errors.get('tooFewItemsPerCategory') === false && this.errors.get('tooFewCategories') === false) {
      this.setDraftOrder();
    }
  }

  private checkForErrors() {
    // Reset errors
    this.errors.set('tooFewItems', false);
    this.errors.set('tooFewItemsPerCategory', false);
    this.errors.set('tooFewCategories', false);

    // We do not have enough items to draft for each player to draft 1 item.
    if (this.draftService.selectedDraft.draftItems.length < this.draftService.selectedDraft.numberOfPlayers * this.draftService.selectedDraft.picksPerPlayer) {
      this.errors.set('tooFewItems', true);
    }

    // Category error checks
    if(this.draftService.selectedDraft.useItemCategories) {

      // If drafting with categories, each category must have at least one item per player.
      // Ex: 4 players drafting. 2 categories. The item list must contain at least 4 items of each category.
      this.draftService.selectedDraft.draftItemCategories.forEach(category => {
        let categoryCount = 0;
        this.draftService.selectedDraft.draftItems.forEach(item => {
          if (item.itemCategory == category) {
            categoryCount ++;
          }
        })
        if(categoryCount < this.draftService.selectedDraft.numberOfPlayers) {
          this.errors.set('tooFewItemsPerCategory', true);
        }
      })
      
      // If drafting with categories, there must be at least one category for each player pick.
      // Ex: 4 players drafting. 2 picks per player. The draft must have at least two categories for items. 
      if (this.draftService.selectedDraft.draftItemCategories.length < this.draftService.selectedDraft.picksPerPlayer) {
        this.errors.set('tooFewCategories', true)
      }
    }

  }

  private setDraftOrder() {
    let numberOfPicks = this.draftService.selectedDraft.numberOfPlayers * this.draftService.selectedDraft.picksPerPlayer;
    let finalDraftOrder = new Array<number>();

    // Set Order for 1 round of drafting. We will multiply this by the number of picksPerPlayer later to make a full draft order.
    const oneRoundDraftOrder = this.draftService.selectedDraft.randomDraftOrder ? this.randomDraftOrder() : this.standardDraftOrder() ;
    
    for (let i = 0; i < this.draftService.selectedDraft.picksPerPlayer; i++) {
      finalDraftOrder = finalDraftOrder.concat(oneRoundDraftOrder);
    }
    
    // We need to reverse the draft order halfway through the draft
    if (this.draftService.selectedDraft.snakeDraft) {

    } 

    console.log('final draft order', finalDraftOrder)
    
  }

  private randomDraftOrder() {
    let orderedPlayerArray = this.standardDraftOrder();
    let randomPlayerArray = new Array<number>();

    for (let i = 0; i < this.draftService.selectedDraft.numberOfPlayers; i++) {
      let randomPlayer = this.utils.getRandomEntryFromArray(orderedPlayerArray);
      randomPlayerArray.push(randomPlayer);
      this.utils.deleteFromArray(orderedPlayerArray,randomPlayer);
    }
    console.log('ending random player array', randomPlayerArray)
    return randomPlayerArray;
  }

  private standardDraftOrder() {
    let orderedPlayerArray = new Array<number>();
    for (let i = 0; i < this.draftService.selectedDraft.numberOfPlayers; i++) {
      orderedPlayerArray.push(i + 1)
    }
    return orderedPlayerArray;
  }

}

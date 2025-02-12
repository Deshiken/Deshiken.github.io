import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RandomService } from 'src/app/shared/services/random.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { DraftItem, DraftService } from '../draft.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-draft-items',
  templateUrl: './draft-items.component.html',
  styleUrls: ['./draft-items.component.scss']
})
export class DraftItemsComponent implements OnInit {
  @ViewChild('deleteModal') deleteModal!: ElementRef;
  public newItemName = '';
  public newItemCategory = '';
  public newCategoryName = '';
  public categoryToDelete = '';
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
    public utils: RandomService,
    private router: Router,
    private toastService: ToastService,
    private modalService: NgbModal,
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

  public deleteDraftCategoryModal(categoryToDelte: string, content: any) {
    // Delete all items that have that category set
    this.modalService.open(content).result.then(
      () => {this.deleteCategoryAndMatchingItems(categoryToDelte)}, // Case when 'delete category' is pressed
      (result2: any) => {console.log('modal result 2', result2)} // Case when modal is closed or cancelled
    );
  }

  public deleteCategoryAndMatchingItems(categoryToDelete: string) {
    this.utils.deleteFromArray(this.draftService.selectedDraft.draftItemCategories, categoryToDelete);

    const draftItemsCopy = [...this.draftService.selectedDraft.draftItems];

    draftItemsCopy.forEach(item => {
      if (item.itemCategory === categoryToDelete) {
        this.deleteDraftItem(item);
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

  public saveDraft() {
    localStorage.setItem('savedDraftList', JSON.stringify(this.draftService.savedDraftLists));
    this.toastService.toastSubject.next();
  }

  public startDraft() {
    this.checkForErrors();

    if (this.errors.get('tooFewItems') === false && this.errors.get('tooFewItemsPerCategory') === false && this.errors.get('tooFewCategories') === false) {
      this.setDraftOrder();

      if (this.draftService.selectedDraft.randomDraftItems) {
        this.randomizeDraftItems();
      }

      this.router.navigate(['/tools/draft-pick', {'draft-step': 0}])
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
    let finalDraftOrder = new Array<number>();

    // Snake draft for teams, one pick per player.
    if (this.draftService.selectedDraft.picksPerPlayer === 1 && this.draftService.selectedDraft.snakeDraft && this.draftService.selectedDraft.teamDraft) {
      // start with team one
      //
    }

    // Set Order for 1 round of drafting. We will multiply this by the number of picksPerPlayer later to make a full draft order.
    const oneRoundDraftOrder = this.draftService.selectedDraft.randomDraftOrder ? this.randomDraftOrder() : this.standardDraftOrder() ;

    for (let i = 0; i < this.draftService.selectedDraft.picksPerPlayer; i++) {
      // For a Snake Draft the draft order is reversed on every other round.
      if (this.draftService.selectedDraft.snakeDraft && (i % 2 === 1)) {
        finalDraftOrder = finalDraftOrder.concat(oneRoundDraftOrder.reverse())
      }
      // Non Snake Drafts will use the same pick order for each round
      else {
        finalDraftOrder = finalDraftOrder.concat(oneRoundDraftOrder);
      }
    }


    if (this.draftService.selectedDraft.balancedDraft) {
      finalDraftOrder = this.balancedDraftAdjustment(finalDraftOrder);
    }

    console.log('final draft order', finalDraftOrder)
    this.draftService.draftSteps  = finalDraftOrder;
  }

  private balancedDraftAdjustment(draftOrder: Array<number>): Array<number> {
    // To adjust for a mor balanced draft between two teams, we can take the last pick and insert it to the 2nd pick position.
    // Ex: 1,2,1,2,1,2 -> 1,2,2,1,2,1
    draftOrder.splice(1,0, draftOrder[draftOrder.length - 1]);
    draftOrder.pop();
    return draftOrder;
  }

  private randomDraftOrder() {
    // For team drafts, we need to alternate picks between teams
    if (this.draftService.selectedDraft.teamDraft) {
      let teamOneArray = new Array<number>()
      let teamTwoArray = new Array<number>()

      // Break the player array into two separate arrays, one for each team.
      this.draftService.players.forEach((value, key) => {
        value.team === 1 ? teamOneArray.push(key) : teamTwoArray.push(key)
      });

      let startingTeam = Math.floor(Math.random() * 2) + 1;
      console.log('seed number', startingTeam);

      let endingPlayerOrder = new Array<number>()
      for (let i = 1; i <= this.draftService.selectedDraft.numberOfPlayers; i++) {
        let arrayToUse  = startingTeam === 1 ? teamOneArray : teamTwoArray;
        let player = this.utils.getRandomEntryFromArray(arrayToUse);
        endingPlayerOrder.push(player);
        this.utils.deleteFromArray(arrayToUse, player);

        // Swap the value of the starting team to pick from the opposite team array.
        startingTeam = startingTeam === 1 ? 2 : 1;
      }
      return endingPlayerOrder;
    } else {
      return this.randomizeArrayForPlayerCount(this.standardDraftOrder(), this.draftService.selectedDraft.numberOfPlayers)
    }
  }

  /** Returns an array in sequential order of the players numbers of the draft
   *  ex: [1, 2, 3, 4]
   */
  private standardDraftOrder() {
    let orderedPlayerArray = new Array<number>();
    for (let i = 0; i < this.draftService.selectedDraft.numberOfPlayers; i++) {
      orderedPlayerArray.push(i + 1)
    }
    return orderedPlayerArray;
  }

  private randomizeDraftItems() {
    if (this.draftService.selectedDraft.useItemCategories) {
      this.draftService.selectedDraft.draftItems = this.randomizeItemsWithCategories()
    } else {
      this.draftService.selectedDraft.draftItems = this.randomizeArrayForPlayerCount(this.draftService.selectedDraft.draftItems, this.draftService.selectedDraft.numberOfPlayers);
    }

    console.log('ending randomized array', this.draftService.selectedDraft.draftItems);
  }

  private randomizeItemsWithCategories(): Array<DraftItem> {
    // First we need to break the items down into separate array for each category.
    // Build a map of with a key of each category
    let itemCategoryMap = new Map<string, Array<DraftItem>>();
    this.draftService.selectedDraft.draftItemCategories.forEach((category) => {
      itemCategoryMap.set(category, new Array<DraftItem>());
    })

    // Populate the array with the items matching the category key
    this.draftService.selectedDraft.draftItems.forEach((item) => {
      if (typeof item.itemCategory === 'string') {
        itemCategoryMap.get(item.itemCategory)?.push(item);
      }
    })

    // Randomize the entries in each array.
    itemCategoryMap.forEach((value, key) => {
      itemCategoryMap.set(key, this.randomizeArrayForPlayerCount(value, this.draftService.selectedDraft.numberOfPlayers));
    })

    // Combine the randomized arrays of each category into one array.
    let concatArray = new Array<DraftItem>();
    itemCategoryMap.forEach((value) => {
      concatArray = concatArray.concat(value);
    });

    return concatArray
  }

  private randomizeArrayForPlayerCount(array: Array<any>, randomArraySize: number) : Array<any> {
    let arrayCopy = [...array];
    let randomOrderArray = new Array<any>();
    for (let i = 1; i <= randomArraySize; i++) {
      const randomItem = this.utils.getRandomEntryFromArray(arrayCopy);
      randomOrderArray.push(randomItem);
      this.utils.deleteFromArray(arrayCopy, randomItem);
    }
    return randomOrderArray;
  }

}

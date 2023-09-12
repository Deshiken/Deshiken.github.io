import { Component, OnInit } from '@angular/core';
import { SpellCard, SpellCards } from './spell-card-data';

@Component({
  selector: 'app-spell-cards',
  templateUrl: './spell-cards.component.html',
  styleUrls: ['./spell-cards.component.scss']
})
export class SpellCardsComponent implements OnInit {
  SpellCards: Array<SpellCard> = [...SpellCards];  //Make SpellCards available to the html 
  SpellCardSortOptions = SpellCardSortOptions;  //Make SortOptions enum available to the html 

  spellCost1Total = 0;
  spellCost2Total = 0;
  spellCost3Total = 0;
  spellCost4Total = 0;
  spellCost5Total = 0;
  spellCostAverage = 0;
  numberOfPreparedSpells = 0;

  spellCardSort = SpellCardSortOptions.Alphabetical

  ngOnInit() {
    this.calculateSpellStats();
  }

  private calculateSpellStats() {
    let spellCardCostTotal = 0
    SpellCards.forEach(spellCard => {
      spellCardCostTotal += spellCard.spellCost;
      
      switch (spellCard.spellCost) {
        case 1:
          this.spellCost1Total ++;
          break;
        case 2:
          this.spellCost2Total ++;
          break;
        case 3:
          this.spellCost3Total ++;
          break;
        case 4:
          this.spellCost4Total ++;
          break;
        case 5:
          this.spellCost5Total ++;
      }
      
      if (spellCard.prepared) {
        this.numberOfPreparedSpells ++;
      }

    })
    this.spellCostAverage = spellCardCostTotal/SpellCards.length;
  }

  public sortOptionChange(event: Event) {
    let target = event.target as HTMLInputElement;
    let value = target.value;
    console.log("Event.target: ", target)
    // if (event.target) {
    console.log("Event.target.value: ", target.value)
    // }

    switch(value) {
      case SpellCardSortOptions.Alphabetical:
        console.log('Sort Alphabetical');
        this.SpellCards.sort((a,b) => a.name.localeCompare(b.name));
        break;
      case SpellCardSortOptions.PreparedSpells:
        console.log('Sort Prepared');
        this.SpellCards.sort((a,b) => a.prepared ? -1 : 1)
        break;
      case SpellCardSortOptions.SpellCostHighest:
        this.SpellCards.sort((a,b) => a.spellCost - b.spellCost).reverse();
        console.log('Sort cost highest');
        break;
      case SpellCardSortOptions.SpellCostLowest:
        this.SpellCards.sort((a,b) => a.spellCost - b.spellCost);
        console.log('Sort cost lowest');
        break;
    }

    // this.SpellCards.sort((a,b) => a.name.localeCompare(b.name));

  }
}

enum SpellCardSortOptions {
  Alphabetical = "Alphabetical",
  SpellCostHighest = "Spell Cost Highest",
  SpellCostLowest = "Spell Cost Lowest",
  PreparedSpells = "Prepared Spells",
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Region, SpellCard, SpellCards } from './spell-card-data';
import { SpellCardService } from './spell-cards.service';

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
  spellRegionPlainsTotal = 0;
  spellRegionForestTotal = 0;
  spellRegionHillsTotal = 0;
  spellRegionBadlandsTotal = 0;
  spellRegionMarshTotal = 0;
  spellCostAverage = 0;
  numberOfPreparedSpells = 0;
  numberOfTokenSpells = 0;

  spellCardSort = SpellCardSortOptions.Alphabetical

  ngOnInit() {
    this.calculateSpellStats();

    // Default sort to alphabetical
    this.sortSpellCardList(SpellCardSortOptions.Alphabetical);
  }

  constructor(
    public spellCardService: SpellCardService,
    public router: Router
  ) { }

  private calculateSpellStats() {
    let spellCardCostTotal = 0;
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

      if (spellCard.regions) {
        spellCard.regions.forEach((region) => {
          switch (region) {
            case Region.Forest:
              this.spellRegionForestTotal ++;
              break;
            case Region.Badlands:
              this.spellRegionBadlandsTotal ++;
              break;
            case Region.Plains:
              this.spellRegionPlainsTotal ++;
              break;
            case Region.Marsh:
              this.spellRegionMarshTotal ++;
              break;
            case Region.Hills:
              this.spellRegionHillsTotal ++;
              break;
          }
        })
      }

      if (spellCard.prepared) {
        this.numberOfPreparedSpells ++;
      };

      if (spellCard.effectTokens && spellCard.effectTokens?.length > 0) {
        this.numberOfTokenSpells ++;
      };

    })
    this.spellCostAverage = spellCardCostTotal/SpellCards.length;
  }

  public sortOptionChangeEvent(event: Event) {
    let target = event.target as HTMLInputElement;
    let value = target.value;
    this.sortSpellCardList(value);
  }

  sortSpellCardList(sortOption: string) {
    switch(sortOption) {
      case SpellCardSortOptions.Alphabetical:
        this.SpellCards.sort((a,b) => a.name.localeCompare(b.name));
        break;
      case SpellCardSortOptions.PreparedSpells:
        this.SpellCards.sort((a,b) =>
          Number(b.prepared) - Number(a.prepared) // First level sort prepared spells
          || b.spellCost - a.spellCost // Second level sort spell cost
          || a.name.localeCompare(b.name)); // Third level sort alphabetical
        break;
      case SpellCardSortOptions.SpellCostHighest:
        // Sorted by spell cost fist and alphabetical second
        this.SpellCards.sort((a,b) => b.spellCost - a.spellCost || a.name.localeCompare(b.name));
        break;
      case SpellCardSortOptions.SpellCostLowest:
        // Sorted by spell cost fist and alphabetical second
        this.SpellCards.sort((a,b) => a.spellCost - b.spellCost || a.name.localeCompare(b.name));
        break;
    }
  }

  addCardToPintList(spellCard: SpellCard) {
    if (this.spellCardService.spellCardsToPrint.has(spellCard.name)) {
      this.spellCardService.spellCardsToPrint.delete(spellCard.name)
    } else {
      this.spellCardService.spellCardsToPrint.set(spellCard.name, spellCard);
    }
  }

}

enum SpellCardSortOptions {
  Alphabetical = "Alphabetical",
  SpellCostHighest = "Spell Cost Highest",
  SpellCostLowest = "Spell Cost Lowest",
  PreparedSpells = "Prepared Spells",
}

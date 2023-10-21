import { Component } from '@angular/core';
import { SpellCards } from '../spell-card-data';
import { SpellCardService } from '../spell-cards.service';

@Component({
  selector: 'app-spell-card-print-sheet',
  templateUrl: './spell-card-print-sheet.component.html',
  styleUrls: ['./spell-card-print-sheet.component.scss']
})
export class SpellCardPrintSheetComponent {
  spellCards = SpellCards;

  constructor(
    public spellCardService: SpellCardService
  ) {}
}

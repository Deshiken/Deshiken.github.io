import { Component } from '@angular/core';
import { SpellCardService } from '../spell-cards.service';

@Component({
    selector: 'app-spell-card-print-sheet',
    templateUrl: './spell-card-print-sheet.component.html',
    styleUrls: ['./spell-card-print-sheet.component.scss'],
    standalone: false
})
export class SpellCardPrintSheetComponent {

  constructor(
    public spellCardService: SpellCardService
  ) {}
}

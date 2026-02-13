import { Component, inject } from '@angular/core';
import { PrintableNeutralAbilityComponent } from "../printable-neutral-ability/printable-neutral-ability.component";
import { SpellCardService } from 'src/app/uprising/spell-cards/spell-cards.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-neutral-abilities-print-sheet',
  standalone: true,
  imports: [PrintableNeutralAbilityComponent, CommonModule],
  templateUrl: './neutral-abilities-print-sheet.component.html',
  styleUrl: './neutral-abilities-print-sheet.component.scss'
})
export class NeutralAbilitiesPrintSheetComponent {
  cardPrintService = inject(SpellCardService)
}

import { Component, Input } from '@angular/core';
import { SpellCard, SpellCards } from '../spell-card-data';

@Component({
  selector: 'app-printable-spell-card',
  templateUrl: './printable-spell-card.component.html',
  styleUrls: ['./printable-spell-card.component.scss']
})
export class PrintableSpellCardComponent {
  @Input() spellCard: SpellCard  = SpellCards[0];
}

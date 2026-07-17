import { Component, Input } from '@angular/core';
import { neutralAbilities, NeutralAbility } from '../neutralAbilities';

@Component({
    selector: 'app-printable-neutral-ability',
    imports: [],
    templateUrl: './printable-neutral-ability.component.html',
    styleUrl: './printable-neutral-ability.component.scss'
})
export class PrintableNeutralAbilityComponent {
  @Input() neutralAbility: NeutralAbility  = neutralAbilities[0];

}

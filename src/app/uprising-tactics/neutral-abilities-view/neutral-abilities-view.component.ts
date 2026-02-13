import { CommonModule } from '@angular/common';
import { neutralAbilities, NeutralAbility } from './../neutralAbilities';
import { Component, inject } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpellCardService } from 'src/app/uprising/spell-cards/spell-cards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neutral-abilities-view',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './neutral-abilities-view.component.html',
  styleUrl: './neutral-abilities-view.component.scss'
})
export class NeutralAbilitiesViewComponent {
  cardPrintService = inject(SpellCardService)
  router = inject(Router);
  neutralAbilities: NeutralAbility[] = neutralAbilities

  addCardToPrintList(ability: NeutralAbility) {
    if (this.cardPrintService.neutralAbilitiesToPrint.has(ability.name)) {
      this.cardPrintService.neutralAbilitiesToPrint.delete(ability.name)
    } else {
      this.cardPrintService.neutralAbilitiesToPrint.set(ability.name, ability);
    }
  }

}

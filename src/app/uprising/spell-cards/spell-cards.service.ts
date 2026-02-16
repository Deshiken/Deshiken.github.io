import { NeutralAbility } from './../../uprising-tactics/neutralAbilities';
import { Injectable } from '@angular/core';
import { SpellCard } from './spell-card-data';

@Injectable({
  providedIn: 'root'
})

export class SpellCardService { 
  spellCardsToPrint: Map<String, SpellCard> = new Map<String, SpellCard>();
  neutralAbilitiesToPrint: Map<String, NeutralAbility> = new Map<String, NeutralAbility>();
}
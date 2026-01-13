import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SpellCard, UprisingSpellCards } from '../spell-card-data';

@Component({
  selector: 'app-printable-spell-card',
  templateUrl: './printable-spell-card.component.html',
  styleUrls: ['./printable-spell-card.component.scss']
})

export class PrintableSpellCardComponent implements AfterViewInit {
  constructor(public renderer: Renderer2) { }
  @Input() spellCard: SpellCard  = UprisingSpellCards[0];
  
  @ViewChild('cardText') cardText!: ElementRef<HTMLDivElement>;
  
  ngAfterViewInit(): void {
    // The card text is approaching the limit of what can be contained in the card. Shrink the font size.
    if (this.cardText?.nativeElement.getBoundingClientRect().height > 160) {
      this.renderer.addClass(this.cardText.nativeElement, 'small-text')
    };
  }

}



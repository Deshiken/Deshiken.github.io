import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescentPartyBuilderService } from '../descent-party-builder.service';
import { ExpansionKey,ExpansionType } from '../descent-data';
import { FormsModule } from '@angular/forms';
import { expansionMap } from '../descent-data';

@Component({
  selector: 'app-descent-party-builder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './descent-party-builder.component.html',
  styleUrls: ['./descent-party-builder.component.scss']
})

export class DescentPartyBuilderComponent implements OnInit {
  public ExpansionKey = ExpansionKey;
  public expansionMap = expansionMap;
  public boxExpansions = new Map([...expansionMap].filter(([key, value]) => value.expansionType === ExpansionType.BoxExpansion))
  public characterAndMonsterExpansions = new Map([...expansionMap].filter(([key, value]) => value.expansionType === ExpansionType.CharacterAndMonsterPack))

  constructor( 
    public partyBuilderService: DescentPartyBuilderService,
  ) { }

  ngOnInit(): void {
    this.partyBuilderService.setPartyBuilderData();
    console.log('boxExpansions', this.boxExpansions);
    console.log('characterAndMonsterExpansions', this.characterAndMonsterExpansions);
  }

  public buildParty() {
    
  }

}

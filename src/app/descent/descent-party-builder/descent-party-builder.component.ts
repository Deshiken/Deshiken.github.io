import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescentPartyBuilderService, ExpansionKey } from '../descent-party-builder.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-descent-party-builder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './descent-party-builder.component.html',
  styleUrls: ['./descent-party-builder.component.scss']
})
export class DescentPartyBuilderComponent implements OnInit {
  public ExpansionKey = ExpansionKey;

  constructor( public partyBuilderService: DescentPartyBuilderService ) { }

  ngOnInit(): void {
    this.partyBuilderService.setPartyBuilderData();
  }

}

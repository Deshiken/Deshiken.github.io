import { Component, OnInit } from '@angular/core';
import { DraftService } from '../draft.service';

@Component({
  selector: 'app-draft-results',
  templateUrl: './draft-results.component.html',
  styleUrls: ['./draft-results.component.scss']
})
export class DraftResultsComponent implements OnInit {

  constructor(
    public draftService: DraftService
  ) { }

  ngOnInit(): void {
  }

}

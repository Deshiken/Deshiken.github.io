import { Component, OnInit } from '@angular/core';
import { IconSize } from '../draft-icon/draft-icon.component';
import { HolasDraftService } from '../holas-draft.service';

@Component({
  selector: 'app-draft-summary',
  templateUrl: './draft-summary.component.html',
  styleUrls: ['./draft-summary.component.scss']
})
export class DraftSummaryComponent implements OnInit {

  public IconSize = IconSize;

  constructor (
    public draftService: HolasDraftService
  ) { }

  ngOnInit(): void {
  }

}

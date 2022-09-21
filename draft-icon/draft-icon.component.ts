import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolasDraftService } from '../holas-draft.service';

@Component({
  selector: 'app-draft-icon',
  templateUrl: './draft-icon.component.html',
  styleUrls: ['./draft-icon.component.scss']
})
export class DraftIconComponent implements OnInit {

  @Input() icon: string = '';
  @Input() size: IconSize = IconSize.Medium;
  @Input() style: string = 'medium';
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

}

export enum IconSize {
  Smallest = 'smallest',
  Small    = 'small',
  Medium   = 'medium',
  Large    = 'large',
}

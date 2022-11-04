import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heading-with-back',
  templateUrl: './heading-with-back.component.html',
  styleUrls: ['./heading-with-back.component.scss']
})
export class HeadingWithBackComponent implements OnInit {

  @Input()
  title: string = "";

  constructor(public location: Location) { }

  ngOnInit(): void {
  }

}

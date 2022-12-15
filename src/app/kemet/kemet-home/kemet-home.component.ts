import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kemet-home',
  templateUrl: './kemet-home.component.html',
  styleUrls: ['./kemet-home.component.scss']
})
export class KemetHomeComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}

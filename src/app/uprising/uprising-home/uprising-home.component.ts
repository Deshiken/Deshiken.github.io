import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-uprising-home',
  templateUrl: './uprising-home.component.html',
  styleUrls: ['./uprising-home.component.scss']
})
export class UprisingHomeComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit(): void {
  }

}

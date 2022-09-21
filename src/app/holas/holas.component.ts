import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holas',
  templateUrl: './holas.component.html',
  styleUrls: ['./holas.component.scss']
})
export class HolasComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}

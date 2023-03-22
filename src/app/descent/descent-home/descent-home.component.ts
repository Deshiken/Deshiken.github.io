import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-descent-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './descent-home.component.html',
  styleUrls: ['./descent-home.component.scss']
})
export class DescentHomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}

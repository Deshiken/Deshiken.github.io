import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-tanares-home',
  imports: [SharedModule,],
  templateUrl: './tanares-home.component.html',
  styleUrls: ['./tanares-home.component.scss']
})
export class TanaresHomeComponent {

  constructor(public router: Router) {}

}

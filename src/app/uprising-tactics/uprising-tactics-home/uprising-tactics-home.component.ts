import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeadingWithBackComponent } from 'src/app/shared/components/heading-with-back/heading-with-back.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-uprising-tactics-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './uprising-tactics-home.component.html',
  styleUrl: './uprising-tactics-home.component.scss'
})
export class UprisingTacticsHomeComponent {
  public router = inject(Router);
}

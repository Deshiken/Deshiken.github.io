import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { uprisingTacticsAction, uprisingTacticsActions } from '../actions';

@Component({
  selector: 'app-uprising-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uprising-actions.component.html',
  styleUrl: './uprising-actions.component.scss'
})
export class UprisingActionsComponent {
  public actions: uprisingTacticsAction[] = uprisingTacticsActions;
}

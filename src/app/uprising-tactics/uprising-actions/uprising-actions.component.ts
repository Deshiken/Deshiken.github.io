import { Component } from '@angular/core';

import { uprisingTacticsAction, uprisingTacticsActions } from '../actions';

@Component({
    selector: 'app-uprising-actions',
    imports: [],
    templateUrl: './uprising-actions.component.html',
    styleUrl: './uprising-actions.component.scss'
})
export class UprisingActionsComponent {
  public actions: uprisingTacticsAction[] = uprisingTacticsActions;
}

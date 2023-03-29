import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionTimerComponent } from './action-timer/action-timer.component';
import { RandomizeTeamsStartComponent } from './randomize-teams/randomize-teams-start/randomize-teams-start.component';
import { RandomizeTeamsResultsComponent } from './randomize-teams/randomize-teams-results/randomize-teams-results.component';
import { BoardGameToolsRoutingModule } from './board-game-tools-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CoinFlipComponent } from './coin-flip/coin-flip.component';
import { DraftStartComponent } from './draft/draft-start/draft-start.component';
import { ToastComponent } from '../shared/components/toast/toast.component';
import { DraftPickComponent } from './draft/draft-pick/draft-pick.component';
import { DraftResultsComponent } from './draft/draft-results/draft-results.component';
import { DraftItemsComponent } from './draft/draft-items/draft-items.component';



@NgModule({
  declarations: [
    ActionTimerComponent,
    RandomizeTeamsStartComponent,
    RandomizeTeamsResultsComponent,
    CoinFlipComponent,
    DraftStartComponent,
    DraftPickComponent,
    DraftResultsComponent,
    DraftItemsComponent,
  ],
  imports: [
    CommonModule,
    BoardGameToolsRoutingModule,
    FormsModule,
    SharedModule,
    ToastComponent
  ]
})
export class BoardGameToolsModule { }

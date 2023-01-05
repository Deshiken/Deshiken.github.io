import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionTimerComponent } from './action-timer/action-timer.component';
import { RandomizeTeamsStartComponent } from './randomize-teams/randomize-teams-start/randomize-teams-start.component';
import { RandomizeTeamsResultsComponent } from './randomize-teams/randomize-teams-results/randomize-teams-results.component';
import { BoardGameToolsRoutingModule } from './board-game-tools-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CoinFlipComponent } from './coin-flip/coin-flip.component';



@NgModule({
  declarations: [
    ActionTimerComponent,
    RandomizeTeamsStartComponent,
    RandomizeTeamsResultsComponent,
    CoinFlipComponent
  ],
  imports: [
    CommonModule,
    BoardGameToolsRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class BoardGameToolsModule { }

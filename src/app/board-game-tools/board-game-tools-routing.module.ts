import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerSelectComponent } from '../shared/components/player-select/player-select.component';
import { ActionTimerComponent } from './action-timer/action-timer.component';
import { CoinFlipComponent } from './coin-flip/coin-flip.component';
import { DraftItemsComponent } from './draft/draft-items/draft-items.component';
import { DraftPickComponent } from './draft/draft-pick/draft-pick.component';
import { DraftResultsComponent } from './draft/draft-results/draft-results.component';
import { DraftStartComponent } from './draft/draft-start/draft-start.component';
import { PointTrackerComponent } from './point-tracker/point-tracker.component';
import { RandomizeTeamsResultsComponent } from './randomize-teams/randomize-teams-results/randomize-teams-results.component';
import { RandomizeTeamsStartComponent } from './randomize-teams/randomize-teams-start/randomize-teams-start.component';

const routes: Routes = [
  { 
    path: 'randomize-teams-start', 
    component: RandomizeTeamsStartComponent, 
  },
  { 
    path: 'player-select',
    component: PlayerSelectComponent,
  },
  { 
    path: 'randomize-teams-results', 
    component: RandomizeTeamsResultsComponent, 
  },
  { 
    path: 'coin-flip', 
    component: CoinFlipComponent, 
  },
  {
    path: 'timer',
    component: ActionTimerComponent
  },
  {
    path: 'draft',
    component: DraftStartComponent
  },
  {
    path: 'draft-pick',
    component: DraftPickComponent
  },
  {
    path: 'draft-results',
    component: DraftResultsComponent
  },
  {
    path: 'draft-items',
    component: DraftItemsComponent
  },
  {
    path: 'point-tracker',
    component: PointTrackerComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardGameToolsRoutingModule { }

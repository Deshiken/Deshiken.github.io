import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlternateGameModesComponent } from './alternate-game-modes/alternate-game-modes.component';
import { DraftPickComponent } from './holas-draft/draft-pick/draft-pick.component';
import { DraftStartComponent } from './holas-draft/draft-start/draft-start.component';
import { DraftSummaryComponent } from './holas-draft/draft-summary/draft-summary.component';
import { PlayerSelectComponent } from './holas-draft/player-select/player-select.component';
import { HolasRulesUpdateComponent } from './holas-rules-update/holas-rules-update.component';
import { HolasComponent } from './holas.component';
import { RoundTimerComponent } from './round-timer/round-timer.component';


const routes: Routes = [
  { 
    path: '', 
    component: HolasComponent, 
  },
  { 
    path: 'round-timer',
    component: RoundTimerComponent,
  },
  { 
    path: 'alternate-game-modes',
    component: AlternateGameModesComponent,
  },
  { 
    path: 'holas-rules-update',
    component: HolasRulesUpdateComponent
  },
  { 
    path: 'holas-draft-start', 
    component: DraftStartComponent, 
  },
  { 
    path: 'player-select', 
    component: PlayerSelectComponent 
  },
  { 
    path: 'draft-pick', 
    component: DraftPickComponent 
  },
  { 
    path: 'draft-summary',
    component: DraftSummaryComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolasRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerSelectComponent } from '../shared/components/player-select/player-select.component';

import { ResultsComponent } from './results/results.component';
import { StartComponent } from './start/start.component';


const routes: Routes = [
  { 
    path: 'start', 
    component: StartComponent, 
  },
  { 
    path: 'player-select',
    component: PlayerSelectComponent,
  },
  { 
    path: 'results',
    component: ResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomizeRoutingModule { }

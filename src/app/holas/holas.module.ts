import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolasRoutingModule } from './holas-routing.module';
import { HolasComponent } from './holas.component';
import { DraftStartComponent } from './holas-draft/draft-start/draft-start.component';
import { FormsModule } from '@angular/forms';
import { PlayerSelectComponent } from './holas-draft/player-select/player-select.component';
import { DraftPickComponent } from './holas-draft/draft-pick/draft-pick.component';
import { DraftIconComponent } from './holas-draft/draft-icon/draft-icon.component';
import { SharedModule } from '../shared/shared.module';
import { DraftSummaryComponent } from './holas-draft/draft-summary/draft-summary.component';
import { HolasRulesUpdateComponent } from './holas-rules-update/holas-rules-update.component';


@NgModule({
  declarations: [
    HolasComponent,
    DraftStartComponent,
    PlayerSelectComponent,
    DraftPickComponent,
    DraftIconComponent,
    DraftSummaryComponent,
    HolasRulesUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HolasRoutingModule
  ]
})
export class HolasModule { }

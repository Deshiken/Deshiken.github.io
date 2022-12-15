import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KemetRoutingModule } from './kemet-routing.module';
import { UpgradeTilesComponent } from './upgrade-tiles/upgrade-tiles.component';
import { KemetHomeComponent } from './kemet-home/kemet-home.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpgradeTilesComponent,
    KemetHomeComponent
  ],
  imports: [
    CommonModule,
    KemetRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class KemetModule { }

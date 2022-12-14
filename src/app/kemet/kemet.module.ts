import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KemetRoutingModule } from './kemet-routing.module';
import { UpgradeTilesComponent } from './upgrade-tiles/upgrade-tiles.component';


@NgModule({
  declarations: [
    UpgradeTilesComponent
  ],
  imports: [
    CommonModule,
    KemetRoutingModule
  ]
})
export class KemetModule { }

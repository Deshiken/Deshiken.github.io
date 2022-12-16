import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UprisingRoutingModule } from './uprising-routing.module';
import { UprisingHomeComponent } from './uprising-home/uprising-home.component';
import { MercenaryPickerComponent } from './mercenary-picker/mercinary-picker.component'
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MapsAndPlayInstructionsComponent } from './maps-and-play-instructions/maps-and-play-instructions.component';
import { TileRandomizerComponent } from './tile-randomizer/tile-randomizer.component';


@NgModule({
  declarations: [
    UprisingHomeComponent,
    MercenaryPickerComponent,
    MapsAndPlayInstructionsComponent,
    TileRandomizerComponent
  ],
  imports: [
    CommonModule,
    UprisingRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class UprisingModule { }

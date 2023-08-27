import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UprisingRoutingModule } from './uprising-routing.module';
import { UprisingHomeComponent } from './uprising-home/uprising-home.component';
import { MercenaryPickerComponent } from './mercenary-picker/mercinary-picker.component'
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MapsAndPlayInstructionsComponent } from './maps-and-play-instructions/maps-and-play-instructions.component';
import { TileRandomizerComponent } from './tile-randomizer/tile-randomizer.component';
import { ReferenceCardsComponent } from './reference-cards/reference-cards.component';
import { MapDetailsComponent } from './map-details/map-details.component';
import { MapBuilderComponent } from './map-builder/map-builder.component';
import { UprisingFactionsComponent } from './uprising-factions/uprising-factions.component';
import { MapBuilderOptionsComponent } from './map-builder-options/map-builder-options.component';
import { ToastComponent } from '../shared/components/toast/toast.component';


@NgModule({
  declarations: [
    UprisingHomeComponent,
    MercenaryPickerComponent,
    MapsAndPlayInstructionsComponent,
    TileRandomizerComponent,
    ReferenceCardsComponent,
    MapDetailsComponent,
    MapBuilderComponent,
    UprisingFactionsComponent,
    MapBuilderOptionsComponent
  ],
  imports: [
    CommonModule,
    UprisingRoutingModule,
    FormsModule,
    SharedModule,
    ToastComponent,
  ]
})
export class UprisingModule { }

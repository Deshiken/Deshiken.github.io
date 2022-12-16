import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsAndPlayInstructionsComponent } from './maps-and-play-instructions/maps-and-play-instructions.component';
import { MercenaryPickerComponent } from './mercenary-picker/mercinary-picker.component';
import { TileRandomizerComponent } from './tile-randomizer/tile-randomizer.component';
import { UprisingHomeComponent } from './uprising-home/uprising-home.component';

const routes: Routes = [
  { path: '', component: UprisingHomeComponent},
  { path: 'mercenary-picker', component: MercenaryPickerComponent},
  { path: 'maps', component: MapsAndPlayInstructionsComponent},
  { path: 'tile-randomizer', component: TileRandomizerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UprisingRoutingModule { }

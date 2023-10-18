import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapBuilderOptionsComponent } from './map-builder-options/map-builder-options.component';
import { MapBuilderComponent } from './map-builder/map-builder.component';
import { MapDetailsComponent } from './map-details/map-details.component';
import { MapsAndPlayInstructionsComponent } from './maps-and-play-instructions/maps-and-play-instructions.component';
import { MercenaryPickerComponent } from './mercenary-picker/mercinary-picker.component';
import { TileRandomizerComponent } from './tile-randomizer/tile-randomizer.component';
import { ReferenceCardsComponent } from './reference-cards/reference-cards.component';
import { UprisingFactionsComponent } from './uprising-factions/uprising-factions.component';
import { UprisingHomeComponent } from './uprising-home/uprising-home.component';
import { SpellCardsComponent } from './spell-cards/spell-cards.component';
import { SpellCardPrintSheetComponent } from './spell-cards/spell-card-print-sheet/spell-card-print-sheet.component';

const routes: Routes = [
  { path: '', component: UprisingHomeComponent},
  { path: 'mercenary-picker', component: MercenaryPickerComponent},
  { path: 'maps', component: MapsAndPlayInstructionsComponent},
  { path: 'tile-randomizer', component: TileRandomizerComponent},
  { path: 'reference-cards', component: ReferenceCardsComponent},
  { path: 'map-details/:id', component: MapDetailsComponent},
  { path: 'map-builder', component: MapBuilderComponent},
  { path: 'map-builder-options', component: MapBuilderOptionsComponent},
  { path: 'factions', component: UprisingFactionsComponent},
  { path: 'spell-cards', component: SpellCardsComponent},
  { path: 'spell-cards-print-sheet', component: SpellCardPrintSheetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UprisingRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KemetHomeComponent } from './kemet-home/kemet-home.component';
import { UpgradeTilesComponent } from './upgrade-tiles/upgrade-tiles.component';

const routes: Routes = [
  { path: '', component: KemetHomeComponent},
  { path: 'upgrade-tiles', component: UpgradeTilesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class KemetRoutingModule { 
}

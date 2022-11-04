import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MercenaryPickerComponent } from './mercenary-picker/mercinary-picker.component';
import { UprisingHomeComponent } from './uprising-home/uprising-home.component';

const routes: Routes = [
  { path: '', component: UprisingHomeComponent},
  { path: 'mercenary-picker', component: MercenaryPickerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UprisingRoutingModule { }

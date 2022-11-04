import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UprisingRoutingModule } from './uprising-routing.module';
import { UprisingHomeComponent } from './uprising-home/uprising-home.component';
import { MercenaryPickerComponent } from './mercenary-picker/mercinary-picker.component'
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UprisingHomeComponent,
    MercenaryPickerComponent
  ],
  imports: [
    CommonModule,
    UprisingRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class UprisingModule { }

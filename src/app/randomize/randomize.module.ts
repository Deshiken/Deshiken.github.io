import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { ResultsComponent } from './results/results.component';
import { RandomizeRoutingModule } from './randomize-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    StartComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    RandomizeRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class RandomizeModule { }

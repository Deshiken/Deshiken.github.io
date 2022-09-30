import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicGrowDirective } from './directives/dynamic-grow-directive';
import { SmoothHeightComponent } from './components/smooth-height/smooth-height.component';



@NgModule({
  declarations: [
    DynamicGrowDirective,
    SmoothHeightComponent
  ],
  exports: [
    DynamicGrowDirective,
    SmoothHeightComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

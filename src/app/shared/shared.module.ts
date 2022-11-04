import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicGrowDirective } from './directives/dynamic-grow-directive';
import { SmoothHeightComponent } from './components/smooth-height/smooth-height.component';
import { HeadingWithBackComponent } from './components/heading-with-back/heading-with-back.component';



@NgModule({
  declarations: [
    DynamicGrowDirective,
    SmoothHeightComponent,
    HeadingWithBackComponent
  ],
  exports: [
    DynamicGrowDirective,
    HeadingWithBackComponent,
    SmoothHeightComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

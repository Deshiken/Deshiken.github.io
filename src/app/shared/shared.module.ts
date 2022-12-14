import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicGrowDirective } from './directives/dynamic-grow-directive';
import { SmoothHeightComponent } from './components/smooth-height/smooth-height.component';
import { HeadingWithBackComponent } from './components/heading-with-back/heading-with-back.component';
import { PlayerSelectComponent } from './components/player-select/player-select.component';
import { PlayerIconComponent } from './components/player-icon/player-icon.component';



@NgModule({
  declarations: [
    DynamicGrowDirective,
    SmoothHeightComponent,
    HeadingWithBackComponent,
    PlayerSelectComponent,
    PlayerIconComponent
  ],
  exports: [
    DynamicGrowDirective,
    HeadingWithBackComponent,
    PlayerSelectComponent,
    PlayerIconComponent,
    SmoothHeightComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

import { CommonModule } from '@angular/common';
import { VersionedUprisingTacticsUnits, versionedUprisingTacticsUnits } from './../units';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UprisingUnitsComponent } from "../uprising-units/uprising-units.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-uprising-tactics-home',
  standalone: true,
  imports: [CommonModule, SharedModule, FormsModule, UprisingUnitsComponent, UprisingUnitsComponent],
  templateUrl: './uprising-tactics-home.component.html',
  styleUrl: './uprising-tactics-home.component.scss'
})

export class UprisingTacticsHomeComponent {
  public router = inject(Router);
  public uprisingTacticsUnitsVersion = versionedUprisingTacticsUnits[versionedUprisingTacticsUnits.length - 1].version; // Default to latest version;
  public versionedUprisingTacticsUnits: Array<VersionedUprisingTacticsUnits> = versionedUprisingTacticsUnits; // Make arrays of units seperated by version available to template 

  constructor() {
    console.log("versionedUprisingTacticsUnits:", this.versionedUprisingTacticsUnits);
  }
}

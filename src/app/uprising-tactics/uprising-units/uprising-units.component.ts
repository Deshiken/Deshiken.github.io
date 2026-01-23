import { Component, Input, SimpleChanges } from '@angular/core';
import { versionedUprisingTacticsUnits, UprisingTacticsUnit } from '../units';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uprising-units',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uprising-units.component.html',
  styleUrl: './uprising-units.component.scss'
})

export class UprisingUnitsComponent {
  units: UprisingTacticsUnit[] = [];
  @Input() version: string = versionedUprisingTacticsUnits[versionedUprisingTacticsUnits.length - 1].version; // Default to latest version

  ngOnChanges(changes: SimpleChanges) {
    if (changes.version) {
      this.updateUnitsFromVersion();  
    }
  }

  constructor() {
    this.updateUnitsFromVersion();
  }
  

  private updateUnitsFromVersion() {
    const versionData = versionedUprisingTacticsUnits.find(v => v.version === this.version);
    if (versionData) {
      this.units = versionData.units;
    }
  }
}

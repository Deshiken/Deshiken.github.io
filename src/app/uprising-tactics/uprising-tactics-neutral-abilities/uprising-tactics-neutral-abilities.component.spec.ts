import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UprisingTacticsNeutralAbilitiesComponent } from './uprising-tactics-neutral-abilities.component';

describe('UprisingTacticsNeutralAbilitiesComponent', () => {
  let component: UprisingTacticsNeutralAbilitiesComponent;
  let fixture: ComponentFixture<UprisingTacticsNeutralAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UprisingTacticsNeutralAbilitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UprisingTacticsNeutralAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UprisingUnitsComponent } from './uprising-units.component';

describe('UprisingUnitsComponent', () => {
  let component: UprisingUnitsComponent;
  let fixture: ComponentFixture<UprisingUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UprisingUnitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UprisingUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

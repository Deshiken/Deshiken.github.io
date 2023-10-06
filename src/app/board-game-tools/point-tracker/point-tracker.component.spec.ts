import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointTrackerComponent } from './point-tracker.component';

describe('PointTrackerComponent', () => {
  let component: PointTrackerComponent;
  let fixture: ComponentFixture<PointTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

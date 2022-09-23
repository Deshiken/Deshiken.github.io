import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundTimerComponent } from './round-timer.component';

describe('RoundTimerComponent', () => {
  let component: RoundTimerComponent;
  let fixture: ComponentFixture<RoundTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

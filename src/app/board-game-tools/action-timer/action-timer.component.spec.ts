import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTimerComponent } from './action-timer.component';

describe('ActionTimerComponent', () => {
  let component: ActionTimerComponent;
  let fixture: ComponentFixture<ActionTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

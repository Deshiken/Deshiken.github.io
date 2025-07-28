import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessTimerStartComponent } from './chess-timer-start.component';

describe('ChessTimerStartComponent', () => {
  let component: ChessTimerStartComponent;
  let fixture: ComponentFixture<ChessTimerStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessTimerStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChessTimerStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

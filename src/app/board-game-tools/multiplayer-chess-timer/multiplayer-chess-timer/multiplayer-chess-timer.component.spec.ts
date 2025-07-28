import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayerChessTimerComponent } from './multiplayer-chess-timer.component';

describe('MultiplayerChessTimerComponent', () => {
  let component: MultiplayerChessTimerComponent;
  let fixture: ComponentFixture<MultiplayerChessTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplayerChessTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplayerChessTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

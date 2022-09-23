import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateGameModesComponent } from './alternate-game-modes.component';

describe('AlternateGameModesComponent', () => {
  let component: AlternateGameModesComponent;
  let fixture: ComponentFixture<AlternateGameModesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternateGameModesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternateGameModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

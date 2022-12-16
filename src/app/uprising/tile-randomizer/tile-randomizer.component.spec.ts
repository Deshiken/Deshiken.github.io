import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileRandomizerComponent } from './tile-randomizer.component';

describe('TileRandomizerComponent', () => {
  let component: TileRandomizerComponent;
  let fixture: ComponentFixture<TileRandomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileRandomizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

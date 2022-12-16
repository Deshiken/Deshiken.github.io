import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsAndPlayInstructionsComponent } from './maps-and-play-instructions.component';

describe('MapsAndPlayInstructionsComponent', () => {
  let component: MapsAndPlayInstructionsComponent;
  let fixture: ComponentFixture<MapsAndPlayInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsAndPlayInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsAndPlayInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

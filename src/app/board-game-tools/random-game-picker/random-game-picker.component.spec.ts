import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomGamePickerComponent } from './random-game-picker.component';

describe('RandomGamePickerComponent', () => {
  let component: RandomGamePickerComponent;
  let fixture: ComponentFixture<RandomGamePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomGamePickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomGamePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

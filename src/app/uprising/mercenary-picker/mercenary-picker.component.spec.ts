import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercenaryPickerComponent } from './mercenary-picker.component';

describe('MercenaryPickerComponent', () => {
  let component: MercenaryPickerComponent;
  let fixture: ComponentFixture<MercenaryPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercenaryPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercenaryPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

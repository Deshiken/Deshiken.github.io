import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolasComponent } from './holas.component';

describe('HolasComponent', () => {
  let component: HolasComponent;
  let fixture: ComponentFixture<HolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

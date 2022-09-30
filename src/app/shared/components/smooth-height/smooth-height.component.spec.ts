import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothHeightComponent } from './smooth-height.component';

describe('SmoothHeightComponent', () => {
  let component: SmoothHeightComponent;
  let fixture: ComponentFixture<SmoothHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmoothHeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

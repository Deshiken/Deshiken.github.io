import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UprisingHomeComponent } from './uprising-home.component';

describe('UprisingHomeComponent', () => {
  let component: UprisingHomeComponent;
  let fixture: ComponentFixture<UprisingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UprisingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UprisingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescentComponent } from './descent.component';

describe('DescentComponent', () => {
  let component: DescentComponent;
  let fixture: ComponentFixture<DescentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

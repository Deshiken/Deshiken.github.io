import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescentHomeComponent } from './descent-home.component';

describe('DescentHomeComponent', () => {
  let component: DescentHomeComponent;
  let fixture: ComponentFixture<DescentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DescentHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

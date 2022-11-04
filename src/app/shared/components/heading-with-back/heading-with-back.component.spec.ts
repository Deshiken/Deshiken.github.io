import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingWithBackComponent } from './heading-with-back.component';

describe('HeadingWithBackComponent', () => {
  let component: HeadingWithBackComponent;
  let fixture: ComponentFixture<HeadingWithBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingWithBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingWithBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

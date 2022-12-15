import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemetHomeComponent } from './kemet-home.component';

describe('KemetHomeComponent', () => {
  let component: KemetHomeComponent;
  let fixture: ComponentFixture<KemetHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KemetHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KemetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

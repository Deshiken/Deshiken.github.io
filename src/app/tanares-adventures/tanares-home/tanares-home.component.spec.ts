import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanaresHomeComponent } from './tanares-home.component';

describe('TanaresHomeComponent', () => {
  let component: TanaresHomeComponent;
  let fixture: ComponentFixture<TanaresHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanaresHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanaresHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

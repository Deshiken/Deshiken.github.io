import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanaresAdventuresComponent } from './tanares-adventures.component';

describe('TanaresAdventuresComponent', () => {
  let component: TanaresAdventuresComponent;
  let fixture: ComponentFixture<TanaresAdventuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanaresAdventuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanaresAdventuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

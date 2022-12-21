import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitReferenceCardsComponent } from './unit-reference-cards.component';

describe('UnitReferenceCardsComponent', () => {
  let component: UnitReferenceCardsComponent;
  let fixture: ComponentFixture<UnitReferenceCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitReferenceCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitReferenceCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

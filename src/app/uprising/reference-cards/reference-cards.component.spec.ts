import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceCardsComponent } from './reference-cards.component';

describe('ReferenceCardsComponent', () => {
  let component: ReferenceCardsComponent;
  let fixture: ComponentFixture<ReferenceCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

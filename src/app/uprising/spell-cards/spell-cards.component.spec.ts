import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCardsComponent } from './spell-cards.component';

describe('SpellCardsComponent', () => {
  let component: SpellCardsComponent;
  let fixture: ComponentFixture<SpellCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

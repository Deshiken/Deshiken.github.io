import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintableSpellCardComponent } from './printable-spell-card.component';

describe('PrintableSpellCardComponent', () => {
  let component: PrintableSpellCardComponent;
  let fixture: ComponentFixture<PrintableSpellCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintableSpellCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintableSpellCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

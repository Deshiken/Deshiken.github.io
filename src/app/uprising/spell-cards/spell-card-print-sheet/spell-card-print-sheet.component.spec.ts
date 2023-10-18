import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCardPrintSheetComponent } from './spell-card-print-sheet.component';

describe('SpellCardPrintSheetComponent', () => {
  let component: SpellCardPrintSheetComponent;
  let fixture: ComponentFixture<SpellCardPrintSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellCardPrintSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellCardPrintSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

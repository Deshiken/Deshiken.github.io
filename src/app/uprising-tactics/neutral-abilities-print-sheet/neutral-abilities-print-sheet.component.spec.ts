import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeutralAbilitiesPrintSheetComponent } from './neutral-abilities-print-sheet.component';

describe('NeutralAbilitiesPrintSheetComponent', () => {
  let component: NeutralAbilitiesPrintSheetComponent;
  let fixture: ComponentFixture<NeutralAbilitiesPrintSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeutralAbilitiesPrintSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeutralAbilitiesPrintSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

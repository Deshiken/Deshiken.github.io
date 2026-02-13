import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintableNeutralAbilityComponent } from './printable-neutral-ability.component';

describe('PrintableNeutralAbilityComponent', () => {
  let component: PrintableNeutralAbilityComponent;
  let fixture: ComponentFixture<PrintableNeutralAbilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintableNeutralAbilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintableNeutralAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolasRulesUpdateComponent } from './holas-rules-update.component';

describe('HolasRulesUpdateComponent', () => {
  let component: HolasRulesUpdateComponent;
  let fixture: ComponentFixture<HolasRulesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolasRulesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolasRulesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftResultsComponent } from './draft-results.component';

describe('DraftResultsComponent', () => {
  let component: DraftResultsComponent;
  let fixture: ComponentFixture<DraftResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanaresDraftResultsComponent } from './tanares-draft-results.component';

describe('TanaresDraftResultsComponent', () => {
  let component: TanaresDraftResultsComponent;
  let fixture: ComponentFixture<TanaresDraftResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TanaresDraftResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanaresDraftResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescentPartyBuilderResultsComponent } from './descent-party-builder-results.component';

describe('DescentPartyBuilderResultsComponent', () => {
  let component: DescentPartyBuilderResultsComponent;
  let fixture: ComponentFixture<DescentPartyBuilderResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DescentPartyBuilderResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescentPartyBuilderResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizeTeamsResultsComponent } from './randomize-teams-results.component';

describe('RandomizeTeamsResultsComponent', () => {
  let component: RandomizeTeamsResultsComponent;
  let fixture: ComponentFixture<RandomizeTeamsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomizeTeamsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizeTeamsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

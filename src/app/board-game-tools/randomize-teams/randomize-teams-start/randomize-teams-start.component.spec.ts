import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizeTeamsStartComponent } from './randomize-teams-start.component';

describe('RandomizeTeamsStartComponent', () => {
  let component: RandomizeTeamsStartComponent;
  let fixture: ComponentFixture<RandomizeTeamsStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomizeTeamsStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizeTeamsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftIconComponent } from './draft-icon.component';

describe('DraftIconComponent', () => {
  let component: DraftIconComponent;
  let fixture: ComponentFixture<DraftIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

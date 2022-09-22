import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftPickComponent } from './draft-pick.component';

describe('DraftPickComponent', () => {
  let component: DraftPickComponent;
  let fixture: ComponentFixture<DraftPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftPickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

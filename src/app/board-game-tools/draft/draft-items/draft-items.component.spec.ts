import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftItemsComponent } from './draft-items.component';

describe('DraftItemsComponent', () => {
  let component: DraftItemsComponent;
  let fixture: ComponentFixture<DraftItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

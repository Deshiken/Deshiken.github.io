import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UprisingActionsComponent } from './uprising-actions.component';

describe('UprisingActionsComponent', () => {
  let component: UprisingActionsComponent;
  let fixture: ComponentFixture<UprisingActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UprisingActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UprisingActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

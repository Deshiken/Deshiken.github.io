import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UprisingFactionsComponent } from './uprising-factions.component';

describe('UprisingFactionsComponent', () => {
  let component: UprisingFactionsComponent;
  let fixture: ComponentFixture<UprisingFactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UprisingFactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UprisingFactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

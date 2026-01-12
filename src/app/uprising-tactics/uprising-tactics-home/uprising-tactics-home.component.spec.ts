import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UprisingTacticsHomeComponent } from './uprising-tactics-home.component';

describe('UprisingTacticsHomeComponent', () => {
  let component: UprisingTacticsHomeComponent;
  let fixture: ComponentFixture<UprisingTacticsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UprisingTacticsHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UprisingTacticsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

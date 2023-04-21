import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDetailsComponent } from './map-details.component';

describe('MapDetailsComponent', () => {
  let component: MapDetailsComponent;
  let fixture: ComponentFixture<MapDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBuilderOptionsComponent } from './map-builder-options.component';

describe('MapBuilderOptionsComponent', () => {
  let component: MapBuilderOptionsComponent;
  let fixture: ComponentFixture<MapBuilderOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapBuilderOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapBuilderOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

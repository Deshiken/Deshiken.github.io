import { TestBed } from '@angular/core/testing';

import { MapBuilderService } from './map-builder.service';

describe('MapBuilderService', () => {
  let service: MapBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

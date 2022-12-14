import { TestBed } from '@angular/core/testing';

import { RandomizeService } from './randomize.service';

describe('RandomizeService', () => {
  let service: RandomizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

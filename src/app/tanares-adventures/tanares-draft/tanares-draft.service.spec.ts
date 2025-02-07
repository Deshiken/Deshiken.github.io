import { TestBed } from '@angular/core/testing';

import { TanaresDraftService } from './tanares-draft-service.service';

describe('TanaresDraftService', () => {
  let service: TanaresDraftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TanaresDraftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

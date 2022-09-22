import { TestBed } from '@angular/core/testing';

import { HolasDraftService } from './holas-draft.service';

describe('HolasDraftService', () => {
  let service: HolasDraftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolasDraftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

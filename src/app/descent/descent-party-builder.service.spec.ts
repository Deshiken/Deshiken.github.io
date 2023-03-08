import { TestBed } from '@angular/core/testing';

import { DescentPartyBuilderService } from './descent-party-builder.service';

describe('DescentPartyBuilderService', () => {
  let service: DescentPartyBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescentPartyBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

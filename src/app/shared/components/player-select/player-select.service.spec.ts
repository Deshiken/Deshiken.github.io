import { TestBed } from '@angular/core/testing';

import { PlayerSelectService } from './player-select.service';

describe('PlayerSelectService', () => {
  let service: PlayerSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

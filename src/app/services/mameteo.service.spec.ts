import { TestBed } from '@angular/core/testing';

import { MameteoService } from './mameteo.service';

describe('MameteoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MameteoService = TestBed.get(MameteoService);
    expect(service).toBeTruthy();
  });
});

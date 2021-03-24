import { TestBed } from '@angular/core/testing';

import { ProprieteService } from './propriete.service';

describe('ProprieteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProprieteService = TestBed.get(ProprieteService);
    expect(service).toBeTruthy();
  });
});

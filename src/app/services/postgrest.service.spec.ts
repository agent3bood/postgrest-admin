import { TestBed } from '@angular/core/testing';

import { PostgrestService } from './postgrest.service';

describe('PostgrestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostgrestService = TestBed.get(PostgrestService);
    expect(service).toBeTruthy();
  });
});

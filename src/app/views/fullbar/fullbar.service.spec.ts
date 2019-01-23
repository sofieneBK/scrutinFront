import { TestBed } from '@angular/core/testing';

import { FullbarService } from './fullbar.service';

describe('FullbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullbarService = TestBed.get(FullbarService);
    expect(service).toBeTruthy();
  });
});

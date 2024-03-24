import { TestBed } from '@angular/core/testing';

import { UtitltyService } from './utitlty.service';

describe('UtitltyService', () => {
  let service: UtitltyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtitltyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

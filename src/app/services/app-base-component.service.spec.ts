import { TestBed } from '@angular/core/testing';

import { AppBaseComponentService } from './app-base-component.service';

describe('AppBaseComponentService', () => {
  let service: AppBaseComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppBaseComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

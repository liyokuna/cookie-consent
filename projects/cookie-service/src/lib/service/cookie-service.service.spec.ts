import { TestBed } from '@angular/core/testing';

import { CookieServiceService } from './cookie-service.service';

describe('CookieServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookieServiceService = TestBed.get(CookieServiceService);
    expect(service).toBeTruthy();
  });
});

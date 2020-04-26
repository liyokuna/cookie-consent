import { TestBed } from '@angular/core/testing';

import { CookieServiceService } from './cookie-service.service';

describe('CookieServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookieServiceService = TestBed.inject(CookieServiceService);
    expect(service).toBeTruthy();
  });
});

describe('CookieServiceService', () => {
  let service: CookieServiceService;
  beforeEach(() => { service = new CookieServiceService(); });

  it('#getCookie should return a boolean value', () => {
    service.setCookie('test', true, 'localhost');

    expect(service.getCookie('test')).toBeTruthy();
  });

  it('#getCookie should return a string value', () => {
    service.setCookieWithString('stringTest', 'test', 'localhost');

    expect(service.getCookie('stringTest')).toBe('test');
  });

  it('#isAnalytics should return a boolean value', () => {
    expect(service.isAnalytics('UA-0000-23')).toBeTruthy();
  });

  it('#isAnalytics should return a boolean value', () => {
    expect(service.isAnalytics('UA-0000-23')).toBeTruthy();
  });

  it('#getCookie should return a undefined value after deleting stringtest cookie', () => {
    service.deleteCookie('stringTest');

    expect(service.getCookie('stringTest')).toBeUndefined();
  });

  it('#getCookie should return a undefined value after deleting test cookie', () => {
    service.deleteCookie('test');

    expect(service.getCookie('test')).toBeUndefined();
  });
});

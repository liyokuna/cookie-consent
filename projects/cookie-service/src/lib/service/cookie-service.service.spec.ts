import { TestBed } from '@angular/core/testing';

import { CookieServiceService } from './cookie-service.service';

describe('CookieServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookieServiceService = TestBed.get(CookieServiceService);
    expect(service).toBeTruthy();
  });
});

describe('CookieServiceService', () => {
  let service: CookieServiceService;
  beforeEach(() => { service = new CookieServiceService(); });

  it('#setCookie should set a boolean value', ()=> {
    service.setCookie('test', true);
  });

  it('#setCookieWithString should set a string value', ()=> {
    service.setCookieWithString('stringTest', 'test');
  });

  it('#getCookie should return a boolean value', ()=> {
    expect(service.getCookie('test')).toBeTruthy();
  });

  it('#getCookie should return a string value', ()=> {
    expect(service.getCookie('stringTest')).toBe('test');
  });

  it('#isAnalytics should return a boolean value', ()=> {
    expect(service.isAnalytics('UA-0000-23')).toBeTruthy();
  });

});
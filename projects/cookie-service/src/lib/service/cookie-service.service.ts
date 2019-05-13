import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieServiceService {

  constructor() { }
  private GA_COOKIE_NAMES = ['_ga', '_gat'];

  public setCookie(name: String, val: Boolean, domain: String) {
      const date = new Date();
      const value = val;
      // Set it expire in 395 days, compliance with Cookie Laws in EU
      date.setTime(date.getTime() + (395 * 24 * 60 * 60 * 1000));
      document.cookie = name + ' = ' + value + '; expires=' + date.toUTCString() + '; path=/' + '; domain=' + domain;
  }

  public setCookieWithString(name: String, val: String, domain: String) {
      const date = new Date();
      const value = val;
      // Set it expire in 395 days, compliance with Cookie Laws in EU
      date.setTime(date.getTime() + (395 * 24 * 60 * 60 * 1000));
      document.cookie = name + ' = ' + value + '; expires=' + date.toUTCString() + '; path=/' + '; domain=' + domain;
  }

  public getCookie(name: String) {
      const value = '; ' + document.cookie;
      const parts = value.split('; ' + name + '=');
      if (parts.length === 2) {
          return parts.pop().split(';').shift();
      }
  }

  public deleteCookie(name: String) {
      const date = new Date();
      date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
      document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
  }

  public rejectCookie(gaId: String) {
      // disable GA
      this.deleteCookie(`ga-disable-${gaId}`);
      this.deleteCookie('consent');
      window[`ga-disable-${gaId}`] = true;
      this.GA_COOKIE_NAMES.forEach((cookieName) => {
        this.deleteCookie(cookieName);
      });
  }

  public isAnalytics(str: String) {
    return (/^ua-\d{4,9}-\d{1,4}$/i).test(str.toString());
  }
}

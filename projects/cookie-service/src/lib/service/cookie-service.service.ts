import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieServiceService {

  constructor() { }
  private GA_COOKIE_NAMES = ['__utma', '__utmb', '__utmc', '__utmz', '_ga', '_gid', '_gat', '_gat_gtag'];

  public setCookie(name: string, val: boolean, domain: string) {
      const date = new Date();
      const value = val;
      // Set it expire in 395 days, compliance with Cookie Laws in EU
      date.setTime(date.getTime() + (395 * 24 * 60 * 60 * 1000));
      document.cookie = name + ' = ' + value + '; expires=' + date.toUTCString() + '; path=/' ;
  }

  public setCookieWithString(name: string, val: string, domain: string) {
      const date = new Date();
      const value = val;
      // Set it expire in 395 days, compliance with Cookie Laws in EU
      date.setTime(date.getTime() + (395 * 24 * 60 * 60 * 1000));
      document.cookie = name + ' = ' + value + '; expires=' + date.toUTCString() + '; path=/' ;
  }

  public getCookie(name: string) {
      const value = '; ' + document.cookie;
      const parts = value.split('; ' + name + '=');
      if (parts.length === 2) {
          return parts.pop().split(';').shift();
      }
  }

  public deleteCookie(name: string) {
      const date = new Date();
      date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
      document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
  }

  public rejectCookie(gaId: string) {
      // disable GA
      this.deleteCookie(`ga-disable-${gaId}`);
      this.deleteCookie('consent');
      window[`ga-disable-${gaId}`] = true;
      window[`_gat_gtag_${gaId}`] = false;
      this.GA_COOKIE_NAMES.forEach((cookieName) => {
        this.deleteCookie(cookieName);
      });
  }

  public isAnalytics(str: string) {
    return (/^ua-\d{4,9}-\d{1,4}$/i).test(str.toString());
  }
}

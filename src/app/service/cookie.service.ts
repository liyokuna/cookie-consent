import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  private GA_COOKIE_NAMES = ['_ga', '_gat'];

  setCookie(name: string, val: boolean) {
    const date = new Date();
    const value = val;
    // Set it expire in 395 days, compliance with Cookie Laws in EU
    date.setTime(date.getTime() + (395 * 24 * 60 * 60 * 1000));
    document.cookie = name + ' = ' + value + '; expires=' + date.toUTCString() + '; path=/';
  }

  getCookie(name: string) {
      const value = '; ' + document.cookie;
      const parts = value.split('; ' + name + '=');
      if (parts.length === 2) {
          return parts.pop().split(';').shift();
      }
  }

  deleteCookie(name: string) {
      const date = new Date();
      date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
      document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
  }

  rejectCookie(gaId: string) {
      // disable GA
      this.setCookie(`ga-disable-${gaId}`, true);
      this.setCookie(`consent`, false);
      window[`ga-disable-${gaId}`] = true;
      this.GA_COOKIE_NAMES.forEach((cookieName) => {
        this.deleteCookie(cookieName);
      });
  }
}

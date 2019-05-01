import { Injectable, Inject } from '@angular/core';
import { CookieServiceConfig, CookieServiceConfigService } from '../cookie-service.module';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookieServiceService {

  constructor(@Inject(CookieServiceConfigService) private config: CookieServiceConfig) { }
  private GA_COOKIE_NAMES = ['_ga', '_gat'];

  public getConfig(): Observable<CookieServiceConfig> {
    return of(this.config);
  }

  public getHeader(): Observable<String> {
    return of(this.config.header);
  }

  public getMessage(): Observable<String> {
    return of(this.config.message);
  }

  public getDeny(): Observable<String> {
    return of(this.config.deny);
  }

  public getAllow(): Observable<String> {
    return of(this.config.allow);
  }

  public getAccept(): Observable<String> {
    return of(this.config.accept);
  }

  public getAcceptButton(): Observable<Boolean> {
    return of(this.config.button.accept);
  }

  public getDeclinetButton(): Observable<Boolean> {
    return of(this.config.button.decline);
  }

  public getAllowButton(): Observable<Boolean> {
    return of(this.config.button.allow);
  }

  public setCookie(name: String, val: Boolean) {
      const date = new Date();
      const value = val;
      // Set it expire in 395 days, compliance with Cookie Laws in EU
      date.setTime(date.getTime() + (395 * 24 * 60 * 60 * 1000));
      document.cookie = name + ' = ' + value + '; expires=' + date.toUTCString() + '; path=/';
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
      this.setCookie(`ga-disable-${gaId}`, true);
      this.setCookie(`consent`, false);
      window[`ga-disable-${gaId}`] = true;
      this.GA_COOKIE_NAMES.forEach((cookieName) => {
        this.deleteCookie(cookieName);
      });
    }

  public isAnalytics(str: String) {
        return (/^ua-\d{4,9}-\d{1,4}$/i).test(str.toString());
    }
}

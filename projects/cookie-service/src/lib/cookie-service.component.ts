import { Component, OnInit } from '@angular/core';
import { CookieServiceService } from './service/cookie-service.service';
import { ConfigService } from './service/config.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cookie-service',
  templateUrl: './cookie-service.component.html',
  styleUrls: ['./cookie-service.component.scss'],
  providers: [ CookieServiceService, ConfigService ]
})
export class CookieServiceComponent implements OnInit {

  GA_ID: String;

  header$: Observable<String>;
  message$: Observable<String>;
  HeaderColor: String;
  HeaderBackgroundColor: String;

  domain: String;

  AcceptMessage$: Observable<String>;
  AcceptEnable$: Observable<Boolean>;
  AcceptColor: String;
  AcceptBackgroundColor: String;

  DenyMessage$: Observable<String>;
  DenyEnable$: Observable<Boolean>;
  DenyColor: String;
  DenyBackgroundColor: String;

  AllowMessage$: Observable<String>;
  AllowEnable$: Observable<Boolean>;
  AllowColor: String;
  AllowBackgroundColor: String;

  LearnMoreMessage$: Observable<String>;
  LearnMoreEnable$: Observable<Boolean>;
  LearnMoreLink$: Observable<String>;
  LearnMoreColor: String;

  showAlertCookie: boolean;

  constructor(private cookiemanager: CookieServiceService, private cookieconfig: ConfigService) { }

  ngOnInit() {

    this.getValues();
    this.getColors();

    if(!this.cookiemanager.isAnalytics(this.GA_ID)) {
      this.GA_ID='0000';
      console.info('Your Google Analytics ID seems to have a problem');
      return;
    }

    if (!this.cookiemanager.getCookie('consent')) {
      this.showAlertCookie = true;
    }

    if (this.cookiemanager.getCookie('consent') && this.showAlertCookie) {
        const TrackNavigator = navigator.doNotTrack;
        if ( (TrackNavigator === '1' || TrackNavigator === 'yes' ) ) {
          this.cookiemanager.rejectCookie(this.GA_ID);
          this.showAlertCookie = false;
          return;
        }
        if ( this.cookiemanager.getCookie('consent') === 'false' && ( (TrackNavigator === '1' || TrackNavigator === 'yes' ) )) {
          this.cookiemanager.rejectCookie(this.GA_ID);
          this.showAlertCookie = false;
          return;
        }
        if ( this.cookiemanager.getCookie('consent') === 'false' ) {
          this.cookiemanager.rejectCookie(this.GA_ID);
          this.showAlertCookie = false;
          return;
      }
    }
  }

  private getValues() {
    this.header$ = this.cookieconfig.getHeader();
    
    this.message$ = this.cookieconfig.getMessage();

    this.AcceptMessage$ = this.cookieconfig.getAcceptMessage();
    this.AcceptEnable$ = this.cookieconfig.getAcceptEnable();

    this.LearnMoreMessage$ = this.cookieconfig.getLinkMessage();
    this.LearnMoreEnable$ = this.cookieconfig.getLinkEnable();
    this.LearnMoreLink$ = this.cookieconfig.getLinkLink();

    this.DenyMessage$ = this.cookieconfig.getDenyMessage();
    this.DenyEnable$ = this.cookieconfig.getDenyEnable();

    this.AllowMessage$ = this.cookieconfig.getAllowMessage();
    this.AllowEnable$ = this.cookieconfig.getAllowEnable();

    this.cookieconfig.getDomain().subscribe(val => this.domain = val);
    this.cookieconfig.getGA_id().subscribe(val => this.GA_ID = val)
  }

  private getColors() {
    this.cookieconfig.getHeaderColor().subscribe(val => this.HeaderColor = val);
    this.cookieconfig.getHeaderBackgroundColor().subscribe(val => this.HeaderBackgroundColor = val);

    this.cookieconfig.getAcceptColor().subscribe(val => this.AcceptColor = val);
    this.cookieconfig.getAcceptBackgroundColor().subscribe(val => this.AcceptBackgroundColor = val);

    this.cookieconfig.getDenyColor().subscribe(val => this.DenyColor = val);
    this.cookieconfig.getDenyBackgroundColor().subscribe(val => this.DenyBackgroundColor = val);

    this.cookieconfig.getAllowColor().subscribe(val => this.AllowColor = val);
    this.cookieconfig.getAllowBackgroundColor().subscribe(val => this.AllowBackgroundColor = val);

    this.cookieconfig.getLinkColor().subscribe(val => this.LearnMoreColor = val);
  }

  public cssClass(color: String, bcolor: String) {
    return {
      'color': color,
      'background-color': bcolor,
      'border-color': bcolor,
    }
  }

  public deny() {
    this.cookiemanager.rejectCookie(this.GA_ID);
    this.cookiemanager.setCookie('consent', true, this.domain);
    this.showAlertCookie = false;
    return;
  }

  public allow() {
    this.cookiemanager.setCookie('consent', true, this.domain);
    this.showAlertCookie = false;
    return;
  }

}

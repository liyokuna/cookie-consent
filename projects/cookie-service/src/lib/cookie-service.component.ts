import { Component, OnInit } from '@angular/core';
import { CookieServiceService } from './service/cookie-service.service';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'cookie-service',
  templateUrl: './cookie-service.component.html',
  styleUrls: ['./cookie-service.component.scss'],
  providers: [ CookieServiceService, ConfigService ]
})
export class CookieServiceComponent implements OnInit {

  GA_ID: String;

  header: String;
  message: String;
  HeaderColor: String;
  HeaderBackgroundColor: String;

  domain: String;

  AcceptMessage: String;
  AcceptEnable: Boolean;
  AcceptColor: String;
  AcceptBackgroundColor: String;

  DenyMessage: String;
  DenyEnable: Boolean;
  DenyColor: String;
  DenyBackgroundColor: String;

  AllowMessage: String;
  AllowEnable: Boolean;
  AllowColor: String;
  AllowBackgroundColor: String;

  LearnMoreMessage: String;
  LearnMoreEnable: Boolean;
  LearnMoreLink: String;
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
    this.cookieconfig.getHeader().subscribe(val => this.header = val);
    
    this.cookieconfig.getMessage().subscribe(val => this.message = val);

    this.cookieconfig.getAcceptMessage().subscribe(val => this.AcceptMessage = val);
    this.cookieconfig.getAcceptEnable().subscribe(val => this.AcceptEnable = val);

    this.cookieconfig.getLinkMessage().subscribe(val => this.LearnMoreMessage = val);
    this.cookieconfig.getLinkEnable().subscribe(val => this.LearnMoreEnable = val);
    this.cookieconfig.getLinkLink().subscribe(val => this.LearnMoreLink = val);

    this.cookieconfig.getDenyMessage().subscribe(val => this.DenyMessage = val);
    this.cookieconfig.getDenyEnable().subscribe(val => this.DenyEnable = val);

    this.cookieconfig.getAllowMessage().subscribe(val => this.AllowMessage = val);
    this.cookieconfig.getAllowEnable().subscribe(val => this.AllowEnable =val );

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

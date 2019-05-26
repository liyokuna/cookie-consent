import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CookieServiceService } from './service/cookie-service.service';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'lib-cookie-service',
  templateUrl: './cookie-service.component.html',
  styleUrls: ['./cookie-service.component.scss'],
  providers: [ CookieServiceService, ConfigService ]
})
export class CookieServiceComponent implements OnInit {

  GA_ID: string;

  header: string;
  message: string;
  HeaderColor: string;
  HeaderBackgroundColor: string;

  domain: string;

  AcceptMessage: string;
  AcceptEnable: boolean;
  AcceptColor: string;
  AcceptBackgroundColor: string;

  DenyMessage: string;
  DenyEnable: boolean;
  DenyColor: string;
  DenyBackgroundColor: string;

  AllowMessage: string;
  AllowEnable: boolean;
  AllowColor: string;
  AllowBackgroundColor: string;

  LearnMoreMessage: string;
  LearnMoreEnable: boolean;
  LearnMoreLink: string;
  LearnMoreColor: string;

  ReviewEnable: boolean;
  Review: string;
  ReviewColor: string;
  ReviewBcolor: string;

  showAlertCookie: boolean;

  @Output() isOpened: EventEmitter<boolean> = new EventEmitter();

  constructor(private cookiemanager: CookieServiceService, private cookieconfig: ConfigService) { }

  ngOnInit() {

    this.getValues();
    this.getColors();

    if (!this.cookiemanager.isAnalytics(this.GA_ID)) {
      this.GA_ID =  '0000';
      console.log('Your Google Analytics ID seems to have a problem');
      return;
    }

    if (!this.cookiemanager.getCookie('consent')) {
      this.showAlertCookie = true;
      this.isOpened.emit(this.showAlertCookie);
    }

    if (this.cookiemanager.getCookie('consent') && this.showAlertCookie) {
        const TrackNavigator = navigator.doNotTrack;
        if ( (TrackNavigator === '1' || TrackNavigator === 'yes' ) ) {
          this.cookiemanager.rejectCookie(this.GA_ID);
          this.showAlertCookie = false;
          this.isOpened.emit(false);
          return;
        }
        if ( this.cookiemanager.getCookie('consent') === 'false' && ( (TrackNavigator === '1' || TrackNavigator === 'yes' ) )) {
          this.cookiemanager.rejectCookie(this.GA_ID);
          this.showAlertCookie = false;
          this.isOpened.emit(this.showAlertCookie);
          return;
        }
        if ( this.cookiemanager.getCookie('consent') === 'false' ) {
          this.cookiemanager.rejectCookie(this.GA_ID);
          this.showAlertCookie = false;
          this.isOpened.emit(this.showAlertCookie);
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
    this.cookieconfig.getAllowEnable().subscribe(val => this.AllowEnable = val);

    this.cookieconfig.getDomain().subscribe(val => this.domain = val);
    this.cookieconfig.getGA_id().subscribe(val => this.GA_ID = val);

    this.cookieconfig.getReviewEnable().subscribe(val => this.ReviewEnable = val);
    this.cookieconfig.getReviewMessage().subscribe(val => this.Review = val);
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

    this.cookieconfig.getReviewColor().subscribe(val => this.ReviewColor = val);
    this.cookieconfig.getReviewBackgroundColor().subscribe(val => this.ReviewBcolor = val);
  }

  public cssClass(color: string, bcolor: string) {
    return {
      'color': color,
      'background-color': bcolor,
      'border-color': bcolor,
    };
  }

  public deny() {
    this.cookiemanager.rejectCookie(this.GA_ID);
    this.cookiemanager.setCookie('consent', true, this.domain);
    this.showAlertCookie = false;
    this.isOpened.emit(this.showAlertCookie);
    return;
  }

  public allow() {
    this.cookiemanager.setCookie('consent', true, this.domain);
    this.showAlertCookie = false;
    this.isOpened.emit(this.showAlertCookie);
    return;
  }

  public review() {
    this.cookiemanager.rejectCookie(this.GA_ID);
    location.reload();
  }

}

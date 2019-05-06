import { Component, OnInit, Input } from '@angular/core';
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

  @Input() GA_ID: String;

  header$: Observable<String>;
  message$: Observable<String>;

  AcceptMessage$: Observable<String>;
  AcceptEnable$: Observable<Boolean>;

  DenyMessage$: Observable<String>;
  DenyEnable$: Observable<Boolean>;

  AllowMessage$: Observable<String>;
  AllowEnable$: Observable<Boolean>;

  LearnMoreMessage$: Observable<String>;
  LearnMoreEnable$: Observable<Boolean>;
  LearnMoreLink$: Observable<String>;

  showAlertCookie: boolean;

  constructor(private cookiemanager: CookieServiceService, private cookieconfig: ConfigService) { }

  ngOnInit() {

    this.getValues();

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
  }

  public deny() {
    this.cookiemanager.rejectCookie(this.GA_ID);
    this.showAlertCookie = false;
    return;
  }

  public allow() {
    this.cookiemanager.setCookie('consent', true);
    this.showAlertCookie = false;
    return;
  }

  public reset( ID: String) {
    this.cookiemanager.rejectCookie(ID);
    this.cookiemanager.rejectCookie('consent');
    return;
  }

}

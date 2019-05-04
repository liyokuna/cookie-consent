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

  @Input() GA_ID: string;

  AllowButton$: Observable<{ enable: Boolean; backgroundColor: String; color: String; }>;
  DeclineButton$: Observable<{ enable: Boolean; backgroundColor: String; color: String; }>;
  AcceptButton$: Observable<{ enable: Boolean; backgroundColor: String; color: String; }>;
  LinkButton$: Observable<{ enable: Boolean; link: String; }>;

  header$: Observable<String>;
  message$: Observable<String>;

  showAlertCookie: boolean;

  constructor(private cookiemanager: CookieServiceService, private cookieconfig: ConfigService) {  }

  ngOnInit() {
    this.header$ = this.cookieconfig.getHeader();
    
    this.message$ = this.cookieconfig.getMessage();

    this.AcceptButton$ = this.cookieconfig.getAcceptButton();
    this.AllowButton$ = this.cookieconfig.getAllowButton();
    this.DeclineButton$ = this.cookieconfig.getDeclinetButton();
    this.LinkButton$ = this.cookieconfig.getLinkButton();

    if(!this.cookiemanager.isAnalytics(this.GA_ID)) {
      this.GA_ID='0000';
      console.log('Your Google Analytics ID seems to have a problem');
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

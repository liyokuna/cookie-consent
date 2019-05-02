import { Component, OnInit, Input } from '@angular/core';
import { CookieServiceService } from './service/cookie-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cookie-service',
  templateUrl: './cookie-service.component.html',
  styleUrls: ['./cookie-service.component.scss'],
  providers: [ CookieServiceService ]
})
export class CookieServiceComponent implements OnInit {

  @Input() GA_ID: string;
  @Input() type: String;

  AllowButton: Observable<Boolean>;
  DeclineButton: Observable<Boolean>;
  AcceptButton: Observable<Boolean>;

  header: Observable<String>;
  message: Observable<String>;
  denybt: Observable<String>;
  allowbt: Observable<String>;
  acceptbt: Observable<String>;

  showAlertCookie: boolean;

  private types: String[] = ['success' , 'info' , 'warning' , 'danger' , 'primary' , 'secondary', 'light', 'dark'];

  constructor(private cookiemanager: CookieServiceService) {  }

  ngOnInit() {
    if(!this.types.includes(this.type)) {
      this.type='dark';
    }

    if(!this.cookiemanager.isAnalytics(this.GA_ID)) {
      this.GA_ID='0000';
      console.log('GA id UA Erro');
      return;
    }

    if (!this.cookiemanager.getCookie('consent')) {
      this.showAlertCookie = true;
    }

    if (this.cookiemanager.getCookie('consent') && this.showAlertCookie) {
        this.header = this.cookiemanager.getHeader();
        this.message = this.cookiemanager.getMessage();
        this.denybt = this.cookiemanager.getDeny();
        this.allowbt = this.cookiemanager.getAllow();
        this.acceptbt = this.cookiemanager.getAccept();

        this.AcceptButton = this.cookiemanager.getAcceptButton();
        this.AllowButton = this.cookiemanager.getAllowButton();
        this.DeclineButton = this.cookiemanager.getDeclinetButton();

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

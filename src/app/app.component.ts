import { Component } from '@angular/core';
import { CookieServiceService } from 'cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cookie-consent';
  constructor(private cookiemanager: CookieServiceService) {}
  public rejectCookie() {
    this.cookiemanager.rejectCookie('UA-12345678-1');
    location.reload();
  }
}

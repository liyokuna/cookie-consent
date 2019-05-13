import { Component } from '@angular/core';
import { CookieServiceService } from 'cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cookie Consent Banner';
  constructor(private cookiemanager: CookieServiceService) {}
  public rejectCookie() {
    this.cookiemanager.rejectCookie('UA-123456-1');
    location.reload();
  }
}

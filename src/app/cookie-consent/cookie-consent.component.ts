import { Component, OnInit } from '@angular/core';
import { CookieService } from '../service/cookie.service';

@Component({
  selector: 'cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss']
})
export class CookieConsentComponent implements OnInit {

  constructor( private cookieservice: CookieService) { }

  ngOnInit() {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CookieServiceModule, CookieConfig } from 'cookie-service';

const testLibConfig: CookieConfig = {
  header: "Cookie Consent Banner",
  message: "This website uses cookie to provide your the best experience. ",
  acceptButton: {
    enable: false,
    accept: 'Got it!'
  },
  allowtButton: {
    enable: true,
    allow: 'Allow Cookie'
  },
  declineButton: {
    enable: true,
    deny: 'Refuse Cookie'
  },
  learnMoreLink: {
    enable: true,
    learnMore: 'learn more',
    link: 'www.example.com'
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CookieServiceModule,
    CookieServiceModule.forRoot(testLibConfig),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

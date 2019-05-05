import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CookieServiceModule, CookieConfig } from 'cookie-service';

const testLibConfig: CookieConfig = {
  header: "warning cookie",
  message: "We use cookies",
  alert: {
    backgroundColor: '',
     color: ''
  },
  acceptButton: {
    enable: false,
    accept: 'accept cookie',
    backgroundColor: '#000',
    color: '#fff'
  },
  allowtButton: {
    enable: true,
    allow: 'allow cookie',
    backgroundColor: '#000',
    color: '#fff'
  },
  declineButton: {
    enable: true,
    deny: 'refuse cookie',
    backgroundColor: '#000',
    color: '#fff'
  },
  learnMoreLink: {
    enable: true,
    learnMore: 'learn more',
    link: '#fff'
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

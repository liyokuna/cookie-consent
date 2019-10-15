import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CookieServiceModule, CookieConfig } from 'cookie-service-banner';

const testLibConfig: CookieConfig = {
  header: {
    title:"Cookie Consent Banner",
    message: "This website uses cookies to provide you the best experience. ",
    domain:"localhost",
    ga_id: "UA-123456-1",
    color: '#fff',
    bcolor: '#000'
  },
  acceptButton: {
    enable: false,
    accept: "Got it!",
    color: '#fff',
    bcolor: '#266433'
  },
  allowButton: {
    enable: true,
    allow: "Allow Cookie",
    color: '#000',
    bcolor: '#f36e15f5'
  },
  declineButton: {
    enable: true,
    deny: "Refuse Cookie",
    color: '#000',
    bcolor: '#fff'
  },
  learnMoreLink: {
    enable: true,
    learnMore: "learn more",
    link: "www.example.com",
    color: '#3D9BFF'
  },
  review: {
    enable: true,
    message: "Review My consentement",
    color: "",
    bcolor: "",
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CookieServiceModule,
    CookieServiceModule.forRoot(testLibConfig),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

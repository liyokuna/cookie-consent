import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CookieServiceModule, CookieConfig } from 'cookie-service';

const testLibConfig: CookieConfig = {
  header: "warning cookie",
  message: "We use cookies",
  deny: "refuse cookie",
  allow: "allow cookie",
  accept: "go it",
  button: {
    accept: false,
    allow: true,
    decline: true,
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

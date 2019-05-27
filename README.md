# Cookie Service
Cookie Service focuses on accessibility and on respecting the [GDPR](https://fr.wikipedia.org/wiki/R%C3%A8glement_g%C3%A9n%C3%A9ral_sur_la_protection_des_donn%C3%A9es).
If you are using [Google Analytics](https://analytics.google.com/analytics/web/), this will suit to your project because this library focus on disable Google Ananlytics when the user decide to do so.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Demo
Here is a link to the [demo](cookie-consent.github.io)

## Dependencies

[Angular](https://angular.io/) ( the latest version of Angular 7+ )
[Bootstrap](https://getbootstrap.com/) ( the latest version of Bootsrap 4+ )

## Installation

Install cookie-service dependency through npm.
`npm install cookie-service-banner`

After installing, you need to import the main module:
`import { CookieServiceModule } from 'cookie-service-banner';`

The full configuration:

`
import { CookieServiceModule, CookieConfig } from 'cookie-service-banner';<br>

const testLibConfig: CookieConfig = {
  header: {
    title:"Cookie Consent Banner",
    message: "This website uses cookie to provide your the best experience. ",
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
    NgbModule,
    CookieServiceModule,
    CookieServiceModule.forRoot(testLibConfig),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`

## Usage

Once the steps mentioned above are done, you can use import library selector in your app.component.html.

`
...
<router-outlet></router-outlet>
<lib-cookie-service (isOpened)="onOpen($event)" ></lib-cookie-service>
`

`isOpened` is function meant to state the openning or the closing of the cookie banner.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or use the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#License

Copyright(c) 2019 Lionel Mukuna Ciowela.

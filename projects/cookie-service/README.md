# CookieService

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

The purpose of this library is to offer a full accessible cookie consent banner.
Each component of the banner displayed, are meant to be accessible on respecting the standard of accessibility.

## Dependencies

* [Angular](https://angular.io/) ( the latest version of Angular 7+ )<br>
* [Bootstrap](https://getbootstrap.com/) ( the latest version of Bootsrap 4+ )

## Installation

Install cookie-service dependency through npm.
`npm install cookie-service-banner`

After installing, you need to import the main module:
`import { CookieServiceModule } from 'cookie-service-banner';`

The full configuration:

`
import { CookieServiceModule, CookieConfig } from 'cookie-service-banner';<br>

const testLibConfig: CookieConfig = {<br>
  header: {<br>
    title:"Cookie Consent Banner",<br>
    message: "This website uses cookie to provide your the best experience. ",<br>
    domain:"localhost",<br>
    ga_id: "UA-123456-1",<br>
    color: '#fff',<br>
    bcolor: '#000'<br>
  },<br>
  acceptButton: {<br>
    enable: false,<br>
    accept: "Got it!",<br>
    color: '#fff',<br>
    bcolor: '#266433'<br>
  },<br>
  allowButton: {<br>
    enable: true,<br>
    allow: "Allow Cookie",<br>
    color: '#000',<br>
    bcolor: '#f36e15f5'<br>
  },<br>
  declineButton: {<br>
    enable: true,<br>
    deny: "Refuse Cookie",<br>
    color: '#000',<br>
    bcolor: '#fff'<br>
  },<br>
  learnMoreLink: {<br>
    enable: true,<br>
    learnMore: "learn more",<br>
    link: "www.example.com",<br>
    color: '#3D9BFF'<br>
  },<br>
  review: {<br>
    enable: true,<br>
    message: "Review My consentement",<br>
    color: "",<br>
    bcolor: "",<br>
  }<br>
}<br>

@NgModule({<br>
  declarations: [<br>
    AppComponent<br>
  ],<br>
  imports: [<br>
    BrowserModule,<br>
    NgbModule,<br>
    CookieServiceModule,<br>
    CookieServiceModule.forRoot(testLibConfig),<br>
    AppRoutingModule<br>
  ],<br>
  providers: [],<br>
  bootstrap: [AppComponent]<br>
})<br>
export class AppModule { }<br>
`

## Usage

Once the steps mentioned above are done, you can use import library selector in your app.component.html.

`
...<br>
<router-outlet></router-outlet><br>
<lib-cookie-service (isOpened)="onOpen($event)" ></lib-cookie-service>
`

`isOpened` is function meant to state the openning or the closing of the cookie banner.

## Code scaffolding

Run `ng generate component component-name --project cookie-service` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project cookie-service`.
> Note: Don't forget to add `--project cookie-service` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build cookie-service` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build cookie-service`, go to the dist folder `cd dist/cookie-service` and run `npm publish`.

## Running unit tests

Run `ng test cookie-service` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

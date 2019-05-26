# CookieService

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

The purpose of this library is to offer a full accessible cookie consent banner.
Each component of the banner displayed, are meant to be accessible on respecting the standard of accessibility.

## Dependencies

[Angular](https://angular.io/) ( the latest version of Angular 7+ )
[Bootstrap](https://getbootstrap.com/) ( the latest version of Bootsrap 4+ )

## Installation

Install cookie-service dependency through npm.
`npm install cookie-service`

After installing, you need to import the main module:
`import { CookieServiceModule } from 'cookie-service';`

The full configuration:

`
import { CookieServiceModule, CookieConfig } from 'cookie-service';<br>

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

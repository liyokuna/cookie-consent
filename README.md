# Cookie Service
Cookie Service focus on accessibilty and on respecting the [GDPR](https://fr.wikipedia.org/wiki/R%C3%A8glement_g%C3%A9n%C3%A9ral_sur_la_protection_des_donn%C3%A9es).
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

##Demo
Here is a link to the [demo]()

##Dependencies

[Angular](https://angular.io/) ( the latest version of Angualr 7+ )

##Installation

Intall cookie-service dependency through npm.
`npm install cookie-service`

After installing, you need to import the main module:
`import { CookieServiceModule } from 'cookie-service';`

The full configuration:

`
import { CookieServiceModule, CookieConfig } from 'cookie-service';

const testLibConfig: CookieConfig = {
  header: "Cookie Consent Banner",
  message: "We use cookies to provide you the best experience",
  acceptButton: {
    enable: false,
    accept: 'Got it!'
  },
  allowtButton: {
    enable: true,
    allow: 'Allow cookie'
  },
  declineButton: {
    enable: true,
    deny: 'Refuse cookie'
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
`

##Usage

Once the above mentionned step are done, you can use `import { CookieServiceService } from 'cookie-service';` in your component to access to the main function.

`
import { CookieServiceService } from 'cookie-service';
...
export class AppComponent {
  title = 'cookie-service';
  constructor(private cookiemanager: CookieServiceService) {}
  public rejectCookie() {
    this.cookiemanager.rejectCookie('UA-12345678-1');
    location.reload();
  }
`

`reject` function is meant to delete all the cookies and relauch the web site to display the cookie consent banner.

And in your template, just add 
`<cookie-service [GA_ID] = "'UA-12345678-1'"></cookie-service>`
notice that you need to provide your GA ID in order to help the library to disbable Google analtycs if the user refuse the use of cookie.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#License

Copyright(c) 2019 Lionel Mukuna Ciowela.
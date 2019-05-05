import { CookieServiceModule, CookieConfig } from 'cookie-service';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let testLibConfig : CookieConfig = {
    header: "warning cookie",
    message: "We use cookies",
    acceptButton: {
      enable: false,
      accept: 'accept cookie'
    },
    allowtButton: {
      enable: true,
      allow: 'allow cookie'
    },
    declineButton: {
      enable: true,
      deny: 'refuse cookie'
    },
    learnMoreLink: {
      enable: true,
      learnMore: 'learn more',
      link: 'www.example.com'
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CookieServiceModule,
        CookieServiceModule.forRoot(testLibConfig),
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cookie-consent'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('cookie-consent');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Cookie Consent Banner');
  });

  it('should render cookie service', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('b').textContent).toContain('"This website uses cookie to provide your the best experience. ');
  });

});

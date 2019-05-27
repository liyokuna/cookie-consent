import { CookieServiceModule, CookieConfig } from 'cookie-service-banner';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let testLibConfig : CookieConfig = {
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
    expect(app.title).toEqual('Cookie Consent Banner');
  });

  it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Introduction');
  });

  it('should render cookie message', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.alert-cookie').textContent).toContain('This website uses cookie to provide your the best experience. ');
  });

});

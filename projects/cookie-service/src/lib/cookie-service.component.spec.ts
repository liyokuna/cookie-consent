import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieServiceComponent } from './cookie-service.component';

import { By } from '@angular/platform-browser';

import { CookieServiceService } from './service/cookie-service.service';
import { CookieConfigService } from './service/cookie-config.service';
import { ConfigService } from './service/config.service';
import { CookieConfig } from './interface/cookie-config.interface'

let testlib: CookieConfig = {
  header: {
    title:'Cookie Consent Banner',
    message: 'This website uses cookie to provide your the best experience. ',
    domain:'localhost',
    ga_id: 'UA-123456-1',
    color: '#fff',
    bcolor: '#000'
  },
  acceptButton: {
    enable: false,
    accept: 'Got it!',
    color: '#fff',
    bcolor: '#266433'
  },
  allowButton: {
    enable: true,
    allow: 'Allow Cookie',
    color: '#000',
    bcolor: '#f36e15f5'
  },
  declineButton: {
    enable: true,
    deny: 'Refuse Cookie',
    color: '#000',
    bcolor: '#fff'
  },
  learnMoreLink: {
    enable: true,
    learnMore: 'learn more',
    link: 'www.example.com',
    color: '#3D9BFF'
  },
  review: {
    enable: true,
    message: 'Review My consentement',
    color: '',
    bcolor: '',
  }
}

describe('CookieServiceComponent', () => {
  let component: CookieServiceComponent;
  let fixture: ComponentFixture<CookieServiceComponent>;
  let button;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookieServiceComponent ],
      providers: [ CookieServiceService, ConfigService, { provide: CookieConfigService, useValue: testlib } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieServiceComponent);
    component = fixture.componentInstance;
    button  = fixture.debugElement.query(By.css('.cbtn'));
    fixture.detectChanges();
  });

  it('should create Cookie-service Component', () => {
    expect(component).toBeTruthy();
  });

  it('The value of the css class should be alert-cookie bottom ', () => {
    component.showAlertCookie = true;
    const divtaghtml: HTMLElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(divtaghtml.querySelector('div').getAttribute('class')).toEqual('alert-cookie bottom');
  });

  it('Check the value of the aria-label of the div and should be to be equal to Cookie Consent Banner', () => {
    component.showAlertCookie = true;
    const divtaghtml: HTMLElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(divtaghtml.querySelector('div').getAttribute('aria-label')).toEqual('Cookie Consent Banner');
  });

  it('Check the value of the message displayed and should be equal to Cookie Consent Banner', () => {
    component.showAlertCookie = true;
    const divtaghtml: HTMLElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(divtaghtml.querySelector('b').textContent).toEqual('This website uses cookie to provide your the best experience. ');
  });

  it('Check the value of the aria-label of the learn more link and should be to be equal to learn more', () => {
    component.showAlertCookie = true;
    component.LearnMoreEnable = true;
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(ataghtml.querySelector('a').getAttribute('aria-label')).toEqual('learn more');
  });

  it('Check the value of the href of the learn more link and should be to be equal to www.example.com', () => {
    component.showAlertCookie = true;
    component.LearnMoreEnable = true;
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(ataghtml.querySelector('a').getAttribute('href')).toEqual('www.example.com');
  });

  it('Check the value of the content of the learn more link and should be to be equal to learn more', () => {
    component.showAlertCookie = true;
    component.LearnMoreEnable = true;
    const ataghtml: HTMLElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(ataghtml.querySelector('a').textContent).toEqual('learn more');
  });

  it('Check the value of the aria-label of the deny button and should be to be equal to Refuse Cookie', () => {
    component.showAlertCookie = true;
    component.DenyEnable = true;
    const btnhtml: HTMLElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(btnhtml.querySelector('button').getAttribute('aria-label')).toEqual('Refuse Cookie');
  });

  it('Check the value of the contents of the deny button and should be to be equal to Refuse Cookie', () => {
    component.showAlertCookie = true;
    component.DenyEnable = true;
    const btnhtml: HTMLElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(btnhtml.querySelector('button').textContent).toEqual('Refuse Cookie');
  });

  it('Simulated a click on the deny button and it should emit false', () => {
    component.showAlertCookie = true;
    component.DenyEnable = true;

    const btnhtml: HTMLElement = fixture.debugElement.nativeElement;
    btnhtml.querySelector('button').click();

    fixture.detectChanges();

    component.isOpened.subscribe(toggled => expect(toggled).toBeFalsy());
  });

  it('Check the value of the aria-label of the allow button and should be to be equal to Allow Cookie', () => {
    component.showAlertCookie = true;
    component.DenyEnable = false;
    component.AllowEnable = true;
    const btnhtml: HTMLElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(btnhtml.querySelector('button').getAttribute('aria-label')).toEqual('Allow Cookie');
  });

  it('Check the value of the contents of the allow button and should be to be equal to Allow Cookie', () => {
    component.showAlertCookie = true;
    component.DenyEnable = false;
    component.AllowEnable = true;
    const btnhtml: HTMLElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(btnhtml.querySelector('button').textContent).toEqual('Allow Cookie');
  });

  it('Simulated a click on the allow button and it should emit true', () => {
    component.showAlertCookie = true;
    component.DenyEnable = false;
    component.AllowEnable = true;
    component.allow();

    component.isOpened.subscribe(toggled => expect(toggled).toBeTruthy());
  });

  it('Check the value of the aria-label of the accept button and should be to be equal to Got it!', () => {
    component.showAlertCookie = true;
    component.DenyEnable = false;
    component.AllowEnable = false;
    component.AcceptEnable = true;
    const btnhtml: HTMLElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(btnhtml.querySelector('button').getAttribute('aria-label')).toEqual('Got it!');
  });

  it('Check the value of the contents of the accept button and should be to be equal to Got it!', () => {
    component.showAlertCookie = true;
    component.DenyEnable = false;
    component.AllowEnable = false;
    component.AcceptEnable = true;
    const btnhtml: HTMLElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(btnhtml.querySelector('button').textContent).toEqual('Got it!');
  });

  it('Check the aria-label of the review button and should be Review My consentement', () => {
    component.showAlertCookie = false;

    const btnhtml: HTMLElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(btnhtml.querySelector('button').getAttribute('aria-label')).toEqual('Review My consentement');
  });

  it('Check the content of the review button and should be Review My consentement', () => {
    component.showAlertCookie = false;

    const btnhtml: HTMLElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(btnhtml.querySelector('button').textContent).toEqual('Review My consentement');
  });


});

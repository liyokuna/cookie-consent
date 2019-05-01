import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieServiceComponent } from './cookie-service.component';

describe('CookieServiceComponent', () => {
  let component: CookieServiceComponent;
  let fixture: ComponentFixture<CookieServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookieServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CookieServiceService } from './service/cookie-service.service';
import { CookieServiceComponent } from './cookie-service.component';
import { CommonModule } from '@angular/common';

export interface CookieServiceConfig {
  header: string,
  message: string,
  deny: string,
  allow: string,
  accept: string,
  button: {
    accept: boolean,
    allow: boolean,
    decline: boolean,
  };
}

export const CookieServiceConfigService = new InjectionToken<CookieServiceConfig>(
  'CookieServiceConfig'
);

@NgModule({
  declarations: [CookieServiceComponent],
  imports: [ CommonModule
  ],
  exports: [CookieServiceComponent]
})

export class CookieServiceModule {
  static forRoot(config: CookieServiceConfig): ModuleWithProviders {
    return {
      ngModule: CookieServiceModule,
      providers: [
        CookieServiceService,
        {
          provide: CookieServiceConfigService,
          useValue: config
        }
      ]
    };
  }
 }

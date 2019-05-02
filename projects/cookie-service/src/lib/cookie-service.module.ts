import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CookieServiceService } from './service/cookie-service.service';
import { CookieConfig } from './interface/cookie-config.interface';
import { CookieConfigService } from './service/cookie-config.service';
import { CookieServiceComponent } from './cookie-service.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ CommonModule
  ],
  declarations: [CookieServiceComponent],
  exports: [CookieServiceComponent]
})

export class CookieServiceModule {
  static forRoot(config: CookieConfig): ModuleWithProviders {
    return {
      ngModule: CookieServiceModule,
      providers: [
        CookieServiceService,
        {
          provide: CookieConfigService,
          useValue: config
        }
      ]
    };
  }
 }

import { InjectionToken } from '@angular/core';
import { CookieConfig } from '../interface/cookie-config.interface';

export const CookieConfigService = new InjectionToken<CookieConfig>(
    'CookieConfig'
);

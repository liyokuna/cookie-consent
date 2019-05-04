import { Inject } from '@angular/core';
import { CookieConfigService } from '../service/cookie-config.service';
import { CookieConfig } from '../interface/cookie-config.interface';
import { Observable, of } from 'rxjs';

export class ConfigService {

    constructor(@Inject(CookieConfigService) private config: CookieConfig) { }

    public getConfig(): Observable<CookieConfig> {
        return of(this.config);
    }

    public getHeader(): Observable<String> {
        return of(this.config.header);
    }
    
    public getMessage(): Observable<String> {
        return of(this.config.message);
    }
    
    public getAcceptButton(): Observable<{ enable: Boolean; accept: String; backgroundColor: String; color: String; }> {
        return of(this.config.acceptButton);
    }
    
    public getDeclinetButton(): Observable<{ enable: Boolean; deny: String; backgroundColor: String; color: String; }> {
        return of(this.config.declineButton);
    }
    
    public getAllowButton(): Observable<{ enable: Boolean; allow: String; backgroundColor: String; color: String; }> {
        return of(this.config.allowtButton);
    }

    public getLinkButton(): Observable<{ enable: Boolean; learnMore: String; link: String; }> {
        return of(this.config.learnMoreLink);
    }
}
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

    public getAcceptEnable(): Observable<Boolean> {
        return of(this.config.acceptButton.enable);
    }

    public getAcceptMessage(): Observable<String> {
        return of(this.config.acceptButton.accept);
    }
    
    public getDenyEnable(): Observable<Boolean> {
        return of(this.config.declineButton.enable);
    }

    public getDenyMessage(): Observable<String> {
        return of(this.config.declineButton.deny);
    }

    public getAllowEnable(): Observable<Boolean> {
        return of(this.config.allowtButton.enable);
    }

    public getAllowMessage(): Observable<String> {
        return of(this.config.allowtButton.allow);
    }

    public getLinkButton(): Observable<{ enable: Boolean; learnMore: String; link: String; }> {
        return of(this.config.learnMoreLink);
    }

    public getLinkMessage(): Observable<String> {
        return of(this.config.learnMoreLink.learnMore);
    }

    public getLinkLink(): Observable<String> {
        return of(this.config.learnMoreLink.link);
    }

    public getLinkEnable(): Observable<Boolean> {
        return of(this.config.learnMoreLink.enable);
    }
}
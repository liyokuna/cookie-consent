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
        return of(this.config.header.title);
    }

    public getHeaderColor(): Observable<String> {
        return of(this.config.header.color);
    }

    public getHeaderBackgroundColor(): Observable<String> {
        return of(this.config.header.bcolor);
    }

    public getDomain(): Observable<String> {
        return of(this.config.header.domain);
    }

    public getGA_id(): Observable<String> {
        return of(this.config.header.ga_id);
    }
    
    public getMessage(): Observable<String> {
        return of(this.config.header.message);
    }

    public getAcceptEnable(): Observable<Boolean> {
        return of(this.config.acceptButton.enable);
    }

    public getAcceptMessage(): Observable<String> {
        return of(this.config.acceptButton.accept);
    }

    public getAcceptColor(): Observable<String> {
        return of(this.config.acceptButton.color);
    }

    public getAcceptBackgroundColor(): Observable<String> {
        return of(this.config.acceptButton.bcolor);
    }
    
    public getDenyEnable(): Observable<Boolean> {
        return of(this.config.declineButton.enable);
    }

    public getDenyMessage(): Observable<String> {
        return of(this.config.declineButton.deny);
    }

    public getDenyColor(): Observable<String> {
        return of(this.config.declineButton.color);
    }

    public getDenyBackgroundColor(): Observable<String> {
        return of(this.config.declineButton.bcolor);
    }

    public getAllowEnable(): Observable<Boolean> {
        return of(this.config.allowtButton.enable);
    }

    public getAllowMessage(): Observable<String> {
        return of(this.config.allowtButton.allow);
    }

    public getAllowColor(): Observable<String> {
        return of(this.config.allowtButton.color);
    }

    public getAllowBackgroundColor(): Observable<String> {
        return of(this.config.allowtButton.bcolor);
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

    public getLinkColor(): Observable<String> {
        return of(this.config.learnMoreLink.color);
    }
}
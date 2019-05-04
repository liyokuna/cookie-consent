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

    public getAcceptEnable(): Observable<Boolean> {
        return of(this.config.acceptButton.enable);
    }

    public getAcceptMessage(): Observable<String> {
        return of(this.config.acceptButton.accept);
    }

    public getAcceptBgcolor(): Observable<String> {
        return of(this.config.acceptButton.backgroundColor);
    }

    public getAcceptColor(): Observable<String> {
        return of(this.config.acceptButton.color);
    }
    
    public getDenyButton(): Observable<{ enable: Boolean; deny: String; backgroundColor: String; color: String; }> {
        return of(this.config.declineButton);
    }
    
    public getDenyEnable(): Observable<Boolean> {
        return of(this.config.declineButton.enable);
    }

    public getDenyMessage(): Observable<String> {
        return of(this.config.declineButton.deny);
    }

    public getDenyBgcolor(): Observable<String> {
        return of(this.config.declineButton.backgroundColor);
    }

    public getDenyColor(): Observable<String> {
        return of(this.config.declineButton.color);
    }

    public getAllowButton(): Observable<{ enable: Boolean; allow: String; backgroundColor: String; color: String; }> {
        return of(this.config.allowtButton);
    }

    public getAllowEnable(): Observable<Boolean> {
        return of(this.config.allowtButton.enable);
    }

    public getAllowMessage(): Observable<String> {
        return of(this.config.allowtButton.allow);
    }

    public getAllowBgcolor(): Observable<String> {
        return of(this.config.allowtButton.backgroundColor);
    }

    public getAllowColor(): Observable<String> {
        return of(this.config.allowtButton.color);
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
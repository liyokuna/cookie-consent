import { Inject, Injectable } from '@angular/core';
import { CookieConfigService } from '../service/cookie-config.service';
import { CookieConfig } from '../interface/cookie-config.interface';
import { Observable, of } from 'rxjs';

@Injectable()
export class ConfigService {

    constructor(@Inject(CookieConfigService) private config: CookieConfig) { }

    public getConfig(): Observable<CookieConfig> {
        return of(this.config);
    }

    public getHeader(): Observable<string> {
        return of(this.config.header.title);
    }

    public getHeaderColor(): Observable<string> {
        return of(this.config.header.color);
    }

    public getHeaderBackgroundColor(): Observable<string> {
        return of(this.config.header.bcolor);
    }

    public getDomain(): Observable<string> {
        return of(this.config.header.domain);
    }

    public getGA_id(): Observable<string> {
        return of(this.config.header.ga_id);
    }

    public getMessage(): Observable<string> {
        return of(this.config.header.message);
    }

    public getAcceptEnable(): Observable<boolean> {
        return of(this.config.acceptButton.enable);
    }

    public getAcceptMessage(): Observable<string> {
        return of(this.config.acceptButton.accept);
    }

    public getAcceptColor(): Observable<string> {
        return of(this.config.acceptButton.color);
    }

    public getAcceptBackgroundColor(): Observable<string> {
        return of(this.config.acceptButton.bcolor);
    }

    public getDenyEnable(): Observable<boolean> {
        return of(this.config.declineButton.enable);
    }

    public getDenyMessage(): Observable<string> {
        return of(this.config.declineButton.deny);
    }

    public getDenyColor(): Observable<string> {
        return of(this.config.declineButton.color);
    }

    public getDenyBackgroundColor(): Observable<string> {
        return of(this.config.declineButton.bcolor);
    }

    public getAllowEnable(): Observable<boolean> {
        return of(this.config.allowButton.enable);
    }

    public getAllowMessage(): Observable<string> {
        return of(this.config.allowButton.allow);
    }

    public getAllowColor(): Observable<string> {
        return of(this.config.allowButton.color);
    }

    public getAllowBackgroundColor(): Observable<string> {
        return of(this.config.allowButton.bcolor);
    }

    public getLinkButton(): Observable<{ enable: boolean; learnMore: string; link: string; }> {
        return of(this.config.learnMoreLink);
    }

    public getLinkMessage(): Observable<string> {
        return of(this.config.learnMoreLink.learnMore);
    }

    public getLinkLink(): Observable<string> {
        return of(this.config.learnMoreLink.link);
    }

    public getLinkEnable(): Observable<boolean> {
        return of(this.config.learnMoreLink.enable);
    }

    public getLinkColor(): Observable<string> {
        return of(this.config.learnMoreLink.color);
    }

    public getReviewEnable(): Observable<boolean> {
        return of(this.config.review.enable);
    }

    public getReviewMessage(): Observable<string> {
        return of(this.config.review.message);
    }

    public getReviewColor(): Observable<string> {
        return of(this.config.review.color);
    }

    public getReviewBackgroundColor(): Observable<string> {
        return of(this.config.review.bcolor);
    }
}

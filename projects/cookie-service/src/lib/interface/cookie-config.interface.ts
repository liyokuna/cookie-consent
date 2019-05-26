export interface CookieConfig {
    header: {
      title: string,
      message: string,
      domain: string,
      ga_id: string,
      color: string,
      bcolor: string
    };
    acceptButton: {
      enable: boolean,
      accept: string,
      color: string,
      bcolor: string
    };
    allowtButton: {
      enable: boolean,
      allow: string,
      color: string,
      bcolor: string
    };
    declineButton: {
      enable: boolean,
      deny: string,
      color: string,
      bcolor: string
    };
    learnMoreLink: {
      enable: boolean,
      learnMore: string,
      link: string,
      color: string
    };
    review: {
      enable: boolean,
      message: string,
      color: string,
      bcolor: string
    };
}

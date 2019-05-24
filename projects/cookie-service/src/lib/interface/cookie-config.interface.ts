export interface CookieConfig {
    header: {
      title: String,
      message: String,
      domain: String,
      ga_id: String,
      color: string,
      bcolor: String
    },    
    acceptButton: {
      enable: Boolean,
      accept: String,
      color: string,
      bcolor: String
    },
    allowtButton: {
      enable: Boolean,
      allow: String,
      color: String,
      bcolor: String
    },
    declineButton: {
      enable: Boolean,
      deny: String,
      color: String,
      bcolor: String
    },
    learnMoreLink: {
      enable: Boolean,
      learnMore: String,
      link: String,
      color: String
    },
    review: {
      enable: Boolean,
      message: String,
      color: string,
      bcolor: string
    }
}

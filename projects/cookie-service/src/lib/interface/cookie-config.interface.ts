export interface CookieConfig {
    header: String,
    message: String,
    acceptButton: {
      enable: Boolean,
      accept: String
    },
    allowtButton: {
      enable: Boolean,
      allow: String
    },
    declineButton: {
      enable: Boolean,
      deny: String
    },
    learnMoreLink: {
      enable: Boolean,
      learnMore: String,
      link: String
    }
}

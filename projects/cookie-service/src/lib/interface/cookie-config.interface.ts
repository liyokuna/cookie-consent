export interface CookieConfig {
    header: String,
    message: String,
    alert: {
      backgroundColor: String,
      color: String
    },
    acceptButton: {
      enable: Boolean,
      accept: String,
      backgroundColor: String,
      color: String
    },
    allowtButton: {
      enable: Boolean,
      allow: String,
      backgroundColor: String,
      color: String
    },
    declineButton: {
      enable: Boolean,
      deny: String,
      backgroundColor: String,
      color: String
    },
    learnMoreLink: {
      enable: Boolean,
      learnMore: String,
      link: String
    }
}

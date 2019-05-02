export interface CookieConfig {
    header: string,
    message: string,
    deny: string,
    allow: string,
    accept: string,
    button: {
      accept: boolean,
      allow: boolean,
      decline: boolean,
    };
}

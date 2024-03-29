import {AuthConfig} from "@auth0/auth0-angular";

export const environment = {
    production: true,
    apiUrl: 'https://tbdvendor.azurewebsites.net/api/',
    authUrl: 'https://tbdvendor.azurewebsites.net',
    auth0: {
        domain: 'prod-tbd-vendor.au.auth0.com',
        clientId: 'rZmvcTWKQ3ZuyogLDpiWakysYi2vE0Rh',
        authorizationParams: {
            redirect_uri: "https://jolly-coast-0dc81a210.4.azurestaticapps.net",
        }
    } as AuthConfig,
};


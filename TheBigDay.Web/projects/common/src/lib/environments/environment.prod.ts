import {AuthConfig} from "@auth0/auth0-angular";

export const environment = {
  production: true,
  apiUrl: 'https://tbdvendor.azurewebsites.net/api/',
    auth0: {
        domain: 'dev-trnzolr3zks0yejt.au.auth0.com',
        clientId: 'QwIuX9PpTzkEnYzJtflOq4HHopN7Fzkk',
        authorizationParams: {
            redirect_uri: "https://jolly-coast-0dc81a210.4.azurestaticapps.net",
        }
    } as AuthConfig,
};

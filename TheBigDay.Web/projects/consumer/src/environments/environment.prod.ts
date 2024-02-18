import {AuthConfig} from "@auth0/auth0-angular";

export const environment = {
  production: true,
    apiUrl: 'https://tbdvendor.azurewebsites.net/api/',
    auth0: {
        domain: 'tbdcust.au.auth0.com',
        clientId: '4jHEQWwroWPGiJxbebDXxZzCdbWrVohE',
        authorizationParams: {
            redirect_uri: "https://nice-field-0936efc10.4.azurestaticapps.net",
        }
    } as AuthConfig,
};


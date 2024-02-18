// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {AuthConfig} from "@auth0/auth0-angular";

export const environment = {
    production: false,
    //apiUrl: 'https://tbdvendor.azurewebsites.net/api/',
    auth0: {
        domain: 'dev-trnzolr3zks0yejt.au.auth0.com',
        clientId: 'QwIuX9PpTzkEnYzJtflOq4HHopN7Fzkk',
        authorizationParams: {
            redirect_uri: "http://localhost:4202",
        },
    } as AuthConfig,
    apiUrl: 'https://localhost:44320/api/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

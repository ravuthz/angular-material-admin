// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// export const baseUrl = "http://localhost:8080";
let baseUrl = "https://spring-boot-moduler.herokuapp.com";

export const environment = {
    production: false,
    appUrl: baseUrl,
    apiUrl: baseUrl + '/rest/api',
    oauthUrl: baseUrl + '/oauth/token'
};

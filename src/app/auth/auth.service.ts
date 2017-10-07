import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { filterParams, JwtClient } from '../shared/classes/requests-respones';
import { LOGIN_PATH, LOGIN_SUCCESS_PATH } from '../shared/consts/auth.const';
import { TokenStoreService } from '../shared/services/token-store.service';

@Injectable()
export class AuthService {
    private link: string = '';
    private error: string = '';
    private client: JwtClient = null;
    private headers: HttpHeaders = new HttpHeaders();

    constructor(
        private router: Router,
        private http: HttpClient,
        private token: TokenStoreService) {
        this.link = environment.oauthUrl;
    }

    config(client: JwtClient) {
        if (client) {
            this.client = client;
            let credentials = 'Basic ' + btoa(client.client_id + ':' + client.client_password);
            this.headers = new HttpHeaders().set('Authorization', credentials);
        }
    }

    public login(data) {
        console.info("AuthService - login");
        data['grant_type'] = this.client.grant_type;

        let options = {
            params: filterParams(data),
            headers: this.headers
        };

        return this.http.post(this.link, null, options).subscribe(res => {
            console.log("httpLogin - Login Success", res);
            this.token.setAccessToken(res['access_token']);
            this.token.setRefreshToken(res['refresh_token']);
            this.router.navigateByUrl(LOGIN_SUCCESS_PATH);
        }, (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log("httpLogin - Client-side Error Occured: \n", err.error);
            } else {
                console.log("httpLogin - Server-side Error Occured: \n", err.error);
            }

            this.token.clear();
        });;
    }

    public logout() {
        console.info("AuthService - logout");
        this.token.clear();
        this.router.navigateByUrl(LOGIN_PATH);
    }

    public register(data) {
        console.info("AuthService - register");
        return this.http.post(this.link, null, data);
    }

    public isAuthenticated() {
        let token = this.token.getAccessToken();
        return token && token.length > 0;
    }

}

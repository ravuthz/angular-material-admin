import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
    EMAIL_KEY,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    TOKEN_AUTH_PASSWORD,
    TOKEN_AUTH_USERNAME,
    TOKEN_KEY,
    USERNAME_KEY,
} from '../consts/auth.const';
import { LocalStorageService } from './local-storage.service';

export interface Client {
    clientId: string,
    clientSecret: string
}

export interface Credentials {
    email: string,
    password: string
}

@Injectable()
export class AuthService {

    private error = '';
    private headers = new HttpHeaders();
    private authLink = "https://spring-boot-moduler.herokuapp.com/oauth/token";

    constructor(
        private router: Router,
        private http: HttpClient,
        private storage: LocalStorageService) {
        this.headers.append('Content-Type', 'application/json');
    }

    login(data) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));

        return this.http.post(this.authLink, data, { headers })
            .subscribe(res => {
                this.storage.set(TOKEN_KEY, res['token']);
                this.storage.set(EMAIL_KEY, res['email']);
                this.storage.set(USERNAME_KEY, res['username']);
                this.storage.auth = res;
                console.log('login res: ', res);
                if (res['token']) {
                    this.router.navigate([LOGIN_SUCCESS]);
                } else {
                    this.error = 'Username or Password is incorrect.';
                    this.router.navigate([LOGIN_FAILURE]);
                }
            }, err => {
                console.log('login err: ', err);
                this.error = err.text();
                this.router.navigate([LOGIN_FAILURE]);
            });
    }

    loginWithCredentials(credentials: Credentials) {
        return this.login(credentials);
    }

    loginWithEmailPassword(email: string, password: string) {
        return this.login({
            email: email,
            password: password,
            grant_type: 'password'
        });
    }

    loginWithUsernamePassword(username: string, password: string) {
        return this.login({
            username: username,
            password: password,
            grant_type: 'password'
        });
    }

    loginWithCleintCredentials(client: Client) {
        let params = new HttpParams();
        params.set('grant_type', 'client_credentials');
        params.set('client_id', client.clientId);
        params.set('cleint_secret', client.clientSecret);
        return this.http.post(this.authLink, {}, { params, headers: this.headers });
    }

    isUser(): boolean {
        return this.isLoggedIn();
    }

    isAdmin(): boolean {
        return this.isLoggedIn();
    }

    isLoggedIn(): boolean {
        let token = this.getToken();
        return token && token.length > 0;
    }

    getToken() {
        return this.storage.get(TOKEN_KEY);
    }

    logout() {
        this.storage.remove(TOKEN_KEY);
        this.storage.remove(EMAIL_KEY);
        this.storage.remove(USERNAME_KEY);
        this.storage.auth = null;
    }

}

import 'rxjs';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { EMAIL_KEY, TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME, TOKEN_KEY, USERNAME_KEY } from '../shared/consts/auth.const';
import { StorageService } from '../shared/services/storage.service';

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

    static AUTH_TOKEN = '/oauth/token';

    private error = '';
    private headers = new HttpHeaders();
    private link: string;

    constructor(
        private router: Router,
        private auth: Http,
        private http: HttpClient,
        private storage: StorageService) {
        this.headers.append('Content-Type', 'application/json');

        // this.link = environment.apiEntPoint + '/oauth/token';

        this.link = 'http://localhost:8080/oauth/token';
    }

    jwtLogin(username: string, password: string) {
        // const body = `?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;
        // const body = `grant_type=client_credentials`;
        const headers = new Headers();
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Content-Type', 'application/json;charset=UTF-8');
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));

        // const body = {
        //     grant_type: 'password',
        //     username: 'adminz',
        //     password: '123123'
        // };

        let params: URLSearchParams = new URLSearchParams();
        params.set('grant_type', 'password');
        params.set('username', 'adminz');
        params.set('password', '123123');
        params.set('client_id', TOKEN_AUTH_USERNAME);
        params.set('client_secret', TOKEN_AUTH_PASSWORD);

        let options = new RequestOptions({ headers: headers, withCredentials: true });

        return this.auth.post(this.link, params.toString(), options)
            // return this.auth.post(this.link + body, {}, options)
            .map(res => res.json())
            .map((res: any) => {
                console.log("jwtLogin res: ", res);
                if (res.access_token) {
                    return res.access_token;
                }
                return null;
            }, (err: any) => {
                console.log("jwtLogin err: ", err);
            });
    }

    login(data) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));

        console.log("login(data): ", data);

        return this.http.post(this.link, data, { headers: headers, withCredentials: true })
            // return this.http.post(this.link, data, { headers })
            .subscribe(res => {
                console.log("res ", res);
                // this.storage.set(TOKEN_KEY, res['token']);
                // this.storage.set(EMAIL_KEY, res['email']);
                // this.storage.set(USERNAME_KEY, res['username']);
                // this.storage.auth = res;
                // console.log('login res: ', res);
                // if (res['token']) {
                //     // this.router.navigate([LOGIN_SUCCESS]);
                // } else {
                //     this.error = 'Username or Password is incorrect.';
                //     // this.router.navigate([LOGIN_FAILURE]);
                // }
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
        return this.http.post(this.link, {}, { params, headers: this.headers });
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

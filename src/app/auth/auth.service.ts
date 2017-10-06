import {
    HttpClient,
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/observable';

import { environment } from '../../environments/environment';
import { QueryParams } from '../shared/classes/query-params';
import {
    LOGIN_PATH,
    LOGIN_SUCCESS_PATH,
    TOKEN_AUTH_PASSWORD,
    TOKEN_AUTH_USERNAME,
    TOKEN_KEY,
} from '../shared/consts/auth.const';
import { GRANT_TYPE_CLIENT_CREDENTIALS } from '../shared/consts/auth.const';
import { StorageService } from '../shared/services/storage.service';

@Injectable()
export class OAuthInterceptor implements HttpInterceptor {

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let credentials = 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD);
        const request = req.clone({
            headers: req.headers.set('Authorization', credentials)
        });
        console.log("OAuthInterceptor - HttpRequest: ", request);
        return next.handle(request);
    }

}

@Injectable()
export class AuthService {
    private link: string = '';
    private error: string = '';
    private headers = new HttpHeaders();

    constructor(
        private router: Router,
        private http: HttpClient,
        private storage: StorageService) {
        this.link = environment.oauthUrl;
    }

    public httpLogin(data) {
        let query = new QueryParams(data);
        console.info("AuthService - httpLogin");
        return this.http.post(this.link + query, null)
            .subscribe(res => {
                console.log("httpLogin - Login Success", res);
                this.storage.set(TOKEN_KEY, res['access_token']);
                this.router.navigateByUrl(LOGIN_SUCCESS_PATH);
            }, (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log("httpLogin - Client-side Error Occured: \n", err.error);
                } else {
                    console.log("httpLogin - Server-side Error Occured: \n", err.error);
                }
                this.storage.remove(TOKEN_KEY);
            });
    }

    // public login(username: string, password: string, grant_type = GRANT_TYPE_PASSWORD) {
    //     return this.httpLogin({ username, password, grant_type });
    // }

    public login(data) {
        return this.httpLogin(data);
    }

    public logout() {
        console.info("AuthService - logout");
        this.storage.remove(TOKEN_KEY);
        this.router.navigateByUrl(LOGIN_PATH);
    }

    public register(user) {
        console.info("AuthService - register");

    }

    public loginWithCleint(client_id, cleint_secret) {
        return this.httpLogin({ client_id, cleint_secret, grant_type: GRANT_TYPE_CLIENT_CREDENTIALS });
    }

    public getToken() {
        return this.storage.get(TOKEN_KEY);
    }

    public checkCredentials() {
        if (!this.isLoggedIn()) {
            this.router.navigateByUrl(LOGIN_PATH);
        }
    }

    public isLoggedIn() {
        let token = this.getToken();
        return token && token.length > 0;
    }

}

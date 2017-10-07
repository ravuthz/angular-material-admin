import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME } from '../consts/auth.const';
import { TokenStoreService } from '../services/token-store.service';

@Injectable()
export class OAuthInterceptor implements HttpInterceptor {

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('OAuthInterceptor - intercept:');
        let tokenStore = new TokenStoreService();
        let credentials = 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD);

        if (tokenStore.getAccessToken()) {
            credentials = 'Bearer ' + tokenStore.getAccessToken();
        }

        const request = req.clone({
            headers: req.headers.set('Authorization', credentials)
        });

        console.log("OAuthInterceptor - HttpRequest: ", request);
        console.log("OAuthInterceptor - Authorization: ", credentials);
        return next.handle(request);
    }

}

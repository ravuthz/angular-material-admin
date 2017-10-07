import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { FetchService } from '../shared/services/fetch.service';
import { TokenStoreService } from '../shared/services/token-store.service';

@Injectable()
export class UserService extends FetchService {

    constructor(
        public http: HttpClient,
        public auth: AuthService,
        public token: TokenStoreService) {
        super(http, auth, token);

        this.link = environment.apiUrl + '/users';
        this.searchLink = environment.apiUrl + '/search/users';

        this.setHeaders({
            'Authorization': 'Bearer ' + this.token.getAccessToken()
        });
    }

}

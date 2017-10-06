import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { FetchService } from '../shared/services/fetch.service';

@Injectable()
export class UserService extends FetchService {

    constructor(public http: HttpClient, public auth: AuthService) {
        super(http, auth);
        this.link = '/users';
        this.searchLink = "/search/users";
    }

}

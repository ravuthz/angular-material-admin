import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FetchService } from '../shared/services/fetch.service';

@Injectable()
export class UserService extends FetchService {

    constructor(public http: HttpClient) {
        super(http);
        this.link = '/users';
        this.searchLink = "/search/users";
    }

}

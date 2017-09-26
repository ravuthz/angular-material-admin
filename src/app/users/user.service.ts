import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

    private link: string;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.link = environment.apiEntPoint + '/users';
    }

    getAll() {
        let headers = new HttpHeaders();
        // headers.set('Authorization', 'Basic YWRtaW56OjEyMzEyMw==');
        return this.http.get(this.link, { headers: headers });
    }

    getById(id) {
        return this.http.get(this.link + '/' + id);
    }

    create(data) {
        return this.http.post(this.link, data);
    }

    deleteById(id) {
        return this.http.delete(this.link + '/' + id);
    }

    updateById(id, data) {
        return this.http.put(this.link + '/' + id, data);
    }

}

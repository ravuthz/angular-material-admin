import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

    // private link = "https://spring-boot-moduler.herokuapp.com/rest/api/users";
    private link = "http://localhost:8080/rest/api/users";

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

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

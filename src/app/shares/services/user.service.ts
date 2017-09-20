import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

    private headers = new HttpHeaders();
    private authLink1 = "https://spring-boot-moduler.herokuapp.com/oauth/token";
    private authLink2 = "http://all-node-ravuthz.c9users.io:8080/authentication";
    private link = "http://all-node-ravuthz.c9users.io:8080/users";
    constructor(private http: HttpClient, private router: Router) { }

    loginWithClient(username: string, password: string) {
        let params = new HttpParams();
        params.set('grant_type', 'password');
        params.set('client_id', 'trusted-app');
        params.set('cleint_secret', 'secret');
        params.set('username', username);
        params.set('password', password);
        return this.http.post(this.authLink1, {}, { params, headers: this.headers });
    }

    loginWithAuthentication(email: string, password: string) {
        let data = {
            strategy: 'local',
            email: email,
            password: password
        };
        return this.http.post(this.authLink2, data);
    }

    loginWithCleintCredentials(clientId: string, clientSecret: string) {
        let params = new HttpParams();
        params.set('grant_type', 'client_credentials');
        params.set('client_id', clientId);
        params.set('cleint_secret', clientSecret);
        return this.http.post(this.authLink1, {}, { params, headers: this.headers });
    }

    getAll() {
        let headers = new HttpHeaders();

        if (localStorage.getItem('token')) {
            console.log("token: ", localStorage.getItem('token'));
            headers.set('Authorize', 'Bearer ' + localStorage.getItem('token'));
        }

        return this.http.get(this.link, { headers });
    }

    getById(id) {
        return this.http.get(this.link + '/' + id);
    }

    create(data) {
        return this.http.post(this.link, data);
    }

    delete(id) {
        return this.http.delete(this.link + '/' + id);
    }

    update(id, data) {
        return this.http.put(this.link + '/' + id, data);
    }

}

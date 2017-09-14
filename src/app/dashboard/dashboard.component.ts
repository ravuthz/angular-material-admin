import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    private authLink = "https://spring-boot-moduler.herokuapp.com/oauth/token";
    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.loginWithClient('adminz', '123123').subscribe(res => {
            console.log("loginWithClient res: ", res);
        }, err => console.log(err));

        this.loginWithCleintCredentials('trusted-app', 'secret').subscribe(res => {
            console.log("loginWithCleintCredentials res: ", res);
        }, err => console.log(err));
    }

    loginWithClient(username: string, password: string) {
        let data = {
            grant_type: 'password',
            client_id: 'trusted-app',
            client_secret: 'secret',
            username: username,
            password: password
        };
        return this.http.post(this.authLink, data);
    }

    loginWithCleintCredentials(clientId: string, clientSecret: string) {
        let data = {
            grant_type: 'client_credentials',
            client_id: clientId,
            cleint_secret: clientSecret
        };
        return this.http.post(this.authLink, data);
    }

}

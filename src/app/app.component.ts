import "rxjs/add/operator/map";
import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    baseUrl = "https://jsonplaceholder.typicode.com";
    title = 'app';
    data: Array<any>;
    posts: Array<any>;

    constructor(private http: Http) {
        this.loadPost();
        this.loadPhotos();
    }

    loadPost() {
        this.http.get(this.baseUrl + '/posts')
            .map(response => response.json())
            .subscribe(res => this.posts = res);
    }

    loadPhotos() {
        this.http.get(this.baseUrl + '/photos')
            .map(response => response.json())
            .subscribe(res => this.data = res);
    }
}

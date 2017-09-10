import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JsonHolderService {
    private root = "https://jsonplaceholder.typicode.com";
    constructor(private http: Http) { }

    private mapRespone(path: string) {
        console.info("GET: " + this.root + path);
        return this.http.get(this.root + path)
            .map(response => response.json());
    }

    getUsers() {
        return this.mapRespone('/users');
    }

    getPosts() {
        return this.mapRespone('/posts');
    }

    getTodos() {
        return this.mapRespone('/todos');
    }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JsonHolderService {
    private root = "https://jsonplaceholder.typicode.com";
    constructor(private http: HttpClient) { }

    private mapRespone(path: string) {
        console.info("GET: " + this.root + path);
        return this.http.get(this.root + path);
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

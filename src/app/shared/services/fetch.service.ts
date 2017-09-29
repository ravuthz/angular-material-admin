import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { QueryParams } from '../classes/query-params';

@Injectable()
export class FetchService {

    private _link: string;

    constructor(public http: HttpClient) { }

    set link(suffex) {
        this._link = environment.apiEntPoint + suffex;
    }

    get link() {
        return this._link;
    }

    query(query) {
        let queryString = new QueryParams(query);
        return this.http.get(this.link + queryString);
    }

    getAll(data = {}) {
        return this.query(data);
    }

    getById(id) {
        return this.http.get(this.link + '/' + id);
    }

    getByPage(page: number, size: number, sort: string) {
        return this.query({ page, size, sort });
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

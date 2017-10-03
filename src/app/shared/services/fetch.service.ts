import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { QueryParams } from '../classes/query-params';
import { PagerRequest, SingleSearchRequest } from '../classes/requests-respones';

@Injectable()
export class FetchService {

    private _link: string;
    private _searchLink: string;

    constructor(public http: HttpClient) { }

    set link(suffex) {
        this._link = environment.apiUrl + suffex;
    }

    get link() {
        return this._link;
    }

    set searchLink(suffex) {
        this._searchLink = environment.apiUrl + suffex;
    }

    get searchLink() {
        return this._searchLink;
    }

    query(query) {
        let queryString = new QueryParams(query);
        return this.http.get(this.link + queryString);
    }

    search(query) {
        let queryString = new QueryParams(query);
        return this.http.get(this.searchLink + queryString);
    }

    /**
     * Query with Pagination
     */

    getByPage(page: number, size: number, sort: string) {
        let data = { page, size, sort };
        console.log("getByPage() data: ", data);
        return this.query(data);
    }

    getByPager(request: PagerRequest) {
        console.log("getByPager() request: ", request);
        return this.query(request);
    }

    searchByPage(keyword: string, page: number, size: number, sort: string) {
        let data = { keyword, page, size, sort };
        console.log("searchByPage() data: ", data);
        return this.search(data);
    }

    searchByPager(request: SingleSearchRequest) {
        console.log("searchByPager() request: ", request);
        return this.search(request);
    }

    /**
     * CRUD Functions
     */

    getAll(data = {}) {
        return this.query(data);
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

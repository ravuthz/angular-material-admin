import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { filterHeadears, filterParams, PagerRequest, SingleSearchRequest } from '../classes/requests-respones';
import { TokenStoreService } from './token-store.service';

@Injectable()
export class FetchService {

    public link: string;
    public searchLink: string;
    public headers: HttpHeaders;

    constructor(
        public http: HttpClient,
        public auth: AuthService,
        public token: TokenStoreService) {
        this.headers = new HttpHeaders();
    }

    public setHeaders(data) {
        this.headers = filterHeadears(data);
    }

    public httpRequest(method: string, link: string, params?: Object, headers?: Object) {
        let httpParams = new HttpParams();
        let httpHeaders = new HttpHeaders();

        if (params) {
            httpParams = filterParams(params);
        }

        if (headers) {
            httpHeaders = filterHeadears(headers);
        } else {
            httpHeaders = this.headers;
        }

        return this.http.request(method, link, { params: httpParams, headers: httpHeaders });
    }

    query(params) {
        return this.httpRequest('get', this.link, params);
    }

    search(params) {
        return this.httpRequest('get', this.searchLink, params);
    }

    /**
     * Query with Pagination
     */

    getByPage(page: number, size: number, sort: string) {
        let params = { page, size, sort };
        console.log("getByPage() data: ", params);
        return this.query(params);
    }

    getByPager(params: PagerRequest) {
        console.log("getByPager() request: ", params);
        return this.query(params);
    }

    searchByPage(keyword: string, page: number, size: number, sort: string) {
        let params = { keyword, page, size, sort };
        console.log("searchByPage() data: ", params);
        return this.search(params);
    }

    searchByPager(params: SingleSearchRequest) {
        console.log("searchByPager() request: ", params);
        return this.search(params);
    }

    /**
     * CRUD Functions
     */

    getAll(params = {}) {
        return this.query({ params });
    }

    getById(id) {
        return this.httpRequest('get', this.link + '/' + id);
    }

    create(data) {
        return this.httpRequest('post', this.link, data);
    }

    deleteById(id) {
        return this.httpRequest('delete', this.link + '/' + id);
    }

    updateById(id, data) {
        return this.httpRequest('put', this.link + '/' + id, data);
    }

}

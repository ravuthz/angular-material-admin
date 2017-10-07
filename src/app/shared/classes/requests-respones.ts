import { HttpHeaders, HttpParams } from '@angular/common/http';

export const DEFAULT_PAGE = 0;
export const DEFAULT_SIZE = 5;
export const DEFAULT_SORT = 'id,asc';
export const DEFAULT_TOTAL_PAGES = 0;
export const DEFAULT_TOTAL_ELEMENTS = 0;

/**
 * Request Classes
 */

export interface JwtClient {
    grant_type: string;
    client_id: string;
    client_password: string;
}

export class PagerRequest {
    constructor(
        public page: number = DEFAULT_PAGE,
        public size: number = DEFAULT_SIZE,
        public sort: string = DEFAULT_SORT
    ) { }

    fromResponse(response: PagerResponse) {
        this.page = response.number;
        this.size = response.size;
        this.sort = response.sort;
        return this;
    }
}

export class SingleSearchRequest extends PagerRequest {
    public keyword: string;
    constructor(keyword: string = '') {
        super();
        this.keyword = keyword;
    }
}

/**
 * Response Classes
 */

export class PagerResponse {
    constructor(
        public sort: string = DEFAULT_SORT,
        public size: number = DEFAULT_SIZE,
        public number: number = DEFAULT_PAGE,
        public totalPages: number = DEFAULT_TOTAL_PAGES,
        public totalElements: number = DEFAULT_TOTAL_ELEMENTS
    ) { }
}

export function filterParams(data) {
    let params = new HttpParams();
    if (data) {
        Object.keys(data).forEach(function (key) {
            params = params.set(key, data[key]);
        });
    }
    return params;
}

export function filterHeadears(data) {
    let headers = new HttpHeaders();
    if (data) {
        Object.keys(data).forEach(function (key) {
            headers = headers.set(key, data[key]);
        });
    }
    return headers;
}

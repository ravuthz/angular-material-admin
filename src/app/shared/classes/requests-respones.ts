export const DEFAULT_PAGE = 0;
export const DEFAULT_SIZE = 5;
export const DEFAULT_SORT = 'id,asc';
export const DEFAULT_TOTAL_PAGES = 0;
export const DEFAULT_TOTAL_ELEMENTS = 0;

/**
 * Request Classes
 */

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



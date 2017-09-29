import { Component, EventEmitter, Input, Output } from '@angular/core';

export const DEFAULT_PAGE = 0;
export const DEFAULT_SIZE = 5;
export const DEFAULT_SORT = 'id,asc';

export class PagerRequest {
    public page: number;
    public size: number;
    public sort: string;

    constructor() {
        this.page = DEFAULT_PAGE;
        this.size = DEFAULT_SIZE;
        this.sort = DEFAULT_SORT;
    }
}

export class PagerResponse {
    public sort: string;
    public size: number;
    public number: number;
    public totalPages: number;
    public totalElements: number;

    constructor() {
        this.sort = DEFAULT_SORT;
        this.size = DEFAULT_SIZE;
        this.number = DEFAULT_PAGE;
        this.totalPages = 0;
        this.totalElements = 0;
    }
}

@Component({
    selector: 'app-simple-pager',
    template: `
    <md-paginator [length]="pager.totalElements" [pageSize]="pager.size" [pageSizeOptions]="sizer" (page)="myPageChange($event)"></md-paginator>
    `
})
export class SimplePagerComponent {

    @Input()
    pager: PagerResponse;

    @Input()
    sizer: Array<number> = [5, 10, 25, 50, 100];

    @Output()
    onPageChange = new EventEmitter();

    myPageChange(pager) {
        let sort = this.pager.sort;
        let size = pager.pageSize;
        let number = pager.pageIndex;
        let totalPages = this.pager.totalPages;
        let totalElements = pager.length;
        this.onPageChange.emit({ number, size, sort, totalPages, totalElements });
    }

}

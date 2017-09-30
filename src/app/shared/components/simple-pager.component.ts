import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PagerResponse } from '../classes/requests-respones';

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

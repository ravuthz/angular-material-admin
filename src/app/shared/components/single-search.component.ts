import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

export class SearchRequest {
    public name: string;
    public code: string;
}

@Component({
    selector: 'app-single-search',
    template: `
    <form class="user-search-form" novalidate>
        <md-form-field class="input-full-width">
            <input mdInput type="search" placeholder="Enter keyword to search"
            [formControl]="keyword" (click)="mySearchClick()" (change)="mySearchChange()">
        </md-form-field>
    </form>
    `
})
export class SingleSearchComponent implements OnInit {

    public keyword: FormControl;

    @Output()
    public onSearchClick = new EventEmitter();

    @Output()
    public onSearchChange = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        this.keyword = new FormControl('');
    }

    public mySearchClick() {
        this.onSearchClick.emit(this.keyword.value);
    }

    public mySearchChange() {
        this.onSearchChange.emit(this.keyword.value);
    }

}

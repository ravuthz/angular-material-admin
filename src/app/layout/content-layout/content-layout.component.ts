import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-content-layout',
    templateUrl: './content-layout.component.html',
    styleUrls: ['./content-layout.component.css']
})
export class ContentLayoutComponent implements OnInit {

    showSidebar = false;

    constructor() { }

    ngOnInit() {
        console.log("ContentLayoutComponent init");
    }

}

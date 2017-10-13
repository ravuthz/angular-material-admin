import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-menubar',
    templateUrl: './menubar.component.html',
    styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

    private title;

    @Output()
    public onMenuClick = new EventEmitter();

    ngOnInit() {
        this.title = environment.appTitle;
    }

    public myMenuClick() {
        this.onMenuClick.emit();
    }

}

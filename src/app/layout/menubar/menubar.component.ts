import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-menubar',
    templateUrl: './menubar.component.html',
    styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

    @Output()
    public onMenuClick = new EventEmitter();

    ngOnInit() { }

    public myMenuClick() {
        this.onMenuClick.emit();
    }

}

import { Component, OnInit } from '@angular/core';

import { JsonHolderService } from '../shares/services/json-holder/json-holder.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: Array<any>;

    constructor(private json: JsonHolderService) { }

    ngOnInit() {
        this.loadUsers();
    }

    loadUsers() {
        this.json.getUsers().subscribe(res => this.users = res);
    }
}

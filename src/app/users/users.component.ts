import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users;

    constructor(
        private userService: UserService) { }

    ngOnInit() {
        this.loadUsers();
    }

    loadUsers() {
        this.userService.getAll().subscribe(res => {
            console.log("res : ", res);
        });
    }
}

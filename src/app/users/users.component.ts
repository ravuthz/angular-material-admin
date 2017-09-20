import { Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shares/services/user.service';
import { JsonHolderService } from '../shares/services/json-holder/json-holder.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users;

    constructor(
        private jsonService: JsonHolderService,
        private userService: UserService) { }

    ngOnInit() {
        this.loadUsers();
    }

    loadUsers() {
        this.jsonService.getUsers().subscribe(res => this.users = res);

        this.userService.getAll().subscribe(res => {
            console.log("res : ", res);
        });
    }
}

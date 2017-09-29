import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MdDialog, MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { Pager } from '../../shared/classes/pager';
import { UserFormComponent } from '../user-form/user-form.component';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    user: User;
    users: Array<User>;

    pager: Pager = new Pager();
    pagerSizeOptions: Array<number> = [1, 2, 5, 10, 25];

    page: number = 0;
    size: number = 20;
    sort: string = 'id,desc';

    constructor(
        public dialog: MdDialog,
        public snackBar: MdSnackBar,
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.userService.getByPage(this.page, this.size, this.sort).subscribe(res => {
            console.log("getPage res: ", res);
            this.users = res['_embedded'].users;
            this.pager = res['page'];
        });
    }

    loadForm(data) {
        let dialogRef = this.dialog.open(UserFormComponent, {
            data: data
        });

        dialogRef.afterClosed().subscribe(result => {
            this.loadData();
            console.log('The dialog was closed', result);
        });
    }

    onPageChange(page) {
        this.page = page.pageIndex | 1;
        this.loadData();
    }

    onCreateClick() {
        let user = {
            email: '',
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            enabled: false,
            failedLoginAttempts: 0
        };
        this.loadForm({
            formTitle: 'Form Create User',
            formContent: user
        });
    }

    onModifyClick(user) {
        this.loadForm({
            formTitle: 'Form Update User',
            formContent: user
        });
    }

    onDeleteClick(user) {
        console.log("delete : ", user);
        this.userService.deleteById(user.id).subscribe(res => {
            console.log(res);
            this.loadData();
        });
    }

    onSearchChange(keyword) {
        console.log("onFormSearchChange : ", keyword);
    }

}

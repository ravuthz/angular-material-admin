import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MdDialog, MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { PagerResponse } from '../../shared/components/simple-pager.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    users = [];
    user = new User();
    pager = new PagerResponse();

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
        this.userService.getByPage(this.pager.number, this.pager.size, this.pager.sort).subscribe(res => {
            console.log('loadData() getByPage(page, size, sort):', res);
            this.users = res['_embedded'].users;
            this.pager = res['page'];
        });
    }

    openForm(data) {
        let dialogRef = this.dialog.open(UserFormComponent, {
            data: data
        });

        dialogRef.afterClosed().subscribe(result => {
            this.loadData();
            console.log('openForm() afterClosed(): ', result);
        });
    }

    /**
     * All event call by views always start with
     * on or my
     */

    onPageChange(pager) {
        this.pager = pager;
        this.loadData();
    }

    onSearchChange(keyword) {
        console.log('onSearchChange(keyword): ', keyword);
        //TODO: Implement single search (basic and advance)
    }

    onCreateClick(user) {
        console.log('onCreateClick(user): ', user);
        this.openForm({
            formTitle: 'Form Create User',
            formContent: user
        });
    }

    onModifyClick(user) {
        console.log('onModifyClick(user): ', user);
        this.openForm({
            formTitle: 'Form Update User',
            formContent: user
        });
    }

    onDetailClick(user) {
        //TODO: Implement user detail
    }

    onProfileClick(user) {
        //TODO: Implement user profile
    }

    onDeleteClick(user) {
        console.log('onDeleteClick(user): ', user);
        this.userService.deleteById(user.id).subscribe(res => {
            console.log(res);
            this.loadData();
        });
    }

}

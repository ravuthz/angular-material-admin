import { DataSource } from '@angular/cdk/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MdDialog, MdSnackBar, MdSort } from '@angular/material';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { UserService } from '../shares/services/user.service';
import { User } from '../shares/user';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    user: User;
    users: Array<User>;

    displayColumns = ['id', 'username', 'firstName', 'lastName', 'email'];
    database = new UserDatabase();
    dataSource: UserDataSource | null;

    @ViewChild(MdSort) sort: MdSort;

    constructor(
        public dialog: MdDialog,
        public snackBar: MdSnackBar,
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService
    ) { }


    ngOnInit() {

        this.loadData();
        // this.dataSource = new UserDataSource(this.database, this.sort);
    }

    loadData() {
        this.userService.getAll().subscribe(res => {
            console.log("getAll res: ", res);
            this.users = res['_embedded'].users;
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

export class UserDatabase {
    dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    get data(): User[] { return this.dataChange.value; }

    // constructor() {
    //     // Fill up the database with 100 users.
    //     for (let i = 0; i < 100; i++) { this.addUser(); }
    // }

    /** Adds a new user to the database. */
    addUser() {
        const copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    }

    // /** Builds and returns a new User. */
    private createNewUser() {
        let id = (this.data.length + 1);
        return {
            id: id,
            email: "test-user" + id + "@gmail.com",
            username: "test-user" + id,
            password: "123123",
            firstName: "test",
            lastName: "user",
            enabled: true,
            failedLoginAttempts: 0
        };
    }
}

export class UserDataSource extends DataSource<any> {
    constructor(private _exampleDatabase: UserDatabase, private _sort: MdSort) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<User[]> {
        const displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.mdSortChange,
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            return this.getSortedData();
        });
    }

    getSortedData(): User[] {
        const data = this._exampleDatabase.data.slice();
        if (!this._sort.active || this._sort.direction == '') { return data; }

        return data.sort((a, b) => {
            let propertyA: number | string = '';
            let propertyB: number | string = '';

            switch (this._sort.active) {
                case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
                case 'email': [propertyA, propertyB] = [a.email, b.email]; break;
                case 'username': [propertyA, propertyB] = [a.username, b.username]; break;
                case 'firstName': [propertyA, propertyB] = [a.firstName, b.firstName]; break;
                case 'lastName': [propertyA, propertyB] = [a.lastName, b.lastName]; break;
            }

            let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
        });
    }

    disconnect() { }
}

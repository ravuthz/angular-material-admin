import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MD_DIALOG_DATA, MdDialogRef, MdSnackBar } from '@angular/material';

import { BaseForm } from '../../shared/classes/base-form';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent extends BaseForm implements OnInit {

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        @Inject(MD_DIALOG_DATA) public data: any,
        public snackBar: MdSnackBar,
        public dialog: MdDialogRef<UserFormComponent>,

    ) {
        super();
    }

    ngOnInit() {
        this.initFormControl();
        this.initErrorMessage();
        this.form.patchValue(this.data.formContent);
    }

    public initFormControl() {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
            password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            enabled: true,
            failedLoginAttempts: 0
        });
    }

    public initErrorMessage() {
        this.messages = {
            email: 'Email is required or invalid',
            username: 'Username is required or length between 5 and 50',
            password: 'Password is required or length between 5 and 50',
            firstName: 'FirstName is required',
            lastName: 'LastName is required'
        };
    }

    public onFormSave() {
        this.validateAllFields();
        if (this.form.valid) {
            this.userService.create(this.form.value).subscribe(res => {
                this.onFormReset();
                this.snackBar.open('User was saved', 'Close', { duration: 1000 });
            });
        }
    }

    public onFormReset() {
        this.form.reset();
    }

    public onFormCancel() {
        this.form.reset();
        this.dialog.close();
    }

}

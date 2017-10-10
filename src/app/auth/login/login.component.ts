import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'util';

import { FormValidatorService } from '../../shared/services/form-validator.service';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    error: string;
    form: FormGroup;

    constructor(
        private router: Router,
        private authService: AuthService,
        private formValidator: FormValidatorService
    ) { }

    ngOnInit() {
        this.createForm();
        this.initAuthConfig();
    }

    createForm() {
        this.form = this.formValidator
            .add('username', 'required|minlength:6|maxlength:50', '')
            .add('password', 'required|minlength:6|maxlength:50', '')
            .build();
    }

    initAuthConfig() {
        this.authService.config({
            client_id: 'trusted-app',
            client_password: 'secret',
            grant_type: 'password'
        });
    }

    controlGetError(name) {
        return this.formValidator.getMessage(name);
    }

    formSubmit(event) {
        event.preventDefault();

        Object.keys(this.form.controls).forEach(field => {
            const control = this.form.get(field).markAsTouched({ onlySelf: true });
        });

        let valid = this.formValidator.validate();
        console.log('valid : ', valid);

        console.log("this form: ", this.form.valid, this.form.value, this.form.controls.errors);
        console.log("this errors: ", this.form.errors);

        // this.authService.login(model);
    }

    formReset() {
        this.form.reset();
    }

}

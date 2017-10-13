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
            .addField('username', 'required|minlength:6|maxlength:50', 'adminz')
            .addField('password', 'required|minlength:6|maxlength:50', '123123')
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

        if (this.form.valid) {
            this.authService.login(this.form.value);
        }

    }

    formReset() {
        this.form.reset();
    }

}

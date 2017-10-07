import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    error: string;
    form: FormGroup;

    constructor(
        private router: Router,
        private builder: FormBuilder,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.form = this.builder.group({
            username: ['adminz', [Validators.required]],
            password: ['123123', [Validators.required]]
        });

        this.authService.config({
            client_id: 'trusted-app',
            client_password: 'secret',
            grant_type: 'password'
        });
    }

    formSubmit(model, isValid: boolean, event) {
        event.preventDefault();
        this.authService.login(model);
    }

}

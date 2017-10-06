import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GRANT_TYPE_PASSWORD, TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME } from '../../shared/consts/auth.const';
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
    }

    formSubmit(model, isValid: boolean, event) {
        event.preventDefault();

        this.authService.login({
            username: model.username,
            password: model.password,
            grant_type: GRANT_TYPE_PASSWORD,
            client_id: TOKEN_AUTH_USERNAME,
            client_password: TOKEN_AUTH_PASSWORD
        });
        // this.authService.login(model.username, model.password);
    }

}

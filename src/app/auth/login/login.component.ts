import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService, Credentials } from '../auth.service';

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
            email: ['adminz@gmail.com', [Validators.required, Validators.email]],
            password: ['123123', [Validators.required]]
        });
    }

    formSubmit(model: Credentials, isValid: boolean, event) {
        event.preventDefault();
        console.log("formSubmit");
        // if (isValid) {
        // this.authService.loginWithCredentials(model);
        // this.authService.loginWithUsernamePassword("adminz", "123123");
        this.authService.jwtLogin("adminz", "123123").subscribe(res => console.log(res));
        // }
    }

}

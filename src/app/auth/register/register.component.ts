import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    form: FormGroup;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.form = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            username: new FormControl('adminz', [Validators.required]),
            password: new FormControl('123123', [Validators.required])
        });
    }

    formSubmit(model, isValid: boolean) {
        if (isValid) {
            this.authService.register(model);
        }
    }

}

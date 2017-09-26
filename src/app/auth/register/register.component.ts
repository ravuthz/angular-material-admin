import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../users/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    form: FormGroup;

    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.form = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('adminz@gmail.com', [Validators.required, Validators.email]),
            password: new FormControl('123123', [Validators.required])
        });
    }

    formSubmit(model, isValid: boolean) {
        if (isValid) {
            this.userService.create(model)
                .subscribe(res => {
                    console.log("create res", res);
                    this.router.navigate(['login']);
                });
        }
    }

}

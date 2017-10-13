import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { FormValidatorService } from '../../shared/services/form-validator.service';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
    form: FormGroup;
    constructor(
        private router: Router,
        private userService: UserService,
        private formValidator: FormValidatorService) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.form = this.formValidator
            .addFields(['email', 'username', 'firstName', 'lastName'])
            .build();
    }

    onFormSubmit() {
        if (this.form.valid) {
            let params = JSON.stringify(this.form.value);
            this.userService.search({ params }).subscribe(res => {
                console.log("res : ", res);
            });
        }
    }

}

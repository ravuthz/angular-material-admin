import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ErrorMessageService } from './error-message.service';

@Injectable()
export class FormValidatorService {

    private form: FormGroup;
    private controls = {};

    constructor(
        private builder: FormBuilder,
        private errorMessage: ErrorMessageService) { }

    markAllControls() {
        Object.keys(this.form.controls).forEach(field => {
            const control = this.form.get(field).markAsTouched({ onlySelf: true });
        });
    }

    getMessage(control) {
        let messages = [];
        let controlError = this.form.get(control).errors;

        if (controlError) {
            messages = this.errorMessage.getMessages(controlError);
        }

        return messages.join(' ');
    }

    add(key, validation, value = '') {
        let validates = this.errorMessage.getValidates(validation);
        this.controls[key] = [value, validates];
        return this;
    }

    reset() {
        this.form.reset();
    }

    build() {
        this.form = this.builder.group(this.controls);
        return this.form;
    }

    validate() {
        this.build();
        return this.form.valid;
    }

}

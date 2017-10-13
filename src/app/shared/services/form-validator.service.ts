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

    addFields(items: Array<string>) {
        let length = items.length;
        if (length > 0) {
            for (let item, i = 0; item = items[i]; i++) {
                this.controls[item] = [''];
            }
        }
        return this;
    }

    addField(key, validation = '', value = '') {
        let validates = [];
        if (validation) {
            validates = this.errorMessage.getValidates(validation);
        }
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

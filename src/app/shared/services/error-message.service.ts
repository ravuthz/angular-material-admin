import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

export const V_REQUIRED = 'required';
export const V_MINLENGTH = 'minlength';
export const V_MAXLENGTH = 'maxlength';
export const V_INVALID_PHONE = 'minlength';
export const V_INVALID_EMAIL = 'maxlength';

@Injectable()
export class ErrorMessageService {

    private messages = {
        [V_INVALID_PHONE]: 'invalid phone number',
        [V_INVALID_EMAIL]: 'invalid email address',
        [V_MINLENGTH]: 'mininum length @length',
        [V_MAXLENGTH]: 'maximun length @length',
        [V_REQUIRED]: 'can\'t be blank',
    };

    private replaceMessage(field, key, value) {
        this.messages[field] = this.messages[field].replace(key, value);
    }

    public getValidates(validate) {
        let validators = [];
        let reqRegex = validate.match(/required/ig);
        let minRegex = validate.match(/minlength:(\d)/ig);
        let maxRegex = validate.match(/maxlength:(\d)/ig);

        console.log("matchers: ", minRegex[0], maxRegex);

        if (reqRegex) {
            validators.push(Validators.required);
        }

        if (minRegex) {
            let length = minRegex[0].replace('minlength:', '');
            this.replaceMessage(V_MINLENGTH, '@length', length);
            validators.push(Validators.minLength(length));
        }

        if (maxRegex) {
            let length = minRegex[0].replace('maxlength:', '');
            this.replaceMessage(V_MAXLENGTH, '@length', length);
            validators.push(Validators.maxLength(length));
        }

        return validators;
    }

    public getMessages(errors) {
        let messages = [];

        for (let key in errors) {
            if (errors.hasOwnProperty(key)) {
                messages.push(this.messages[key]);
            }
        }

        return messages;
    }

}

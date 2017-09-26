import { FormGroup } from '@angular/forms';

export abstract class BaseForm {

    public form: FormGroup;
    public messages: any;

    public controlHasError(name) {
        return this.form.get(name).invalid && this.form.get(name).touched;
    }

    public controlGetError(name) {
        return this.messages[name];
    }

    public validateAllFields() {
        Object.keys(this.form.controls).forEach(field => {
            const control = this.form.get(field);
            control.markAsTouched({ onlySelf: true });
        });
    }

    public abstract onFormSave();

    public abstract onFormReset();

    public abstract initFormControl();

    public abstract initErrorMessage();
}

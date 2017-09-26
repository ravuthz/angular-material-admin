import { FormControl } from '@angular/forms';
import { FormGroupDirective, NgForm } from '@angular/forms/src/directives';

export function customShowOnDirtyErrorStateMatcher(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    return !!(control.invalid && (control.dirty || control.touched));
}

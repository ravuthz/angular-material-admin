import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input-error',
    template: `<md-error>{{ controlGetError('email') }}</md-error>`
})
export class InputErrorComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    public controlHasError(form, input) {
        return form.get(name).invalid && form.get(name).touched;
    }

    // public controlGetError(name) {
    //     return this.messages[name];
    // }

}

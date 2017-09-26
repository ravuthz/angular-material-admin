import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input',
    // templateUrl: './input.component.html',
    // styleUrls: ['./input.component.css']
    template: `
    <md-error *ngIf="isError">
        {{ message }}
    </md-error>
    `
})
export class InputComponent implements OnInit {

    @Input()
    formGroup: FormGroup;

    @Input()
    formControl: string; // Email is <strong>required</strong>

    @Input()
    message: string;

    isError: boolean = false;

    constructor() { }

    ngOnInit() {
        let name = this.formControl;
        console.log(this.formGroup);
        this.isError = this.formGroup.hasError(name, [name]) && this.formGroup.get(name).touched;
    }

}

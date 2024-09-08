import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'lib-text-input',
    templateUrl: './text-input.component.html',
    styleUrl: './text-input.component.css'
})
export class TextInputComponent<T> {
    @Input() label?: string;
    @Input() value!: T;
    @Input() advisoryText?: string;
    @Output() valueChanged = new EventEmitter<T>();

}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'lib-number-input',
    templateUrl: './number-input.component.html',
    styleUrl: './number-input.component.css'
})
export class NumberInputComponent<T> {
    @Input() label?: string;
    @Input() subLabel?: string;
    @Input() value!: T;
    @Input() advisoryText?: string;
    @Output() valueChanged = new EventEmitter<T>();
    maxFractionDigits = 5;
    minFractionDigits = 0;

}

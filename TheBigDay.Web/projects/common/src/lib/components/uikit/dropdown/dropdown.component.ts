import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'lib-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.css'
})
export class DropdownComponent<T> {
    @Input() label?: string
    @Input() options!: T[];
    @Input() optionLabel?: string;
    @Input() placeholder?: string;
    @Input() selectedValue?: T;
    @Output() selectedValueChanged = new EventEmitter<T>();
}

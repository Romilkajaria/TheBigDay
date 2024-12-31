import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'lib-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.css'
})
export class DropdownComponent<T> {
    @Input() label?: string
    @Input() options!: IDropdownItem<T>[];
    @Input() optionLabel?: string;
    @Input() placeholder?: string;
    @Input() selectedValue?: T;
    @Output() selectedValueChange = new EventEmitter<T>();
}

export interface IDropdownItem<T> {
    name: string,
    value: T,
}

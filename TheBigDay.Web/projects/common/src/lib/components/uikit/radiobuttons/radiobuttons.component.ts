import {Component, EventEmitter, Input, Output} from '@angular/core';
import {getGridTemplateColumns} from "../checkbox/checkbox.component";

@Component({
    selector: 'lib-radioButtons',
    templateUrl: './radiobuttons.component.html',
    styleUrl: './radiobuttons.component.css'
})
export class RadioButtonsComponent<T> {
    @Input() label!: string;
    @Input() subLabel?: string;
    @Input() items: RadioButtonConfig<T>[] = [];
    @Input() numberOfColumns = 1;
    @Input() selectedItem?: T;
    @Output() selectedItemChange = new EventEmitter<T | undefined>();
    getGridTemplateColumns = getGridTemplateColumns;
}

export interface RadioButtonConfig<T> {
    title: string,
    description?: string;
    value: T
}

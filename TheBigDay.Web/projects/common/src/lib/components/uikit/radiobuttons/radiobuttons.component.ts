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

    @Output() selectedItemChanged = new EventEmitter<RadioButtonConfig<T> | undefined>();
    selectedItem?: RadioButtonConfig<T>;
    getGridTemplateColumns = getGridTemplateColumns;

    onSelectionChanged() {
        this.selectedItemChanged.emit(this.selectedItem);
    }
}

export interface RadioButtonConfig<T> {
    title: string,
    description?: string;
    value: T
}

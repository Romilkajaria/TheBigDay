import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'lib-radioButtons',
    templateUrl: './radiobuttons.component.html',
    styleUrl: './radiobuttons.component.css'
})
export class RadioButtonsComponent<T> {
    @Input() label!: string;
    @Input() subLabel?: string;
    @Input() items!: RadioButtonConfig<T>[]

    @Output() selectedItemChanged = new EventEmitter<RadioButtonConfig<T> | undefined>();
    selectedItem?: RadioButtonConfig<T>;

    onSelectionChanged() {
        this.selectedItemChanged.emit(this.selectedItem);
    }
}

export interface RadioButtonConfig<T> {
    title: string,
    description?: string;
    value: T
}

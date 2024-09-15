import {Component, Input, Output} from '@angular/core';

@Component({
    selector: 'lib-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrl: './checkbox.component.css'
})
export class CheckboxComponent<T> {
    @Input() label!: string;
    @Input() subLabel?: string;
    @Input() options?: CheckboxConfig<T>[];
    @Output() selectedOptions: any[] = [];
}

export interface CheckboxConfig<T> {
    title: string,
    description?: string;
    value: T
}

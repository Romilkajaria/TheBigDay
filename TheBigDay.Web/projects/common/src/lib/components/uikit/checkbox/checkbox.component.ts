import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'lib-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrl: './checkbox.component.css'
})
export class CheckboxComponent<T> implements OnInit {
    @Input() label!: string;
    @Input() subLabel?: string;
    @Input() options?: CheckboxConfig<T>[];
    @Input() numberOfColumns = 1;
    @Output() optionsChanged = new EventEmitter<CheckboxConfig<T>[]>();

    getGridTemplateColumns = getGridTemplateColumns;

    selectedOptions: CheckboxConfig<any>[] = [];

    onOptionChanged() {
        this.optionsChanged.emit(this.selectedOptions);
    }

    ngOnInit(): void {
        this.options!.forEach((option) => {
            if (option.selected) {
                this.selectedOptions.push(option);
            }
        })
    }
}

export interface CheckboxConfig<T> {
    title: string,
    description?: string;
    value: T,
    selected?: boolean,
    disabled?: boolean,
}

export function getGridTemplateColumns(numberOfColumns: number) {
    let rows: string = 'auto';
    for (let i = 1; i < numberOfColumns; i++) {
        rows = rows.concat(' auto')
    }
    return rows;
}

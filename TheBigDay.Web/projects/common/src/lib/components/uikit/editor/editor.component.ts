import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'lib-editor',
    templateUrl: './editor.component.html',
    styleUrl: './editor.component.css'
})
export class EditorComponent {
    @Input() label!: string;
    @Input() subLabel?: string;
    @Input() height = '320px'
    @Input() text?: string;
    @Output() textChanged = new EventEmitter<string>()
}

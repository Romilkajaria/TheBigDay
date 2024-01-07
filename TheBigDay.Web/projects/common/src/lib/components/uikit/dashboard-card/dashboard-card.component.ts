import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'lib-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent<T> {
    @Input() cardConfig!: IDashboardCard<T>;
    @Output() onSelect = new EventEmitter<void>();
}

export interface IDashboardCard<T> {
    heading: string,
    subheading?: string,
    description: string,
    footerTemplate: TemplateRef<any>,
    maxWidth?: string;
    metadata: T
}

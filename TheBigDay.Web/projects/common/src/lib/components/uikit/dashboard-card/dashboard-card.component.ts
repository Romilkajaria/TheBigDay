import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'lib-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent {
    @Input() cardConfig!: IDashboardCard
}

export interface IDashboardCard {
    heading: string,
    subheading?: string,
    description: string,
    footerTemplate: TemplateRef<any>,
    maxWidth?: string;
}

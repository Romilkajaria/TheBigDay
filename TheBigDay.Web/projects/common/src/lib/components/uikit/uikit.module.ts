import {NgModule} from '@angular/core';
import {DashboardCardComponent} from './dashboard-card/dashboard-card.component';
import {CardModule} from "primeng/card";

@NgModule({
    imports: [
        CardModule
    ],
    declarations: [
        DashboardCardComponent,
    ],
    exports: [DashboardCardComponent]
})
export class UIkitModule {
}

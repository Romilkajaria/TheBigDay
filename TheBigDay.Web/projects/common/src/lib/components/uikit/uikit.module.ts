import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UIkitRoutingModule} from './uikit-routing.module';
import {DashboardCardComponent} from './dashboard-card/dashboard-card.component';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";

@NgModule({
    imports: [
        CommonModule,
        UIkitRoutingModule,
        ButtonModule,
        CardModule
    ],
	declarations: [
   DashboardCardComponent,
	],
    exports: [DashboardCardComponent]
})
export class UIkitModule { }

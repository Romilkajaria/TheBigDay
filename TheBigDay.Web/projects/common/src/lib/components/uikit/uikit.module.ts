import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UIkitRoutingModule} from './uikit-routing.module';
import {DashboardCardComponent} from './dashboard-card/dashboard-card.component';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CarouselModule} from "primeng/carousel";

@NgModule({
    imports: [
        CommonModule,
        UIkitRoutingModule,
        ButtonModule,
        CardModule,
        CarouselModule
    ],
	declarations: [
   DashboardCardComponent,
	],
    exports: [DashboardCardComponent]
})
export class UIkitModule { }

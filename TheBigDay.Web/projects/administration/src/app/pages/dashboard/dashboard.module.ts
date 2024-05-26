import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import {MessagesModule} from "primeng/messages";
import {SharedModule} from "primeng/api";


@NgModule({
  declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MessagesModule,
        SharedModule
    ]
})
export class DashboardModule { }

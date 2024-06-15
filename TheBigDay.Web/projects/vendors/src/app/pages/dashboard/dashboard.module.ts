import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard.component';
import {ChartModule} from 'primeng/chart';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {StyleClassModule} from 'primeng/styleclass';
import {PanelMenuModule} from 'primeng/panelmenu';
import {DashboardsRoutingModule} from './dashboard-routing.module';
import {ProductsModule} from "../products/products.module";
import {ServicesModule} from "../services/services.module";
import {MessagesModule} from "primeng/messages";
import {AccordionModule} from "primeng/accordion";
import {AvatarModule} from "primeng/avatar";
import {BadgeModule} from "primeng/badge";
import {MessageModule} from "primeng/message";
import {RippleModule} from "primeng/ripple";
import {SetUserProfileDialogComponent} from "./set-user-profile-dialog/set-user-profile-dialog.component";
import {SetStoreTypeDialogComponent} from "./set-store-type-dialog/set-store-type-dialog.component";
import {SetStoreDetailsDialogComponent} from "./set-store-details-dialog/set-store-details-dialog.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DashboardsRoutingModule,
        ProductsModule,
        ServicesModule,
        MessagesModule,
        AccordionModule,
        AvatarModule,
        BadgeModule,
        MessageModule,
        RippleModule,
        SetUserProfileDialogComponent,
        SetStoreTypeDialogComponent,
        SetStoreDetailsDialogComponent,
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }

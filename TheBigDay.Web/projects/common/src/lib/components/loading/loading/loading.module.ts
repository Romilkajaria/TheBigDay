import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoadingRoutingModule} from './loading-routing.module';
import {LoadingComponent} from './loading.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";


@NgModule({
  declarations: [
    LoadingComponent
  ],
    imports: [
        CommonModule,
        LoadingRoutingModule,
        ProgressSpinnerModule
    ],
    exports: [LoadingComponent]
})
export class LoadingModule { }

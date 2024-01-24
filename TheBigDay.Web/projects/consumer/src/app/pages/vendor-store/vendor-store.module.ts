import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VendorStoreRoutingModule} from './vendor-store-routing.module';
import {VendorStoreComponent} from "./vendor-store.component";
import {UIkitModule} from "../../../../../common/src/lib/components/uikit/uikit.module";
import {LoadingModule} from "../../../../../common/src/lib/components/loading/loading/loading.module";


@NgModule({
  declarations: [VendorStoreComponent],
    imports: [
        CommonModule,
        VendorStoreRoutingModule,
        UIkitModule,
        LoadingModule
    ]
})
export class VendorStoreModule { }

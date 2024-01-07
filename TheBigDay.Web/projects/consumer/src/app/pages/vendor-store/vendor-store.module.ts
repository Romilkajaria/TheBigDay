import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VendorStoreRoutingModule} from './vendor-store-routing.module';
import {VendorStoreComponent} from "./vendor-store.component";


@NgModule({
  declarations: [VendorStoreComponent],
  imports: [
    CommonModule,
    VendorStoreRoutingModule
  ]
})
export class VendorStoreModule { }

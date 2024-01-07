import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {VendorStoreComponent} from "./vendor-store.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: VendorStoreComponent }
    ])],
  exports: [RouterModule]
})
export class VendorStoreRoutingModule { }

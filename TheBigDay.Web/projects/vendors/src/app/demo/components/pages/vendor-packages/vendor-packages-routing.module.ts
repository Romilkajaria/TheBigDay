import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {VendorPackagesComponent} from "./vendor-packages.component";

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: VendorPackagesComponent }
  ])],
  exports: [RouterModule]
})
export class VendorPackagesRoutingModule { }

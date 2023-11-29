import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorPackagesComponent } from './vendor-packages.component';
import {VendorPackagesRoutingModule} from "./vendor-packages-routing.module";



@NgModule({
  declarations: [
    VendorPackagesComponent
  ],
  imports: [
    CommonModule,
    VendorPackagesRoutingModule
  ]
})
export class VendorPackagesModule { }

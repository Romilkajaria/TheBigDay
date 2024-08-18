import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {VenueComponent} from "./venue.component";

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: VenueComponent }
  ])],
  exports: [RouterModule]
})
export class VenueRoutingModule { }

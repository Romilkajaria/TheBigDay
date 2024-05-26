import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsComponent} from "./forms.component";



@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: FormsComponent }
  ])],
  exports: [RouterModule]
})
export class FormsRoutingModule { }

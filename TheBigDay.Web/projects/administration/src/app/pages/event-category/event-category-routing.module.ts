import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {EventCategoryComponent} from "./event-category.component";

@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: EventCategoryComponent }
  ])],
  exports: [RouterModule]
})
export class EventCategoryRoutingModule { }

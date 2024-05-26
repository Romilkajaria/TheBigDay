import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventCategoryRoutingModule } from './event-category-routing.module';
import {EventCategoryComponent} from "./event-category.component";


@NgModule({
  declarations: [EventCategoryComponent],
  imports: [
    CommonModule,
    EventCategoryRoutingModule
  ]
})
export class EventCategoryModule { }

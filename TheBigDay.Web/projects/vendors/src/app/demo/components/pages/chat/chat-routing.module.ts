import { NgModule } from '@angular/core';
import {ChatComponent} from "./chat.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ChatComponent }
  ])],
  exports: [RouterModule]
})
export class ChatRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from "./notfound.component";

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: NotfoundComponent }
    ])],
  exports: [RouterModule]
})
export class NotfoundRoutingModule { }

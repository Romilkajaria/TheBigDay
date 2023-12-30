import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoadingComponent} from "./loading.component";

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LoadingComponent }
    ])],
  exports: [RouterModule]
})
export class LoadingRoutingModule { }

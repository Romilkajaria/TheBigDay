import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DashboardComponent },
        {path: 'store', loadChildren: () => import('../vendor-store/vendor-store.module').then(m => m.VendorStoreModule)},
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
        { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
        { path: 'packages', loadChildren: () => import('./vendor-packages/vendor-packages.module').then(m => m.VendorPackagesModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FeedbackModule} from "./feedback/feedback.module";

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
      { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
      { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
      { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      { path: 'packages', loadChildren: () => import('./vendor-packages/vendor-packages.module').then(m => m.VendorPackagesModule) },
      { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule) },
      { path: 'feedback', loadChildren: () => import('./feedback/feedback.module').then(m => m.FeedbackModule) },


        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

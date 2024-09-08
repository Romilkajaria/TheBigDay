import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {VendorPageShellComponent} from "./vendor-page-shell/vendor-page-shell.component";
import {VendorAuthGuard} from "./VendorAuthGuard";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: VendorPageShellComponent, canActivate: [VendorAuthGuard],
                children: [
                    { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('../../../common/src/lib/components/auth/login/login.module').then(m => m.LoginModule)},
            { path: 'notfound', loadChildren: () => import('../../../common/src/lib/components/notfound/notfound.module').then(m => m.NotfoundModule) },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}

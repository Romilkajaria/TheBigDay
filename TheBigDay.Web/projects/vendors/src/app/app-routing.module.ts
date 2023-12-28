import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from '../../../common/src/lib/components/notfound/notfound.component';
import { LoginComponent } from "../../../common/src/lib/components/auth/login/login.component";
import {AuthGuard} from "../../../common/src/lib/components/auth/AuthGuard";
import {VendorPageShellComponent} from "./vendor-page-shell/vendor-page-shell.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: VendorPageShellComponent, canActivate: [AuthGuard],
                children: [
                    { path: '', loadChildren: () => import('../../../common/src/lib/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('../../../common/src/lib/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('../../../common/src/lib/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('../../../common/src/lib/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('../../../common/src/lib/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('../../../common/src/lib/components/auth/auth.module').then(m => m.AuthModule), component: LoginComponent },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}

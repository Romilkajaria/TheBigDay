import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {VendorPageShellComponent} from "./vendor-page-shell/vendor-page-shell.component";
import {AuthGuard} from "@auth0/auth0-angular";
import {LogoutComponent} from "../../../common/src/lib/components/auth/logout/logout.component";
import {SignupFormComponent} from "./pages/signup-form/signup-form.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: VendorPageShellComponent, canActivate: [AuthGuard],
                children: [
                    { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('../../../common/src/lib/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('../../../common/src/lib/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('../../../common/src/lib/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('../../../common/src/lib/components/auth/login/login.module').then(m => m.LoginModule)},
            { path: 'notfound', loadChildren: () => import('../../../common/src/lib/components/notfound/notfound.module').then(m => m.NotfoundModule) },
            { path: 'finish-signup', component: SignupFormComponent },
            { path: 'logout', component: LogoutComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ConsumerAuthGuard} from "./ConsumerAuthGuard";
import {ConsumerPageShellComponent} from "./consumer-page-shell/consumer-page-shell.component";
import {LandingComponent} from "./pages/landing/landing.component";
import {LogoutComponent} from "../../../common/src/lib/components/auth/logout/logout.component";
import {AuthGuard} from "@auth0/auth0-angular";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: LandingComponent},
            { path: 'app', component: ConsumerPageShellComponent,
                children:[
                    { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    {path: 'store', loadChildren: () => import('./pages/vendor-store/vendor-store.module').then(m => m.VendorStoreModule)},
                ]
            },
            { path: 'logout', component: LogoutComponent },
            { path: 'auth', loadChildren: () => import('../../../common/src/lib/components/auth/login/login.module').then(m => m.LoginModule)},
            { path: 'notfound', loadChildren: () => import('../../../common/src/lib/components/notfound/notfound.module').then(m => m.NotfoundModule) },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    providers: [ConsumerAuthGuard]
})
export class AppRoutingModule { }

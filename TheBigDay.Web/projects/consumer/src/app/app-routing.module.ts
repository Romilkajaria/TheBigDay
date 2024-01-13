import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from "../../../common/src/lib/components/auth/login/login.component";
import {ConsumerAuthGuard} from "./ConsumerAuthGuard";
import {ConsumerPageShellComponent} from "./consumer-page-shell/consumer-page-shell.component";
import {LandingComponent} from "./pages/landing/landing.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: LandingComponent},
            { path: 'app', component: ConsumerPageShellComponent,  canActivate: [ConsumerAuthGuard],
                children:[
                    { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
                ]
            },
            { path: 'auth', loadChildren: () => import('../../../common/src/lib/components/auth/auth.module').then(m => m.AuthModule), component: LoginComponent },
            { path: 'notfound', loadChildren: () => import('../../../common/src/lib/components/notfound/notfound.module').then(m => m.NotfoundModule) },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    providers: [ConsumerAuthGuard]
})
export class AppRoutingModule { }

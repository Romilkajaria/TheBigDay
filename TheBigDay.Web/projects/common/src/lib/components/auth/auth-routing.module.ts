import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AppLayoutComponent} from "../../layout/app.layout.component";
import {AuthGuard} from "./AuthGuard";
import {LoginComponent} from "./login/login.component";
import {NotfoundComponent} from "../notfound/notfound.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: AppLayoutComponent, canActivate: [AuthGuard],
        children: [
          { path: '', loadChildren: () => import('../../../../../common/src/lib/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
          { path: 'uikit', loadChildren: () => import('../../../../../common/src/lib/components/uikit/uikit.module').then(m => m.UIkitModule) },
          { path: 'utilities', loadChildren: () => import('../../../../../common/src/lib/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
          { path: 'documentation', loadChildren: () => import('../../../../../common/src/lib/components/documentation/documentation.module').then(m => m.DocumentationModule) },
          { path: 'blocks', loadChildren: () => import('../../../../../common/src/lib/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
          // { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }
        ]
      },
      { path: 'auth', loadChildren: () => import('../../../../../common/src/lib/components/auth/auth.module').then(m => m.AuthModule), component: LoginComponent },
      { path: 'landing', loadChildren: () => import('../../../../../common/src/lib/components/landing/landing.module').then(m => m.LandingModule) },
      { path: 'notfound', component: NotfoundComponent },
      { path: '**', redirectTo: '/notfound' },
    ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
    exports: [RouterModule]
})
export class AuthRoutingModule { }

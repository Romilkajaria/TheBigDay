import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from "../../../common/src/lib/components/auth/login/login.component";
import {NotfoundComponent} from "../../../common/src/lib/components/notfound/notfound.component";
import {ConsumerAuthGuard} from "./ConsumerAuthGuard";
import {ConsumerPageShellComponent} from "./consumer-page-shell/consumer-page-shell.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: ConsumerPageShellComponent, canActivate: [ConsumerAuthGuard],
        children: [
          { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
          { path: 'uikit', loadChildren: () => import('../../../common/src/lib/components/uikit/uikit.module').then(m => m.UIkitModule) },
          { path: 'utilities', loadChildren: () => import('../../../common/src/lib/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
          { path: 'documentation', loadChildren: () => import('../../../common/src/lib/components/documentation/documentation.module').then(m => m.DocumentationModule) },
          { path: 'blocks', loadChildren: () => import('../../../common/src/lib/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
          // { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }
        ]
      },
      { path: 'auth', loadChildren: () => import('../../../common/src/lib/components/auth/auth.module').then(m => m.AuthModule), component: LoginComponent },
      { path: 'notfound', component: NotfoundComponent },
      { path: '**', redirectTo: '/notfound' },
    ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule],
  providers: [ConsumerAuthGuard]
})
export class AppRoutingModule { }

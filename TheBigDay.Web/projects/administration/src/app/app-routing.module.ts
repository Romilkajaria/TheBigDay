import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AdminPageShellComponent} from "./admin-page-shell/admin-page-shell.component";
import {AdminAuthGuard} from "./admin-auth-guard";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AdminPageShellComponent, canActivate: [AdminAuthGuard],
                children: [
                    { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'forms', loadChildren: () => import('./pages/forms/forms.module').then(m => m.FormsModule) },
                    { path: 'item-categories', loadChildren: () => import('./pages/item-category/item-category.module').then(m => m.ItemCategoryModule) },
                    { path: 'event-categories', loadChildren: () => import('./pages/event-category/event-category.module').then(m => m.EventCategoryModule) }
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

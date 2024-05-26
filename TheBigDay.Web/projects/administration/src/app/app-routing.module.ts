import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AdminAuthGuard} from "./admin-auth-guard";
import {AdminPageShellComponent} from "./admin-page-shell/admin-page-shell.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AdminPageShellComponent,
                children: [
                    { path: 'forms', loadChildren: () => import('./pages/forms/forms.module').then(m => m.FormsModule) },
                    { path: 'item-categories', loadChildren: () => import('./pages/item-category/item-category.module').then(m => m.ItemCategoryModule) }
                ]
            },
            // { path: 'auth', loadChildren: () => import('../../../common/src/lib/components/auth/login/login.module').then(m => m.LoginModule)},
            // { path: 'notfound', loadChildren: () => import('../../../common/src/lib/components/notfound/notfound.module').then(m => m.NotfoundModule) },
            // { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}

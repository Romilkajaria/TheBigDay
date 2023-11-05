import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "../../../common/src/lib/page-not-found/page-not-found.component";
import {LoginPageComponent} from "./login-page/login-page.component";


export const baseRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent },
  // { path: 'login/guidelines', component: GuidelinesComponent},
  // { path: 'dashboard', component: DashboardComponent},
  // { path: 'calendar', component: CalendarComponent},
  { path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(baseRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

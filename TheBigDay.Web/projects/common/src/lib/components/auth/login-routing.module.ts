import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {LogoutComponent} from "./logout/logout.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: LoginComponent },
            { path: 'logout', component: LogoutComponent }
    ])],
    exports: [RouterModule]
})
export class LoginRoutingModule { }

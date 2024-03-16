import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        RouterModule.forChild([
        { path: '', component: LoginComponent }
    ])],
    exports: [RouterModule]
})
export class LoginRoutingModule { }

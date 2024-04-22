import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from '../login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from "primeng/calendar";
import { StepperModule } from 'primeng/stepper';
import {InputIconModule} from "primeng/inputicon";
import {IconFieldModule} from "primeng/iconfield";
import {ToggleButtonModule} from "primeng/togglebutton";
import {StepsModule} from "primeng/steps";
import {RippleModule} from "primeng/ripple";
import {FloatLabelModule} from "primeng/floatlabel";
import {EditorModule} from "primeng/editor";
import {LogoutComponent} from "../logout/logout.component";
import {LoadingModule} from "../../loading/loading/loading.module";

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        CalendarModule,
        StepperModule,
        InputIconModule,
        IconFieldModule,
        ToggleButtonModule,
        StepsModule,
        RippleModule,
        FloatLabelModule,
        EditorModule,
        LoadingModule,
    ],
    exports: [
        LoginComponent
    ],
    declarations: [LoginComponent, LogoutComponent]
})
export class LoginModule { }

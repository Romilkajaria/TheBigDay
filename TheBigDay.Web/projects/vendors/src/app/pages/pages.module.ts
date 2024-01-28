import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
    declarations: [
    SignupFormComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule
    ]
})
export class PagesModule { }

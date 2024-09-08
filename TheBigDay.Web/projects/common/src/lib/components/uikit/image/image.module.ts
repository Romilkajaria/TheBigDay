import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageComponent} from "./image.component";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {FileUploadModule} from "primeng/fileupload";


@NgModule({
    declarations: [ImageComponent],
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        FileUploadModule
    ]
})
export class ImageModule {
}

import {Component, Input, OnInit} from '@angular/core';
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {Form} from "../../../common-rest-models/Form/form";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'lib-form-builder',
  standalone: true,
    imports: [
        NgIf,
        NgForOf
    ],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent  implements OnInit{
  @Input() form: Form | undefined;

  constructor(private dialogConfig: DynamicDialogConfig<Form>) {

  }

  public ngOnInit() {
    if(!this.form) {
      this.form = this.dialogConfig.data;
    }
  }
}

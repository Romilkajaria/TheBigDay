import {Component, Input, OnInit, signal} from '@angular/core';
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {Form} from "../../../common-rest-models/Form/form";
import {NgForOf, NgIf} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'lib-form-builder',
  standalone: true,
    imports: [
        NgIf,
        NgForOf,
        ButtonModule,
        RippleModule
    ],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent  implements OnInit{
  @Input() form: Form | undefined;
  currentSubForm: Form | undefined;
  currentSubFormIndex = 0;


  constructor(private dialogConfig: DynamicDialogConfig<Form>) {

  }
    previousSubForm() {
      if (this.currentSubFormIndex === 0) {
          this.currentSubForm = undefined;
      } else {
          this.currentSubForm = this.form!.subForms![this.currentSubFormIndex--];
      }
    }

    public nextSubForm() {
      if(!this.form) return
      if (!this.currentSubForm) {
         //do nothing
      }
      else {
          this.currentSubFormIndex++;
      }
        this.currentSubForm = this.form.subForms![this.currentSubFormIndex];
    }

  public ngOnInit() {
    if(!this.form) {
      this.form = this.dialogConfig.data;
    }
  }
}

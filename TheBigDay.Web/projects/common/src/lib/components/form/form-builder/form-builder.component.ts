import {Component, Input, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Form} from "../../../common-rest-models/Form/form";
import {NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {Message} from "primeng/api";
import {FieldType} from "../../../common-rest-models/Form/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {EditorModule} from "primeng/editor";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {ColorPickerModule} from "primeng/colorpicker";
import {CheckboxModule} from "primeng/checkbox";
import {RadioButtonModule} from "primeng/radiobutton";
import {MultiSelectModule} from "primeng/multiselect";
import {ListHelpers} from "../../../helpers/list-helpers";
import {DropdownModule} from "primeng/dropdown";

@Component({
  selector: 'lib-form-builder',
  standalone: true,
    imports: [
        NgIf,
        NgForOf,
        ButtonModule,
        RippleModule,
        NgSwitch,
        NgSwitchCase,
        FormsModule,
        InputTextModule,
        EditorModule,
        InputNumberModule,
        CalendarModule,
        ColorPickerModule,
        CheckboxModule,
        RadioButtonModule,
        ReactiveFormsModule,
        MultiSelectModule,
        DropdownModule
    ],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
    providers: []
})
export class FormBuilderComponent  implements OnInit{
  @Input() form: Form | undefined;
  currentSubForm: Form | undefined;
  currentSubFormIndex = 0;


  constructor(private dialogConfig: DynamicDialogConfig<Form>,
              private ref: DynamicDialogRef) {

  }
    previousSubForm() {
      if (this.currentSubFormIndex === 0) {
          this.currentSubForm = undefined;
      } else {
          this.currentSubFormIndex = this.currentSubFormIndex - 1;
          this.currentSubForm = this.form!.subForms![this.currentSubFormIndex];
      }
    }

    public nextSubForm() {
      if(!this.form) return
      if (!this.currentSubForm) {
         //do nothing
      }
      else {
          this.currentSubFormIndex = this.currentSubFormIndex + 1;
      }
        this.currentSubForm = this.form.subForms![this.currentSubFormIndex];
    }

    isOnLastStep(id: string | undefined) {
      if (!id || !this.currentSubForm || !this.form || !this.form?.subForms) return false;
      const lastStep = this.form.subForms[this.form.subForms.length - 1];
      return this.currentSubForm.id === lastStep.id;
    }

    close(toastMessage?: Message) {
        this.ref.close(toastMessage);
    }

  public ngOnInit() {
    if(!this.form) {
      this.form = this.dialogConfig.data;
    }
  }

    protected readonly FieldType = FieldType;
    protected readonly ListHelpers = ListHelpers;
    testRadioValue: any;
}

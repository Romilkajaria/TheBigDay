import {Component} from '@angular/core';
import {
    Form,
    FormLevel,
    FormLevelLabelRecord,
    ItemType,
    ItemTypeLabelRecord
} from 'projects/common/src/lib/common-rest-models/Form/form';
import {ConfirmationService, MessageService} from "primeng/api";
import {
    FieldType,
    FieldTypeLabelRecord,
    FormField
} from "../../../../../common/src/lib/common-rest-models/Form/form-field";
import {FormService} from "./form.service";
import {ItemCategory} from "../../../../../common/src/lib/common-rest-models/item-category";
import {forkJoin} from "rxjs";
import {ItemCategoryService} from "../item-category/item-category.service";
import {DropdownChangeEvent} from "primeng/dropdown";

@Component({
  selector: 'administration-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
    providers: [ConfirmationService,MessageService]

})
export class FormsComponent {
    public forms: Form[] = [];
    public selectedForm?: Form;

    public readonly newForm: Form = {
        id: undefined,
        name: '',
        description: '',
        isDeleted: false,
        formLevel: FormLevel.STORE,
        itemType: undefined,
        itemCategoryId: undefined,
        fields: [],
        subForms: []
    }

    public readonly newField: FormField = {
        fieldId: undefined,
        label: "",
        placeholder: "",
        required: false,
        type: FieldType.STRING
    }

    public readonly formTypes = [ItemType.PRODUCT, ItemType.SERVICE];
    public readonly ItemTypeLabelRecord = ItemTypeLabelRecord;

    public readonly formLevels = [FormLevel.ITEM, FormLevel.STORE]
    public readonly FormLevelLabelRecord = FormLevelLabelRecord;

    public readonly FieldType = FieldType;

    public readonly fieldTypes = [
        FieldType.STRING,
        FieldType.INT32,
        FieldType.INT64,
        FieldType.CHECKBOX,
        FieldType.DROPDOWN,
        FieldType.DROPDOWN_MULTISELECT,
        FieldType.RICH_TEXT,
        FieldType.RADIO,
        FieldType.FILE_UPLOAD,
        FieldType.DATE_PICKER,
        FieldType.COLOR_PICKER,
        FieldType.EMAIL,
    ];
    itemCategories: ItemCategory[] = [];

    public constructor(private formService: FormService, private itemCategoryService: ItemCategoryService) {
        this.updateData();
    }

    updateData() {
        forkJoin([this.formService.getForms(), this.itemCategoryService.getCategories()]).subscribe(
            ([forms, categories]) => {
                this.forms = forms;
                this.itemCategories = categories;
            }
        )
    }
    createNew() {
        this.selectedForm = {...this.newForm};
    }

    createNewSubForm(form: Form) {
        const subForm = {...this.newForm}
        subForm.itemCategory = form.itemCategory;
        subForm.itemCategoryId = form.itemCategoryId;
        subForm.formLevel = form.formLevel;
        subForm.itemType = form.itemType;
        form.subForms!.push(subForm);
    }

    createNewField() {
        if(this.selectedForm) {
            this.selectedForm.fields!.push({...this.newField})
        }
    }

    deleteConfirmation() {

    }

    addOrUpdate() {
        if (this.selectedForm ) {
            this.selectedForm.id
                ? this.formService.update(this.selectedForm).subscribe(() => this.updateData())
                : this.formService.add(this.selectedForm).subscribe(() => this.updateData());
        }
    }

    getFieldTypeLabel(type: FieldType) {
        return FieldTypeLabelRecord[type];
    }
}

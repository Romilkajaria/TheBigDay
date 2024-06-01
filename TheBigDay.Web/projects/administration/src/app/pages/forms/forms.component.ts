import { Component } from '@angular/core';
import { Form } from 'projects/common/src/lib/common-rest-models/Form/form';

@Component({
  selector: 'administration-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
    public forms: Form[] = [];
    public selectedForm?: Form;
}

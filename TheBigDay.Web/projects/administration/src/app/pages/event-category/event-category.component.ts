import {Component} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {EventCategoryService} from "../../../../../common/src/lib/common-rest-services/event-category.service";
import {EventCategory} from "../../../../../common/src/lib/common-rest-models/event.category";

@Component({
    selector: 'administration-event-category',
    templateUrl: './event-category.component.html',
    styleUrl: './event-category.component.scss',
    providers: [ConfirmationService, MessageService]

})
export class EventCategoryComponent {
    public eventCategories: EventCategory[] = []
    public selectedCategory?: EventCategory;
    public readonly newCategory: EventCategory = {
        name: '',
        id: undefined,
    }

    constructor(private eventCategoryService: EventCategoryService, private confirmationService: ConfirmationService) {
        this.updateData();
    }

    updateData() {
        this.eventCategoryService.getEventCategories().subscribe((ic) => {
            this.eventCategories = ic;
            this.selectedCategory = undefined;
        });
    }

    createNew() {
        this.selectedCategory = {...this.newCategory};
    }

    addOrUpdate() {
        if (this.selectedCategory) {
            this.selectedCategory.id
                ? this.eventCategoryService.update(this.selectedCategory).subscribe(() => this.updateData())
                : this.eventCategoryService.add(this.selectedCategory).subscribe(() => this.updateData());
        }
    }

    delete() {
        if (this.selectedCategory && this.selectedCategory.id) {
            this.eventCategoryService.deleteCategory(this.selectedCategory.id).subscribe(() => {
                this.updateData();
                this.selectedCategory = undefined;
            })
        }
    }

    deleteConfirmation() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this category?',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: "pi pi-times",
            rejectIcon: "none",
            acceptLabel: 'Delete',
            rejectLabel: 'Cancel',
            accept: () => this.delete(),
        })
    }
}

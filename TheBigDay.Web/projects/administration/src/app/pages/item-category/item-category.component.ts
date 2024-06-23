import { Component } from '@angular/core';
import {ItemCategory} from "../../../../../common/src/lib/common-rest-models/item-category";
import {ItemCategoryService} from "../../../../../common/src/lib/common-rest-services/item-category.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'administration-item-category',
  templateUrl: './item-category.component.html',
  styleUrl: './item-category.component.scss',
    providers: [ConfirmationService,MessageService]
})
export class ItemCategoryComponent {
    public itemCategories: ItemCategory[] = [];
    public selectedCategory?: ItemCategory;

    constructor(private categoryService: ItemCategoryService, private confirmationService: ConfirmationService) {
        this.updateData();
    }

    updateData() {
        this.categoryService.getCategories().subscribe((ic) => this.itemCategories = ic);
    }

    createNew() {
        this.selectedCategory = {
            name: '',
            id: undefined,
            subCategories: undefined
        };
    }

    addOrUpdate() {
        if(this.selectedCategory) {
            this.selectedCategory.id
                ? this.categoryService.update(this.selectedCategory).subscribe(() => this.updateData())
                : this.categoryService.add(this.selectedCategory).subscribe(() => this.updateData());
        }
    }

    delete() {
        if(this.selectedCategory && this.selectedCategory.id) {
            this.categoryService.deleteCategory(this.selectedCategory.id).subscribe(() => this.updateData())
        }
    }

    deleteConfirmation() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete this category?',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon:"pi pi-times",
            rejectIcon:"none",
            acceptLabel: 'Delete',
            rejectLabel: 'Cancel',
            accept: () => this.delete(),
        })
    }
}

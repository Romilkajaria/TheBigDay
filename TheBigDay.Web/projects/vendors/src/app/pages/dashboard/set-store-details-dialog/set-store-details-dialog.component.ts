import {Component, OnInit} from '@angular/core';
import {Store} from "../../../../../../common/src/lib/common-rest-models/store";
import {ItemCategory} from "../../../../../../common/src/lib/common-rest-models/item-category";
import {
    StoreService
} from "../../../../../../common/src/lib/common-rest-services/store/store-service.service";
import {AuthorizeService} from "../../../../../../common/src/lib/components/auth/login/authorize.service";
import {ItemCategoryService} from "../../../../../../common/src/lib/common-rest-services/item-category.service";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {EditorModule} from "primeng/editor";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {NgIf} from "@angular/common";

@Component({
  selector: 'store-set-store-details-dialog',
  standalone: true,
    imports: [
        InputTextModule,
        FormsModule,
        EditorModule,
        ButtonModule,
        RippleModule,
        NgIf
    ],
  templateUrl: './set-store-details-dialog.component.html',
  styleUrl: './set-store-details-dialog.component.scss'
})
export class SetStoreDetailsDialogComponent implements OnInit {
    public store?: Store
    public itemCategories?: ItemCategory[];
    public stepIndex = 0;

    constructor(private storeService: StoreService,
                private authService: AuthorizeService,
                itemCategoryService: ItemCategoryService) {
        itemCategoryService.getCategories().subscribe((ic) => this.itemCategories = ic)

    }

    public ngOnInit() {
        this.store = this.authService.current?.store;
    }

    save() {

    }
}

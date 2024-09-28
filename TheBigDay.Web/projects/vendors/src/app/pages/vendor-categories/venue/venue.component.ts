import {Component, Input, OnInit} from '@angular/core';
import {TableRowSelectEvent} from "primeng/table";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {Message, MessageService} from "primeng/api";
import {Store} from "../../../../../../common/src/lib/common-rest-models/store";
import {ItemCategory} from "../../../../../../common/src/lib/common-rest-models/item-category";
import {TBDItemColumnMap, TBDItemColumnNames} from "../../../../../../common/src/lib/helpers/tbd-item-table-column";
import {AuthorizeService} from "../../../../../../common/src/lib/components/auth/login/authorize.service";
import {ItemCategoryService} from "../../../../../../common/src/lib/common-rest-services/item-category.service";
import {AddVenueComponent} from "./add-venue/add-venue.component";
import {Venue} from "../../../../../../common/src/lib/common-rest-models/venue";
import {VenueService} from "../../../../../../common/src/lib/common-rest-services/venue/venue.service";


@Component({
    selector: 'app-venue',
    templateUrl: './venue.component.html',
    styleUrls: ['./venue.component.scss'],
    providers: [DialogService, MessageService],
})
export class VenueComponent implements OnInit {
    @Input() store: Store | undefined;
    @Input() categoryId!: string;
    itemCategory?: ItemCategory;
    venues?: any[];
    loading: boolean = true;
    ref = new DynamicDialogRef();
    venueColumnNames = TBDItemColumnNames
    productColumns = TBDItemColumnMap

    constructor(private venueService: VenueService,
                private dialogService: DialogService,
                private messageService: MessageService,
                public auth: AuthorizeService,
                private itemCategoryService: ItemCategoryService) {
    }

    ngOnInit(): void {
        this.itemCategoryService.getCategories().subscribe(
            (ic) => this.itemCategory = ic.find((i) => i.id === this.categoryId));
        this.updateData();
    }

    createVenue() {
        this.ref = this.dialogService.open(AddVenueComponent, {
            header: `New venue`,
            width: '50rem',
            maximizable: true,
        });
        this.onCloseSubscribe();
    }

    onRowSelect($event: TableRowSelectEvent) {
        this.ref = this.dialogService.open(AddVenueComponent, {
            header: 'Edit: ' + $event.data.name,
            data: $event.data as Venue,
            width: '50rem',
            maximizable: true
        })
        this.onCloseSubscribe();
    }

    onCloseSubscribe() {
        this.ref.onClose.subscribe((toastMessage: Message) => {
            if (toastMessage) {
                this.messageService.add(toastMessage);
                this.updateData();
            }
        });
    }

    private updateData() {
        this.loading = false;
        // this.venueService.getVenues().subscribe({
        //   next: (p: Venue[]) => {
        //     this.loading = false
        //     this.venues = p;
        //   },
        //   error: (e) => this.messageService.add(getToastMessage(ToastMessageType.ERROR, e.message)),
        // })
    }
}


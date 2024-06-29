import {Component, Input, OnInit} from '@angular/core';
import {
  CommonServicesService
} from "../../../../../common/src/lib/common-rest-services/services/common-services-service.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {Message, MessageService} from "primeng/api";
import {TableRowSelectEvent} from "primeng/table";
import {TBDItemColumnMap, TBDItemColumnNames} from "../../../../../common/src/lib/helpers/tbd-item-table-column";
import {AddServicesFormComponent} from "./add-services-form/add-services-form.component";
import {getToastMessage, ToastMessageType} from "../../../../../common/src/lib/helpers/toastMessages";
import {FormEntry} from "../../../../../common/src/lib/common-rest-models/form-entry";
import {Store} from "../../../../../common/src/lib/common-rest-models/store";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [DialogService, MessageService],
})
export class ServicesComponent  implements OnInit{
    @Input() store: Store | undefined;
  loading = true;
  services?: FormEntry[];
  ref = new DynamicDialogRef();
  ServiceColumnNames = TBDItemColumnNames;
  ServiceColumns = TBDItemColumnMap;

  constructor(private servicesService: CommonServicesService,
              private dialogService: DialogService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.updateData();

  }

  createService() {
    this.ref = this.dialogService.open(AddServicesFormComponent, {header: 'New Service', width: '50rem', maximizable: true, });
    this.onCloseSubscribe();
  }

  onRowSelect($event: TableRowSelectEvent) {
    this.ref = this.dialogService.open(AddServicesFormComponent, {header: 'Edit: ' + $event.data.name, data: $event.data as FormEntry, width: '50rem', maximizable: true})
    this.onCloseSubscribe();
  }

  onCloseSubscribe() {
    this.ref.onClose.subscribe((toastMessage: Message) => {
      if(toastMessage) {
        this.messageService.add(toastMessage);
        this.updateData();
      }
    });
  }

  private updateData() {
    this.loading = true;
    this.servicesService.getServices().subscribe({
      next: (p: FormEntry[]) => {
        this.loading = false
        this.services = p;
      },
      error: (e) => this.messageService.add(getToastMessage(ToastMessageType.ERROR, e.message)),
    })
  }
}

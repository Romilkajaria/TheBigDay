import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
    @Input() showSearch = false;
    @Input() showCart = false;

    items!: MenuItem[];


    constructor(public layoutService: LayoutService) { }
}

import {Component, Input, TemplateRef} from '@angular/core';
import {LayoutService} from "./service/app.layout.service";
import {User} from "../common-rest-models/user";

@Component({
    selector: 'app-layout',
    templateUrl: './app.layout.component.html'
})
export class AppLayoutComponent {
    @Input() contentTemplate!: TemplateRef<any>;
    @Input() user?: User | null;
    @Input() showSearch = false;
    @Input() showCart = false;
    @Input() hideIcons = false;

    isSidebarVisible = false;

    constructor(public layoutService: LayoutService) {
        this.layoutService.overlayOpen$.subscribe(() => this.isSidebarVisible = !this.isSidebarVisible);
    }

    closeCallback() {
        this.layoutService.onMenuToggle();
    }
}

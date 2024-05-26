import {Component, Input, OnDestroy, Renderer2, signal, TemplateRef, ViewChild} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { LayoutService } from "./service/app.layout.service";
import { AppSidebarComponent } from "./app.sidebar.component";
import { AppTopBarComponent } from './app.topbar.component';
import {User} from "@auth0/auth0-angular";

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

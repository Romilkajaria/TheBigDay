import {Component, Input, OnDestroy, Renderer2, signal, TemplateRef, ViewChild} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { LayoutService } from "./service/app.layout.service";
import { AppSidebarComponent } from "./app.sidebar.component";
import { AppTopBarComponent } from './app.topbar.component';

@Component({
    selector: 'app-layout',
    templateUrl: './app.layout.component.html'
})
export class AppLayoutComponent {
    @Input() contentTemplate!: TemplateRef<any>;

    isSidebarVisible = false;


    constructor(public layoutService: LayoutService) {
        this.layoutService.overlayOpen$.subscribe(() => this.isSidebarVisible = !this.isSidebarVisible);
    }

    closeCallback() {
        this.layoutService.onMenuToggle();
    }
}

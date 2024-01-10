import {Input, OnInit} from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
    @Input() public menuItems: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
    }
}

import {Component, OnInit} from '@angular/core';
import {AuthorizeService} from "../../../../common/src/lib/components/auth/login/authorize.service";
import {
    LocalStorageService
} from "../../../../common/src/lib/common-services/local-storage-service/local-storage.service";
import {Vendor} from "../../../../common/src/lib/common-rest-models/vendor";

@Component({
  selector: 'app-vendor-page-shell',
  templateUrl: './vendor-page-shell.component.html',
  styleUrls: ['./vendor-page-shell.component.scss']
})
export class VendorPageShellComponent {
    public readonly vendorMenu = vendorMenu;

    constructor(public authService: AuthorizeService) {}
}

export const vendorMenu = [
    {
        label: 'Home',
        items: [
            { label: 'Dashboard', icon: 'pi-fw pi-home', routerLink: ['/'] }
        ]
    },
    {
        label: 'Manage',
        items: [
            { label: 'Products', icon: 'pi-fw pi-shopping-bag', routerLink: ['/pages/products'] },
            { label: 'Services', icon: 'pi-fw pi-truck', routerLink: ['/pages/services'] },
            { label: 'Packages', icon: 'pi-fw pi-box', routerLink: ['/pages/packages'] },
        ]
    },
    {
        label: 'Comms',
        items: [
            { label: 'Chat', icon: 'pi-fw pi-comments', routerLink: ['/pages/chat'] },
            { label: 'Feedback', icon: 'pi-fw pi-star', routerLink: ['/pages/feedback'] },
        ]
    },
    {
        label: 'Configuration',
        items: [
            { label: 'Settings', icon: 'pi-fw pi-cog', routerLink: ['/pages/settings'] },
            { label: 'Sign out', icon: 'pi-fw pi-sign-out', routerLink: ['/auth/logout'] },
        ]
    },

    // {
    //     label: 'UI Components',
    //     items: [
    //                 { label: 'Form Layout', icon: 'pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
    //                 { label: 'Input', icon: 'pi-fw pi-check-square', routerLink: ['/uikit/input'] },
    //                 { label: 'Float Label', icon: 'pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
    //                 { label: 'Invalid State', icon: 'pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
    //                 { label: 'Button', icon: 'pi-fw pi-box', routerLink: ['/uikit/button'] },
    //         { label: 'Table', icon: 'pi-fw pi-table', routerLink: ['/uikit/table'] },
    //         { label: 'List', icon: 'pi-fw pi-list', routerLink: ['/uikit/list'] },
    //         { label: 'Tree', icon: 'pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
    //         { label: 'Panel', icon: 'pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
    //         { label: 'Overlay', icon: 'pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
    //         { label: 'Media', icon: 'pi-fw pi-image', routerLink: ['/uikit/media'] },
    //         { label: 'Menu', icon: 'pi-fw pi-bars', routerLink: ['/uikit/menu']},
    //         { label: 'Message', icon: 'pi-fw pi-comment', routerLink: ['/uikit/message'] },
    //         { label: 'File', icon: 'pi-fw pi-file', routerLink: ['/uikit/file'] },
    //         { label: 'Chart', icon: 'pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
    //         { label: 'Misc', icon: 'pi-fw pi-circle', routerLink: ['/uikit/misc'] }
    //     ]
    // },
    // {
    //     label: 'Prime Blocks',
    //     items: [
    //         { label: 'Free Blocks', icon: 'pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
    //         { label: 'All Blocks', icon: 'pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
    //     ]
    // },
    // {
    //     label: 'Utilities',
    //     items: [
    //         { label: 'PrimeIcons', icon: 'pi-fw pi-prime', routerLink: ['/utilities/icons'] },
    //         { label: 'PrimeFlex', icon: 'pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
    //     ]
    // },
    // {
    //     label: 'Pages',
    //     icon: 'pi-fw pi-briefcase',
    //     items: [
    //         {
    //             label: 'Landing',
    //             icon: 'pi-fw pi-globe',
    //             routerLink: ['/dashboard']
    //         },
    //         {
    //             label: 'Auth',
    //             icon: 'pi-fw pi-user',
    //             items: [
    //                 {
    //                     label: 'Login',
    //                     icon: 'pi-fw pi-sign-in',
    //                     routerLink: ['/auth/login']
    //                 },
    //                 {
    //                     label: 'Error',
    //                     icon: 'pi-fw pi-times-circle',
    //                     routerLink: ['/auth/error']
    //                 },
    //                 {
    //                     label: 'Access Denied',
    //                     icon: 'pi-fw pi-lock',
    //                     routerLink: ['/auth/access']
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Crud',
    //             icon: 'pi-fw pi-pencil',
    //             routerLink: ['/pages/crud']
    //         },
    //         {
    //             label: 'Timeline',
    //             icon: 'pi-fw pi-calendar',
    //             routerLink: ['/pages/timeline']
    //         },
    //         {
    //             label: 'Not Found',
    //             icon: 'pi-fw pi-exclamation-circle',
    //             routerLink: ['/notfound']
    //         },
    //         {
    //             label: 'Empty',
    //             icon: 'pi-fw pi-circle-off',
    //             routerLink: ['/pages/empty']
    //         },
    //     ]
    // },
    // {
    //     label: 'Hierarchy',
    //     items: [
    //         {
    //             label: 'Submenu 1', icon: 'pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 1.1', icon: 'pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 1.1.1', icon: 'pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.2', icon: 'pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.3', icon: 'pi-fw pi-bookmark' },
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 1.2', icon: 'pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 1.2.1', icon: 'pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //             ]
    //         },
    //         {
    //             label: 'Submenu 2', icon: 'pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 2.1', icon: 'pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 2.1.1', icon: 'pi-fw pi-bookmark' },
    //                         { label: 'Submenu 2.1.2', icon: 'pi-fw pi-bookmark' },
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 2.2', icon: 'pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 2.2.1', icon: 'pi-fw pi-bookmark' },
    //                     ]
    //                 },
    //             ]
    //         }
    //     ]
    // },
    // {
    //     label: 'Get Started',
    //     items: [
    //         {
    //             label: 'Documentation', icon: 'pi-fw pi-question', routerLink: ['/documentation']
    //         },
    //         {
    //             label: 'View Source', icon: 'pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
    //         }
    //     ]
    // }
];

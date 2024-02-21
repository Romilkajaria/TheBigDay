import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import { CheckboxModule } from "primeng/checkbox";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { InputTextModule } from "primeng/inputtext";
import { CommonModule as AngularCommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { MenuModule } from "primeng/menu";
import { LogoutComponent } from './components/auth/logout/logout.component';
import * as i0 from "@angular/core";
export class CommonModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CommonModule, declarations: [CommonComponent,
            LogoutComponent], imports: [CheckboxModule,
            ButtonModule,
            RippleModule,
            InputTextModule,
            AngularCommonModule,
            FormsModule,
            MenuModule], exports: [CommonComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonModule, imports: [CheckboxModule,
            ButtonModule,
            RippleModule,
            InputTextModule,
            AngularCommonModule,
            FormsModule,
            MenuModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CommonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CommonComponent,
                        LogoutComponent,
                    ],
                    imports: [
                        CheckboxModule,
                        ButtonModule,
                        RippleModule,
                        InputTextModule,
                        AngularCommonModule,
                        FormsModule,
                        MenuModule
                    ],
                    exports: [
                        CommonComponent,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbi9zcmMvbGliL2NvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLElBQUksbUJBQW1CLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7O0FBcUI1RSxNQUFNLE9BQU8sWUFBWTsrR0FBWixZQUFZO2dIQUFaLFlBQVksaUJBaEJyQixlQUFlO1lBQ2YsZUFBZSxhQUdmLGNBQWM7WUFDZCxZQUFZO1lBQ1osWUFBWTtZQUNaLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLFVBQVUsYUFHVixlQUFlO2dIQUdOLFlBQVksWUFackIsY0FBYztZQUNkLFlBQVk7WUFDWixZQUFZO1lBQ1osZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsVUFBVTs7NEZBTUQsWUFBWTtrQkFsQnhCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGVBQWU7d0JBQ2YsZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLFVBQVU7cUJBQ1g7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7cUJBQ2hCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0NoZWNrYm94TW9kdWxlfSBmcm9tIFwicHJpbWVuZy9jaGVja2JveFwiO1xuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gXCJwcmltZW5nL2J1dHRvblwiO1xuaW1wb3J0IHtSaXBwbGVNb2R1bGV9IGZyb20gXCJwcmltZW5nL3JpcHBsZVwiO1xuaW1wb3J0IHtJbnB1dFRleHRNb2R1bGV9IGZyb20gXCJwcmltZW5nL2lucHV0dGV4dFwiO1xuaW1wb3J0IHtDb21tb25Nb2R1bGUgYXMgQW5ndWxhckNvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01lbnVNb2R1bGV9IGZyb20gXCJwcmltZW5nL21lbnVcIjtcbmltcG9ydCB7IExvZ291dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hdXRoL2xvZ291dC9sb2dvdXQuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb21tb25Db21wb25lbnQsXG4gICAgTG9nb3V0Q29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ2hlY2tib3hNb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIFJpcHBsZU1vZHVsZSxcbiAgICBJbnB1dFRleHRNb2R1bGUsXG4gICAgQW5ndWxhckNvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNZW51TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Db21wb25lbnQsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uTW9kdWxlIHsgfVxuIl19
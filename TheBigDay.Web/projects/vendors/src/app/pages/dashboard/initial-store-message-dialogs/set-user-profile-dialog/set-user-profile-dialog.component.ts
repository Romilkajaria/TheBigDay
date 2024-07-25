import {Component} from '@angular/core';
import { DynamicDialogRef} from "primeng/dynamicdialog";
import {DialogConfig} from "@angular/cdk/dialog";
import { StoreType} from "../../../../../../../common/src/lib/common-rest-models/store";
import {ConfirmationService, Message, MessageService} from "primeng/api";
import {getToastMessage, ToastMessageType} from "../../../../../../../common/src/lib/helpers/toastMessages";
import {User} from "../../../../../../../common/src/lib/common-rest-models/user";
import {AuthorizeService} from "../../../../../../../common/src/lib/components/auth/login/authorize.service";
import {UserService} from "../../../../../../../common/src/lib/common-rest-services/user/user.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'store-set-user-profile-dialog',
  templateUrl: './set-user-profile-dialog.component.html',
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        InputTextModule,
        CalendarModule,
        RippleModule
    ],
    providers: [DialogConfig, MessageService, ConfirmationService]
})
export class SetUserProfileDialogComponent {
    public loading = false;
    public user: User

    constructor(
                private messageService: MessageService,
                private ref: DynamicDialogRef,
                private userService: UserService,
                auth: AuthorizeService) {
        this.user = auth.current!;
    }

    protected readonly StoreType = StoreType;

    save() {
        this.loading = true;
        this.userService.updateUserProfile(this.user).subscribe({
            next: () => {
                this.confirmation("user details updated");
            },
            error: (er) => {
                this.confirmation("Failed to update user details", er.message);
            }
        })
    }

    confirmation(toastMessage: string, errorMessage?: string) {
        this.loading = false;
        if(errorMessage) {
            this.messageService.add(getToastMessage(ToastMessageType.ERROR, toastMessage + errorMessage));
        } else {
            this.close(getToastMessage(ToastMessageType.SUCCESS, toastMessage));
        }
    }

    close(toastMessage?: Message) {
        this.ref.close(toastMessage);
    }

}

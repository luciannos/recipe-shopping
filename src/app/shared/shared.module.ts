import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoggingService } from "../logging.service";

import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingComponent } from "./loading/loading.component";
import { PlaceHolderDirective } from "./placeholder/placeholder.directive";

@NgModule({
    declarations:[
        AlertComponent,
        LoadingComponent,
        PlaceHolderDirective,
        DropdownDirective
    ],
    imports:[
        CommonModule,
    ],
    exports:[
        AlertComponent,
        LoadingComponent,
        PlaceHolderDirective,
        DropdownDirective,
        CommonModule
    ],
    providers:[LoggingService]
})

export class SharedModule{}
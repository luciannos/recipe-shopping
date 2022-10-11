import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
    imports:[RouterModule.forChild([{path:'',component: ShoppingListComponent}])],
    exports:[RouterModule]
})

export class ShoppingListRoutingModule{}
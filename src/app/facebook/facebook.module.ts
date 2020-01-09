import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FacebookRoutingModule } from "./facebook-routing.module";
import { FacebookComponent } from "./facebook.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FacebookRoutingModule
    ],
    declarations: [
        FacebookComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FacebookModule { }

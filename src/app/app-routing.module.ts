import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/scan", pathMatch: "full" },
    { path: "scan", loadChildren: () => import("~/app/scan/scan.module").then((m) => m.ScanModule) },
    { path: "browse", loadChildren: () => import("~/app/facebook/facebook.module").then((m) => m.FacebookModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

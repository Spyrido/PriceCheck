import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import {EventData} from "tns-core-modules/data/observable";
import {Switch} from "tns-core-modules/ui/switch";
import {Vibrate} from "nativescript-vibrate";
import * as app from "tns-core-modules/application";

//import { from } from "rxjs";

@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    // Sound Setting
    onCheckedChange(args: EventData) {
        const sw = args.object as Switch;
        const isChecked = sw.checked; // boolean
        if (isChecked ===true) {
            const  beepOnScan= true;
        }else{
            const  beepOnScan= false;
        }
    }
     // Vibrate Setting
    onCheckedChange1(args: EventData) {
        const sw1 = args.object as Switch;
        const isChecked1 = sw1.checked; // boolean
        if (isChecked1 === true) {
            this.vibrator.vibrate(1000);
        }

}

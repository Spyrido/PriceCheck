import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as Facebook from "nativescript-facebook";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Facebook Login",
    templateUrl: "./facebook.component.html"
})
export class FacebookComponent implements OnInit {

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

    onLogin(eventData: FacebookComponent.LoginEventData){
        if(eventData.error){
            alert("Error during login:"+ eventData.error);
        }else{
            console.log(eventData.loginResponse.token);
        }
    }
}

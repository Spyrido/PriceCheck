import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import {registerElement} from "nativescript-angular/element-registry";
import {MLKitScanBarcodesOnDeviceResult,MLKitScanBarcodesResulBarcode, MLKitScanBarcodesResultBarcode} from "nativescript-plugin-firebase/mlkit/barcodescanning";
import {getFile, getImage , getJSON,gerString, request, HttpResponse} from "tns-core-modules/http";
import * as app from "tns-core-modules/application";
import * as Camera from "nativescript-camera";

registerElement("MLKitBarcodeScanner",()=>require("nativescript-plugin-firebase/mlkit/barcodescanning").MLKitBarcodeScanner);
const firebase= require("nativescript-plugin-firebase");
@Component({
    selector: "Scan",
    templateUrl: "./scan.component.html"
})
export class ScanComponent implements OnInit {

    barcodes: Array<MLKitScanBarcodesResultBarcode>;

    constructor() {
        super();
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    onBarcodeScanResult(event: any): void {
        const result: MLKitScanBarcodesOnDeviceResult = event.value;
        this.barcodes = result.barcodes;

        if (this.barcodes.length > 0) {
          //Web Services login
          request({
            method:"POST" ,
            url: "https://demo.oncloud.gr/s1services",
            content: JSON.stringify({"service": "login",
           "username": "demo","password":"demo","appId": "157"})
            }).then((response)=> {

            //Web Services authenticate
            request({
              method:"POST" ,
              url: "https://demo.oncloud.gr/s1services",
              content: JSON.stringify({"service": "authenticate",
             "clientID":response.content.toJSON().clientID,	"COMPANY": "1000",
             "BRANCH":   "1000","MODULE": "0","REFID": "301","USERID":"301"})
              }).then((response2)=> {

                request({
                  method: "POST" ,
                  url: "https://demo.oncloud.gr/s1services",
                  content: JSON.stringify({"CLIENTID":response2.content.toJSON().clientID,
                  "APPID":157,"LONGITUDE":"",
               "LATITUDE":"","deviceId":"dwyklw83gx","SERVICE":"GetBrowserInfo",
"OBJECT":"01100313514211/object=ITEM&list=1046.1278638916&form=1047.1160928749&rj=reljobsMtrl&root=1&x=009","LIST":"1046.1278638916","FILTERS":"ITEM.CODE1=851.42.3.078&ITEM.CODE1_TO=851.42.3.078","REQID":"","SORT":""})
                  }).then((response3)=>  {

                    request({
                      method: "POST" ,
                       url: "https://demo.oncloud.gr/s1services",
                       content:JSON.stringify({"SERVICE":"GetBrowserData",
                      "CLIENTID":response2.content.toJSON().clientID,"APPID":157,
                       "REQID":response3.content.toJSON().reqID,"START":0,
                        "LIMIT":30,"LONGITUDE":"","LATITUDE":"",
                       "deviceId":"dwyklw83gx"})

                     }).then((response4)=>{

                       alert({
                           title: "Scan result",
                           message:"Name:"+ response4.content.toJSON().rows[0][4] +
                           "\nPrice:"+ response4.content.toJSON().rows[0][6],
                          okButtonText: "OK"
                         });

                     });

              })

            })

          })

        }

}

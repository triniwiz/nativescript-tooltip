import * as observable from 'data/observable';
import * as pages from 'ui/page';
import {HelloWorldModel} from './main-view-model';
import {ToolTip} from "nativescript-tooltip";
import {EventData} from "data/observable";
import * as app from "application";
import {TextView} from "ui/text-view";
import {Color} from "color";
// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function pushIt(args) {
   const t = new ToolTip(args.object, {
        text: "Testing le Tester",
        position: "bottom",
        hideArrow: false,
        textColor: "white",
        backgroundColor: "blue",
        style: "CustomToolTipLayoutStyle",
        width:400
    });
    t.show();
}
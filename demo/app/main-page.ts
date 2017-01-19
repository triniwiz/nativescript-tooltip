import * as observable from 'data/observable';
import * as pages from 'ui/page';
import {HelloWorldModel} from './main-view-model';
import {ToolTip} from "nativescript-tooltip";
import {EventData} from "data/observable";
import * as app from "application";
// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function pushIt(args: EventData) {
    new ToolTip(args.object, {
        text: "This is some random text",
        position: "bottom",
        duration: 2000,
        hideArrow: false,
        textColor: "white",
        backgroundColor: "blue",
        style: "CustomToolTipLayoutStyle"
    })
}
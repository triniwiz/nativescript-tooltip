import {Color} from "color";
import {ToolTipConfig} from "./tooltip.common";
export class ToolTip {
    private tip: AMPopTip;
    private config:ToolTipConfig;
    private view:any;
    constructor(view: any, config: ToolTipConfig) {
        this.tip = AMPopTip.popTip();
        this.tip.shouldDismissOnTap = true;
        this.view = view;
        const ap = AMPopTip.appearance();
        this.config = config;
        if (config.backgroundColor) {
            ap.popoverColor = new Color(config.backgroundColor).ios;
        }

        if (config.textColor) {
            ap.textColor = new Color(config.textColor).ios;
        }

        if (config.hideArrow) {
            ap.arrowSize = CGRectMake(0, 0, 0, 0).size
        }

        if(config.delay){
            ap.delayIn = NSDateInterval.alloc().duration(config.delay)
        }

    }
    show(){
        let config = this.config;
        let view = this.view;
        let pos;
        switch (config.position) {
            case "left":
                pos = AMPopTipDirection.Left;
                break;
            case "right":
                pos = AMPopTipDirection.Right;
                break;
            case "bottom":
                pos = AMPopTipDirection.Down;
                break;
            case "top":
                pos = AMPopTipDirection.Up;
                break;
            default:
                pos = AMPopTipDirection.Up;
                break;

        }

        if (config.viewType && config.viewType === "native" && config.duration) {
            if (!config.width) {
                config.width = 400;
            }
            this.tip.showTextDirectionMaxWidthInViewFromFrameDuration(config.text, pos, this.config.width, view, view.frame, (config.duration / 1000));
        }
        else if (config.viewType && config.viewType === "native") {
            if (!config.width) {
                config.width = 400;
            }
            this.tip.showTextDirectionMaxWidthInViewFromFrame(config.text, pos, config.width, view, view.frame);
        }
        else if (config.duration) {
            if (!config.width) {
                config.width = 400;
            }
            this.tip.showTextDirectionMaxWidthInViewFromFrameDuration(config.text, pos, config.width, view.ios, view.ios.frame, (config.duration / 1000));
        }
        else {
            if (!config.width) {
                config.width = 400;
            }
            this.tip.showTextDirectionMaxWidthInViewFromFrame(config.text, pos, config.width, view.ios, view.ios.frame);
        }
    }

    hide(){
        this.tip.hide();
    }
}

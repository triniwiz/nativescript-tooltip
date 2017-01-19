import {Color} from "color";
import {ToolTipConfig} from "./tooltip.common";
export class ToolTip {
    private tip: AMPopTip;

    constructor(view: any, config: ToolTipConfig) {
        this.tip = AMPopTip.popTip();
        this.tip.shouldDismissOnTap = true;
        const ap = AMPopTip.appearance();

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
            this.tip.showTextDirectionMaxWidthInViewFromFrameDuration(config.text, pos, config.width | 400, view, view.frame, (config.duration / 1000));
        } else if (config.viewType && config.viewType === "native") {
            this.tip.showTextDirectionMaxWidthInViewFromFrame(config.text, pos, config.width | 400, view.ios, view.ios.frame);
        } else if(config.duration){
            this.tip.showTextDirectionMaxWidthInViewFromFrameDuration(config.text, pos, config.width | 400, view.ios, view.ios.frame, (config.duration / 1000))
        }else {
            this.tip.showTextDirectionMaxWidthInViewFromFrame(config.text, pos, config.width | 400, view.ios, view.ios.frame);
        }

    }
}

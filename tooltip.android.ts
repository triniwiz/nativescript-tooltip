import * as app from "application";
import {ToolTipConfig} from "./tooltip.common";
declare const android: any, it: any, Math, java;
export class ToolTip {
    private builder: any;

    constructor(view: any, config: ToolTipConfig) {
        const id = Math.floor((Math.random() * 1000) + 1);
        this.builder = new it.sephiroth.android.library.tooltip.Tooltip.Builder(id);

        let pos;
        switch (config.position) {
            case "left":
                pos = it.sephiroth.android.library.tooltip.Tooltip.Gravity.LEFT;
                break;
            case "right":
                pos = it.sephiroth.android.library.tooltip.Tooltip.Gravity.RIGHT;
                break;
            case "bottom":
                pos = it.sephiroth.android.library.tooltip.Tooltip.Gravity.BOTTOM;
                break;
            case "top":
                pos = it.sephiroth.android.library.tooltip.Tooltip.Gravity.TOP;
                break;
            default:
                pos = it.sephiroth.android.library.tooltip.Tooltip.Gravity.CENTER;
                break;

        }
        if (config.viewType && config.viewType === "native") {
            this.builder.anchor(view, pos);
        } else {
            this.builder.anchor(view.android, pos);
        }
        this.builder.text(config.text);

        if (config.duration) {
            this.builder.closePolicy(new it.sephiroth.android.library.tooltip.Tooltip.ClosePolicy()
                .insidePolicy(true, false)
                .outsidePolicy(true, false), config.duration);
        } else {
            this.builder.closePolicy(new it.sephiroth.android.library.tooltip.Tooltip.ClosePolicy()
                .insidePolicy(true, false)
                .outsidePolicy(true, false), java.lang.Integer.MAX_VALUE);
        }


        if (config.fadeDuration) {
            this.builder.fadeDuration(config.fadeDuration);
        }
        this.builder.fitToScreen(false);

        if (config.width) {
            this.builder.maxWidth(config.width)
        }
        if (config.delay) {
            this.builder.showDelay(config.delay)
        }
        this.builder.withOverlay(false);
        if (config.hideArrow) {
            this.builder.toggleArrow(false);
        } else {
            this.builder.toggleArrow(true);
        }

        if (config.style) {
            this.builder.withStyleId(ToolTip.getResource("style",config.style))
        }
        it.sephiroth.android.library.tooltip.Tooltip.make(app.android.foregroundActivity, this.builder.build()).show();
    }

    static getResource(type, name) {
        return app.android.context.getResources().getIdentifier(name, type, app.android.context.getPackageName());
    }
}
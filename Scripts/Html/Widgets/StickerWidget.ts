import HtmlWidget = require("./HtmlWidget");
import BoardTypes = require("../../BoardTypes");

class StickerWidget extends HtmlWidget {

    constructor(container: HTMLElement,params: BoardTypes.IStickerWidgetParameters) {
        super(container, params.x, params.y);
        this._element.style.backgroundColor = "#ff0";
        this._element.style.color = "#000";
        this._element.style.textAlign = "center";
        this._element.innerHTML = params.text;
    }

    protected _applyDrawAttributes() {
        super._applyDrawAttributes();
        var size = 200 * this._scale;
        this._element.style.width = size + "px";
        this._element.style.height = size + "px";
        this._element.style.fontSize = (25 * this._scale) + "pt";
    }



}

export =StickerWidget;